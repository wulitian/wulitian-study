# js中数据类型的判断

#### 精简回答：
1. typeof,判断除了null 

2. Object.prototype.tostring.call()的值有9个Number,Function,String,Boolean, Object,Array,Null,RegExp,Date 

- 用Object.prototype.tostring.call()不用tostring的原因toString为Object的原型方法，用Array ，function等类型作为Object的实例，都重写了toString方法，不同的对象类型调用toString方法时，调用的是对应的重写之后的toString方法，而不会去调用Object上原型toString方法，所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型。

3. constructor/instanceof方法

- 基本数据类型不能用constructor/instanceof来检测

- 不能检测基本数据类型，用instanceof检测的时候,只要当前的这个类在实例的原型链上(可以通过原型链proto找到它),检测出来的结果都是true
