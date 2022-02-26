# vue父组件可以监听到子组件的生命周期吗

#### 精简回答：

1. <child @mounted='cmounted'/>

cmounted(){
    this.$emit("mounted")
}

2. <child @hook:mounted='cmounted'/>


cmounted(){
    ....
}
@hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听。
