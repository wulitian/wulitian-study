# HTTP如何实现长连接，什么时候超时

#### 什么是HTTP的长连接

HTTP分为长连接和短连接，本质上说的是TCP的长短连接。TCP连接是一个双向的通道，
它是可以保持一段时间不关闭的，因此TCP连接才具有真正的长连接和短连接。
TCP长连接可以复用一个TCP连接，来发起多次的HTTP请求，这样就可以减少资源消耗，否则每次请求都需要重新建立一个TCP链接。

#### 如何设置长连接

1.0默认是关闭的，1.1以后默认是开启的 （Connection:keep-alive）

#### 什么时候超时

HTTP一般会有httpd守护进程，里面可以设置keep-alive timeout，当tcp连接闲置超过这个时间就会关闭，也可以在HTTP的header里面设置超时时间
TCP 的keep-alive包含三个参数，支持在系统内核的net.ipv4里面设置；当 TCP 连接之后，闲置了tcp_keepalive_time，则会发生侦测包，如果没有收到对方的ACK，那么会每隔 tcp_keepalive_intvl再发一次，直到发送了tcp_keepalive_probes，就会丢弃该连接。





