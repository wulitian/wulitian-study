# js中类型转换

#### 精简回答：

1. 转boolean:在判断时候除了：undefined， null， false， NaN， ''， 0， -0都会转换成true

2. 对象转基本数据类型，首先会调用valueof,然后调用toString,并且重写Symbol.toPrimitive ，该方法在转基本类型时调用优先级最高。

