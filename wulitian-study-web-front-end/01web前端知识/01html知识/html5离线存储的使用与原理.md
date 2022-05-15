# html5离线存储的使用与原理

#### 精简回答

1. Application Cache
HTML5 最早提供一种了一种缓存机制，可以使 web 的应用程序离线运行。我们使用 Application Cache 接口设置浏览器应该缓存的资源，即配置 manifest 文件， 在用户处于离线状态时，点击刷新按钮，应用也能正常加载与工作。不过该接口很快被标准废弃了，原因之一是这是个设计很不合理的接口，比如更新不及时，无法做到用 javascript 精细化控制，可用性很差，如果你不严格的遵循其规则，会遇到很多坑。取而代之的是更强大的 service-worker。

2. service-worker
正因为 Application Cache 一直无法有效的解决离线资源精细化控制，service-worker（以下简称 sw）接口被设计出来了，比起 Application Cache，它提供独立的后台 JS 线程，是一种特殊的 worker 上下文访问环境。在渐进式 web 应用 pwa 中，sw 为 Network independent 特性提供了最核心的支持。

借助 CacheStorage，我们可以在 sw 安装激活的生命周期中，按需填充缓存资源，然后在 fetch 事件中，拦截 http 请求，将缓存资源或者自定义消息返回给页面。

service-worker 实现了真正的可用性及安全性。首先，相对于原有 web 应用逻辑是不可见，它类似于一个中间拦截服务，中间发生任何错误，都会退回到请求线上逻辑。其次，它只能在 https 下运行保证了安全性。

sw 对于我们的离线化方案而言，有一个致命的问题，就是 ios webview 兼容性问题。ios 11.3 以上自带的 Safari 是支持 ws，然而， 苹果一贯的特性， 默认 UIWebView 不支持 service-worker。


在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest ⽂件，如果是第⼀次访问 app ，那么浏览器就会根据manifest⽂件的内容下载相应的资源并且进⾏离线存储。如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使⽤离线的资源加载⻚⾯，然后浏览器会对⽐新的 manifest ⽂件与旧的 manifest ⽂件，如果⽂件没有发⽣改变，就不做任何操作，如果⽂件改变了，那么就会重新下载⽂件中的资源并进⾏离线存储。
