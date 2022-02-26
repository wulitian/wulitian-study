# vue中Proxy与Object.defineProperty优劣对比

#### 精简回答：

1. proxy：可以直接监听对象而非属性，可以直接监听数组变化，有多种拦截方法apply,ownkeys,deleteProperty,has等 Object.defineProperty 不具备；proxy返回新对象 Object.defineProperty 只能遍历对象属性直接修改；

2. Object.defineProperty：兼容性好兼容ie9 proxy兼容性不好ie11






