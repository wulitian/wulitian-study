# vue中v-model原理

#### 精简回答：

1.  vue 项目中主要使用 v-model 指令在表单 input、textarea、select 等元素上创建双向数据绑定，我们知道 v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

2. text 和 textarea 元素使用 value 属性和 input 事件；checkbox 和 radio 使用 checked 属性和 change 事件；select 字段将 value 作为 prop 并将 change 作为事件。与v-bind + v-on:input='$event.target.value'

3. 如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件
```vue
<!--父组件：-->
<ModelChild v-model="message"></ModelChild>

<!--子组件：-->
<div>{{value}}</div>

props:{
    value: String
},
methods: {
  test1(){
     this.$emit('input', 'wulitian')
  },
}

```



