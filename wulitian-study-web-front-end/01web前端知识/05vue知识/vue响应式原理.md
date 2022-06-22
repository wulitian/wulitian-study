# vue响应式原理

#### 精简回答：

1. Object.defineProperty

2. 初始化用户传递的data，数据观测observer, 对象或数组的处理，循环对象属性，或数组，进行响应式变化defineReactive,Object.defineProperty拦截属性更新操作进行依赖通知










