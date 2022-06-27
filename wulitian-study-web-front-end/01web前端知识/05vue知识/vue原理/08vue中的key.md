# vue中的key  

1. vue中的key主要是搞笑的更新DOM
2. vue在patch过程中判断两个节点是否是相同节点key是必要条件，渲染一组列表时，key往往是唯一标识，如果不定义key的话vue会认为比较的两个节点是同一个，即使实际不是，这样会导致频繁更新元素。
使得patch比较低效，形象性能。
3. 实际使用中在渲染一组列表时key必须设置，而且是唯一的，避免使用索引作为key这可能导致一些隐蔽的bug，vue中在过渡切换时也会使用key属性，目的是让vue可以区分他们，否则vue替换内部属性而不会出发过渡效果。
4. 从源码中看，vue判断两个节点是否相同主要判断两者的key与元素类型，因此如果不设置key就是undefined，永远认为这两个元素相同，只能去做更新操作，这造成了大量的dom更新操作

## 通过例子与源码看

创建一个实例，2秒后往`items`数组插入数据

```html
<body>
  <div id="demo">
    <p v-for="item in items" :key="item">{{item}}</p>
  </div>
  <script src="../../dist/vue.js"></script>
  <script>
    // 创建实例
    const app = new Vue({
      el: '#demo',
      data: { items: ['a', 'b', 'c', 'd', 'e'] },
      mounted () {
        setTimeout(() => { 
          this.items.splice(2, 0, 'f')  // 
       }, 2000);
     },
   });
  </script>
</body>
```

在不使用`key`的情况，`vue`会进行这样的操作：

![](https://static.vue-js.com/c9da6790-3f41-11eb-85f6-6fac77c0c9b3.png)

分析下整体流程：

- 比较A，A，相同类型的节点，进行`patch`，但数据相同，不发生`dom`操作
- 比较B，B，相同类型的节点，进行`patch`，但数据相同，不发生`dom`操作
- 比较C，F，相同类型的节点，进行`patch`，数据不同，发生`dom`操作
- 比较D，C，相同类型的节点，进行`patch`，数据不同，发生`dom`操作
- 比较E，D，相同类型的节点，进行`patch`，数据不同，发生`dom`操作
- 循环结束，将E插入到`DOM`中

一共发生了3次更新，1次插入操作

在使用`key`的情况：`vue`会进行这样的操作：

- 比较A，A，相同类型的节点，进行`patch`，但数据相同，不发生`dom`操作
- 比较B，B，相同类型的节点，进行`patch`，但数据相同，不发生`dom`操作
- 比较C，F，不相同类型的节点
    - 比较E、E，相同类型的节点，进行`patch`，但数据相同，不发生`dom`操作
- 比较D、D，相同类型的节点，进行`patch`，但数据相同，不发生`dom`操作
- 比较C、C，相同类型的节点，进行`patch`，但数据相同，不发生`dom`操作
- 循环结束，将F插入到C之前

一共发生了0次更新，1次插入操作

通过上面两个小例子，可见设置`key`能够大大减少对页面的`DOM`操作，提高了`diff`效率

### 设置key值一定能提高diff效率吗？

其实不然，文档中也明确表示

> 当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素

这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出

建议尽可能在使用 `v-for` 时提供 `key`，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升


## 三、原理分析

源码位置：core/vdom/patch.js

这里判断是否为同一个`key`，首先判断的是`key`值是否相等如果没有设置`key`，那么`key`为`undefined`，这时候`undefined`是恒等于`undefined`

```js
function sameVnode (a, b) {
    return (
        a.key === b.key && (
            (
                a.tag === b.tag &&
                a.isComment === b.isComment &&
                isDef(a.data) === isDef(b.data) &&
                sameInputType(a, b)
            ) || (
                isTrue(a.isAsyncPlaceholder) &&
                a.asyncFactory === b.asyncFactory &&
                isUndef(b.asyncFactory.error)
            )
        )
    )
}
```

`updateChildren`方法中会对新旧`vnode`进行`diff`，然后将比对出的结果用来更新真实的`DOM`

```js
function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    ...
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
            ...
        } else if (isUndef(oldEndVnode)) {
            ...
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
            ...
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
            ...
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
            ...
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
            ...
        } else {
            if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
            idxInOld = isDef(newStartVnode.key)
                ? oldKeyToIdx[newStartVnode.key]
                : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
            if (isUndef(idxInOld)) { // New element
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
            } else {
                vnodeToMove = oldCh[idxInOld]
                if (sameVnode(vnodeToMove, newStartVnode)) {
                    patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
                    oldCh[idxInOld] = undefined
                    canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
                } else {
                    // same key but different element. treat as new element
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
                }
            }
            newStartVnode = newCh[++newStartIdx]
        }
    }
    ...
}
```
