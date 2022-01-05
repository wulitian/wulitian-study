# html中iframe

#### 精简回答：

1. iframe优点：iframe 会阻塞主页面的 Onload 事件；

2. iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

3. 使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以可以绕开以上两个问题。
