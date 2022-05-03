# js中的typeof与instanceof

#### typeof

1. typeof对于基本类型，除了null都可以显示正确的类型

2. typeOf对于对象，除了函数都会显示object

3. 对于null来说虽然是基本数据类型，但是会显示object,这是存在很久的bug

4. 获取正确的数据类型可以通过Object.prototype.tostring.call()可以获取字符串。

#### instanceof

1. instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype

