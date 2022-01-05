# js中promise

#### 精简回答：

1. promise解决的问题

- 解决了回调地域问题

- 解决了错误处理的问题

- 解决了同时同时进行多个异步操作代码编写困难

2. promise是什么

- 一个 Promise 对象中定义的主要是一段执行具体操作的代码，并且在这段代码中，会执行两个回调函数，一个表示操作成功（resolve），一个表示操作失败（reject）

- promise中初始是 pending 状态，可以通过函数 resolve 和 reject ，将状态转变为 resolved 或者 rejected 状态，状态一旦改变就不能再次变化。后两种状态属于稳定状态

