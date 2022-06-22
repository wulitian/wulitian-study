# vue中双向数据绑定原理

vue2采用数据劫持结合发布订阅模式实现的，其中通过object.defineProperty()方法劫持各个属性setter,getter,在数据变动的时候发布消息给订阅者，
触发相应的回调，并且，由于在不同数据上出发同步，可以精准的将变更发送给绑定者。
具体步骤
1. 将数据加入递归添加到响应式
2. compile解析模板指令，将模板中的变量换成真实数据，然后初始化渲染视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据发生变化，收到通知更新视图。
3. watcher订阅者是observer和compile之间的桥梁，主要做的事情是，在自身实例化时将往属性订阅器中dep里面添加自己,自身必须有一个update()方法,待属性变化时dep.notice()通知的时候，可以调用自身的update()并触发compile
4. MVVM为数据绑定入口，整合observer,compile,watcher三者，通过observer监听model变化，通过compile编译模板指令，最终利用watcher搭建起通信的桥梁，来达到数据双向绑定。


