# Vue的父组件和子组件生命周期钩子函数执行顺序

#### 精简回答：

1. 加载渲染流程：

父组件beforeCreate>父组件created>父组件beforeMount>子组件beforeCreate>子组件created>子组件beforeMount>子组件mounted>父组件mounted

2. 子组件更新过程：

父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

3. 父组件更新过程：

父 beforeUpdate -> 父 updated

4. 销毁过程：

父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed
