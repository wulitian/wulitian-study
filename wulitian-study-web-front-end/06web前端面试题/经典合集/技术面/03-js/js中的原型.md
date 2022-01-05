# js中的原型

#### 精简回答：

1. 每个函数都有原型，除了Function.prototype.bind()

2. Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它

3. Function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它

4. Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建除了以上两个特殊对象，其他对象都是通过构造器 new 出来的

5. 函数的 prototype 是一个对象，也就是原型，对象的 __proto__ 指向原型， __proto__ 将对象和原型连接起来组成了原型链
