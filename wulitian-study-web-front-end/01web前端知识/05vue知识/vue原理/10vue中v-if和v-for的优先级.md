# v-if和v-for的优先级

1. `v-if`与`v-for`都是`vue`中的模板指令
 
2. 在Vue2中，`v-for`优先于`v-if`，`Vue3`中，则完全相反。`vue2`中不建议放在放在一起使用，放在一起会先执行`v-for`再执行if浪费性能
   
3. 如果我们遇到一个列表的话就需要在循环时根据某一个属性进行判断，我们可以借助计算属性直接获取判断好的属性，如果常规是否符合条件的判断我们可以放在v-for外面的标签上
   
4. 为什么v-for优先级大于v-if呢是因为`v-if`与`v-for`都是`vue`模板系统中的指令，在编译模板时候会将指令系统转换为可执行的render函数，我们可以同多`vue.$options.render`,获取转换后的render函数

```js
ƒ anonymous() {
  with (this) { return 
    _c('div', { attrs: { "id": "app" } }, 
    _l((items), function (item) 
    { return (isShow) ? _c('p', [_v("\n" + _s(item.title) + "\n")]) : _e() }), 0) }
}
```
`_l`是`vue`的列表渲染函数，函数内部都会进行一次`if`判断初步得到结论：`v-for`优先级是比`v-if`高

5. 源码位置：` \vue-dev\src\compiler\codegen\index.js`

```js
export function genElement (el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre
  }
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    ...
}
```
在进行`if`判断的时候，`v-for`是比`v-if`先进行判断最终结论：`v-for`优先级比`v-if`高。

