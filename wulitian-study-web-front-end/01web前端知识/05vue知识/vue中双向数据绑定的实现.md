# vue中双向数据绑定的实现

#### 精简回答：

1. 监听器observer 通过object.defineProperty实现数据响应式，通过get,set实现数据响应式

2. 解析器compile 解析vue模板指令 将模板变量替换成数据，初始化渲染视图，将每个节点绑定更新函数，添加数据订阅者，一旦数据变化通知订阅者watcher进行更新

3. 订阅者Watcher 订阅observer属性变化信息，属性变化是触发compile中对应函数

4. 订阅器dep 对监听器observer和watcher进行统一管理







