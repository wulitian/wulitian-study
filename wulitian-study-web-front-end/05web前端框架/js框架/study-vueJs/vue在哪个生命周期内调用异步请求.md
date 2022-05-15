# vue在哪个生命周期内调用异步请求

#### 精简回答：

钩子函数 created、beforeMount、mounted 中进行调用，最好在created可以减少loading时间，ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性

