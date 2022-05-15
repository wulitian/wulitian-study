# vue中vue-router路由模式有几种

#### 精简回答：

1. hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；

- location.hash url种#与后面的内容就是hash值，hash是一种状态请求服务端时hash不会传递，hash值变化都会在浏览器访问记录添加一条前进后退按钮控制hash切换可以用hashChange事件监听hash值的变化，从而对页面进行渲染

2. history : 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；

h5提供的api包括history.pushState,history.replaceState可以在不刷新情况下，操作浏览器记录，唯一不同的是，前者新增一个历史记录，后者替换历史记录其中popChange监听url的变换进行页面渲染，前两个api不会触发popChange需要手动实现

3.abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.





