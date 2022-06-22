# vue中keep-alive的了解

#### 精简回答：

1. 包裹动态组件，会缓存不活动的组件实例，主要用于保留组件状态或避免重复渲染列表常用

2. 一般结合路由动态组件一起使用，用于缓存组件

3. include,exclude属性两者都支持字符串正则表达式，include表示只有名称匹配才会缓存exclude表示匹配的不会缓存（优先级高）

4. 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。





