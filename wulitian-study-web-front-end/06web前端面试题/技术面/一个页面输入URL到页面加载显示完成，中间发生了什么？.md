## 一个页面输入URL到页面加载显示完成，中间发生了什么？

#### 精简回答：

1.浏览器向服务器发起一个请求。

2.进行dns解析。

 -	先找浏览器缓存。

 -	再找操作系统缓存。

 -	读取本地host文件。

 -	发起网络dns请求调用。

 -	得到最后的服务器ip。

3.客户端启动一个随机端口（小于65535），经过三次握手进入到服务器网卡。

4.浏览器发送正正请求。

5.服务器接收到HTTP请求，解析路径和参数，后台处理后完成响应。

6.浏览器可以收到服务器的响应并开始渲染页面渲染dom树，css树。

7.添加用户与界面交互，绑定一些事件，执行一些动态行为。

8.刷新一些局部内容

#### 详细回答：

1.从浏览器接收url到开启网络请求线程（展开浏览器机制与进程和线程之间的关系）

2.开启网络线程到发出一个完整的http请求（展开dns查询，tcp/ip请求，五层互联网协议栈知识）

3.从服务器接收到请求到对应后台接收到请求（展开负载均衡，安全拦截知识与后台处理等）

4.后人与前台http交互（展开http请求头、响应码，报文结构,cookie知识）

5.缓存问题（http缓存，Etagl , catch-control）

6.浏览器接收到http数据包后解析流程（解析html，解析dom树，解析css规则树，合并render树，然后layout,painting渲染、复合图层的合成，GPU绘制、外链资源处理、loaded、DOMContentLoaded）

7.css 可视化格式模型（元素渲染规则，包含块，控制框，BFC,IFC等概念）

8.js引擎解析过程（js解释阶段，预处理阶段，执行阶段生成执行上下文，vo,作用域链，回收机制）

9.其他（扩展跨域，web安全，hybird模式等等）





