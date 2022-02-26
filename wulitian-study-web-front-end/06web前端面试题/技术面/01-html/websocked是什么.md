# websocked是什么

#### 精简回答：

1. websocked不是http协议，http只负责简历websocked链接，websocked原理就是socked,ip,tcp通信，只不过包裹一层，加了一些限制，可以理解为打了补丁的长连接http，传统http可以通过轮训建立长连接
keep-alive connection：是一次tcp通信完成多个http请求每一个请求都单独发头，
polling 是指从客户端（一般就是浏览器）不断主动的向服务器发 HTTP 请求查询是否有新数据。这两种模式有一个共同的缺点，就是除了真正的数据部分外，服务器和客户端还要大量交换 HTTP header，信息交换效率很低。长连接”都是伪。长连接

2. WebSocket 解决的第一个问题是，通过第一个 HTTP request 建立了 TCP 连接之后，之后的交换数据都不需要再发 HTTP request 了，使得这个长连接变成了一个真。长连接。

3. 在此基础上 WebSocket 还是一个双通道的连接，在同一个 TCP 连接上既可以发也可以收信息。此外还有 multiplexing 功能，几个不同的 URI 可以复用同一个 WebSocket 连接。这些都是原来的 HTTP 不能做到的。
