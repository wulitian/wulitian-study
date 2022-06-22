# vue怎么用vm.$set() 解决对象新增属性不能响应的问题

#### 精简回答：

1. 受现代 JavaScript 的限制 ，Vue 无法检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的。但是 Vue 提供了 Vue.set

2. 如果是数组直接出发splice如果是对象判断该对象是不是响应式的，如果不是通过defineReactive（其中通过object.defineProperty()）



