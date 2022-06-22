# vue中的组件通信方法

1. prop与$emit 适用于父子组件
2. ref与$parent与$children 适用于父子组件
3. EventBus 适用于父子隔代兄弟组件
4. $attrs与$listener 适用于隔代组件
5. provide与inject 适用于隔代组件
6. vuex 适用于父子隔代兄弟组件