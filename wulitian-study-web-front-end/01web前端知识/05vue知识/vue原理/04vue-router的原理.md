# vue-router的原理

vue-router 可以通过mode设置三种模式 hash,history,abstract

#### hash模式

默认是hash模式，基于浏览器history api使用
window.addEventListener('hashchange',callback,false)对浏览器进行监听，当调用push时把新路由添加到浏览器历史中
使用replace时将浏览器栈顶元素替换成新的路由其中hash值为#后面的值，浏览器根据hash变化将页面加载对应的dom，锚点只是浏览器行为
每次变化时都会在浏览器中留下历史记录，可以通过后退按钮回到相应的位置

#### history模式

history模式，基于浏览器history api 使用window.onpopstate对浏览器进行地址监听，对history api中的pushSatate(),replaceState()
进行封装，当方法调用时，会对浏览器历史栈进行修改，实现url跳转，但是刷新时页面会走后端路由，需要服务端兜底

#### abstract模式

不涉及浏览器相关历史记录，流程与hash一样，通过数组维护记录栈，服务端下使用，使用一个不依赖浏览器历史记录的虚拟管理后台。
