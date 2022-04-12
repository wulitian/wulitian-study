# js中数组与类似数组区别

#### 精简回答：

1. 数组与类数组对象有什么区别：数组和类数组对象都可以用索引访问，并具有length属性，不同是类数组不能调用数组的方法。

2. 类数组：拥有length属性，元素保存在对象中，可以通过索引访问，但是没有数组方法push,slice,indexOf

3. 类数组对象：常见的有arguments，document.getElementsByTagName()

4. 类数组转换数组：Array.from(),Array.prototype.slice.call()
