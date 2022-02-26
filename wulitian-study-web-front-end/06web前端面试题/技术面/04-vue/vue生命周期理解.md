# vue生命周期理解

#### 精简回答：

1. beforeCreate：实例初始化前，数据观测，event/watch前调用

2. created：实例创建完成后被立即调用数据观测 (data observer)，property 和方法的运算，watch/event 事件回调，挂载阶段没开始$el不可用

3. beforeMount：在挂载之前调用render函数首次调用

4. mounted：实例挂载el被替换了vm.$el 注意 mounted 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 mounted 里使用 vm.$nextTick：

5. beforeUpdate：数据更新时调用，发生虚拟的dom打补丁之前，这里适合在更新前访问现有dom比如手动移除添加的事件

6. updated：由于数据更改了导致虚拟dom重新渲染打补丁，在之后调用调用时dom已经更新，大多数情况不应该改变状态，最好通过计算属性，watch取代，注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用 vm.$nextTick：

7. activated：被 keep-alive 缓存的组件激活时调用。

8. deactivated：被 keep-alive 缓存的组件停用时调用。

9. beforeDestory：实例销毁之前调用。在这一步，实例仍然完全可用。实例可用

10. destoryed：实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

11. errorCaptured:当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播

12. 错误传播规则

- 默认情况下，如果全局的 config.errorHandler 被定义，所有的错误仍会发送它，因此这些错误仍然会向单一的分析服务的地方进行汇报。

- 如果一个组件的继承或父级从属链路中存在多个 errorCaptured 钩子，则它们将会被相同的错误逐个唤起。

- 如果此 errorCaptured 钩子自身抛出了一个错误，则这个新错误和原本被捕获的错误都会发送给全局的 config.errorHandler。

- 一个 errorCaptured 钩子能够返回 false 以阻止错误继续向上传播。本质上是说“这个错误已经被搞定了且应该被忽略”。它会阻止其它任何会被这个错误唤起的 errorCaptured 钩子和全局的 config.errorHandler。



