# js中async，await

#### 精简回答：

1. async await最异步写法的终解决方案，async函数是Generator函数的语法糖,async返回promise对象，可以使用。then添加回调，await会阻断后面的代码。

2. async优点

- 内置执行器:调用方式与普通函数一样，generator需要调用执行器then

- 更好的语义:async和await相比较*和yield
