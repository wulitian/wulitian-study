# js中的错误处理与调试

#### try catch语句

```js
try {
    // statements
} catch(e) {
    // statements
    console.log(e);
}
```
其中e形参中的两个成员e.name异常名称,e.message异常信息

#### finally字句

无论如何都将执行finally字句，当同时在try catch语句内return，catch捕获内return与finally内return 只会执行finally中的return。

#### 错误类型

- Error：基类。

- EavlError：eval函数抛出。

- RangeError：数组越界抛出。

- ReferenceError：找不到对象抛出。

- SyntaxError：eval中的字符串错误抛出。

- TypeError：变量中保存意外类型，不存在的方法时抛出。

- URIError：使用encodeURI或decodeURI()中URI格式不正确时抛出。

#### 抛出错误

当遇到throw时代码执行结束，我们可以自定义抛出的异常。

#### onerror事件

经过try catch处理的错误都会触发window对象上的onerror事件接受三个参数错误消息、错误所在的url、行号，如果在onerror事件加入return false，可以阻止浏览器报告错误的默认行为。其中image实例对象也支持onerror事件。

#### 错误类型

1. 类型转换

2. 数据类型错误

3. 通信错误

#### 通常把错误记录到服务器

通常可以借用image实例的src，因为这个不必担心跨域问题。


