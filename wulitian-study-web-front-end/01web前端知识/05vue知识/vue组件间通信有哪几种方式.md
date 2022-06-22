# vue组件间通信有哪几种方式

#### 精简回答：

1. Vue 组件间通信只要指：父子组件通信、隔代组件通信、兄弟组件通信

2. props / $emit 适用 父子组件通信

3. ref 与 $parent / $children 适用 父子组件通信

4. EventBus （$emit / $on） 适用于 父子、隔代、兄弟组件通信

5. $attrs/$listeners 适用于 隔代组件通信

6. provide / inject 适用于 隔代组件通信


