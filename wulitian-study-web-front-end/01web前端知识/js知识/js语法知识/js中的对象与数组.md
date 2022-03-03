# js中的对象与数组

#### Object

1. 创建

```js
// 构造函数方式
const obj = new Object();
// 对象字面量
const obj2 = {};
```

2. 访问

```js
//数值属性会自动转换为字符串
const obj = {
    1:1,
    name:'wulitian'
}
console.log(obj.name);
console.log(obj[name]);
```

#### Array

1. 创建

```js
// 构造函数方式
const arr = new Array();
const arr2 = new Array(5);
// 对象字面量
let arr3 = [1, 2, 3, 4];
// Array.from()
const arr4 = Array.from(1,2,3,4);
// Array.of()
const arr5 = Array.of(1,2,3,4);
```

2. 访问

```js
let arr = [1, 2, 3, 4];
console.log(arr[0])// 通过索引访问
console.log(arr[4])//超出索引undefine
arr.length = 5//设置长度后用undefine补充
```

3. 方法

- 迭代方法： keys()：返回数组索引的迭代器 values()：返回数组元素的迭代器 entries()：返回索引/值对的迭代器。

- 复制与填充方法：fill()：向已有数组插入全部或部分的值，copyWithin()：指定范围浅复制数组中的部分内容，然后将其插入到指定索引开始的位置。

- 转换方法：valueOf()：返回数组本身，toString()：数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串，toLocaleString()：调用每个值的 toLocalStorage() 方法，返回逗号分隔的数组值的字符串。

- 栈方法：push()：将任意数量的参数添加到数组末尾，返回数组的最新长度，pop()：删除数组的最后一项，数组长度 -1，返回被删除的项。

- 队列方法：shift()：删除数组第一项并返回该项，数组长度 -1，unshift()：数组开头加入任意多的值，返回数组最新长度。

- 排序方法：reverse()：数组元素反向排列，sort()：默认将每一项 String() 转换后升序排列，也可传入比较函数实现排列。

- 操作方法：concat()：创建当前数组副本，并将参数添加到副本末尾，组成一个新数组，slice()：创建一个包含原数组中一个或多个的新数组，splice()：删除、插入、替换，功能强大。

- 查找位置方法： indexOf()：从头搜索，返回第一个符合元素的索引或 -1，astIndexOf()：跟 indexOf() 分头行动，includes()：存在符合断言函数就返回 true，否则返回 false，find()：返回符合断言函数的第一个元素，否则返回 undefined
，findIndex()：返回 find 返回元素的索引或者 -1。

- 迭代方法：every()：传入函数都返回 true，则它返回 true，否则 返回 false，some()：传入函数有返回 true，则它返回 true，否则 返回 false，filter()：返回第一个传入函数返回 true 的元素，没有遇到就返回 undefined，forEach()：执行传入函数，不返回值
，map()：执行传入函数，返回每次函数调用结果组成的数组。

- 归并方法：reduce()：从前往后迭代所有项，并构建一个最终的返回值reduceRight()：从后往前。

