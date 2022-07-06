# vue-router如何实现懒加载

什么是路由懒加载？

也叫延迟加载，即在需要的时候进行加载，随用随载。

官方解释. 

1. 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。

2. 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

官方在说什么呢？为什么需要懒加载？

1. 首先，我们知道路由中通常会定义很多不同的页面。

2. 这个页面这项目build打包后，一般情况下，会放在一个单独的js文件中

3. 但是，如果很多的页面都放在同一个js文件中，必然会造成这个页面非常大

4. 如果我们一次性的从服务器中请求下来这个页面，可能会花费一定时间，用户体验不好

5. 如何避免这种情况发生呢？使用路由懒加载就可以了

继续解释原由？

1. 像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大。

2. 造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，即使做了loading也是不利于用户体验。

3. 而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时

也就是说. 进入页面不用也不需要一次性加载过多资源造成加载时间过程！

路由懒加载做了什么事情？

1. 主要作用是将路由对应的组件打包成一个个的js代码块

2. 只有在这个路由被访问到的时候，才加载对应的组件，否则不加载！

即. 只有在这个路由被访问到的时候，才加载对应的组件，否则不加载！

1:.如何实现路由懒加载？？

vue项目实现路由按需加载（路由懒加载）的三种方式. 

1. Vue异步组件

2. ES6标准语法import（）---------推荐使用！！！！！

3. webpack的require，ensure()

2.Vue异步加载技术

1. vue-router配置路由，使用vue的异步组件技术，可以实现懒加载，此时一个组件会生成一个js文件。

2. component: resolve => require(['放入需要加载的路由地址'], resolve)

{
path: '/problem',
name: 'problem',
component: resolve => require(['../pages/home/problemList'], resolve)
}
3.ES6推荐方式imprort ()----推荐使用

1. 直接将组件引入的方式，import是ES6的一个语法标准，如果需要浏览器兼容，需要转化成es5的语法。

2. 推荐使用这种方式，但是注意wepack的版本>2.4

3. vue官方文档中使用的也是import实现路由懒加载

4. 上面声明导入，下面直接使用

import Vue from 'vue';
import Router from 'vue-router';
// 官网可知. 下面没有指定webpackChunkName，每个组件打包成一个js文件。
const Foo = () => import('../components/Foo')
const Aoo = () => import('../components/Aoo')
// 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件。
// const Foo = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../components/Foo')
// const Aoo = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../components/Aoo')
export default new Router({
routes: [
{
path: '/Foo',
name: 'Foo',
component: Foo
},
{
path: '/Aoo',
name: 'Aoo',
component: Aoo
}
]
})

4.webpack提供的require.ensure()实现懒加载. 

1. vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。

2. 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。

3. require.ensure可实现按需加载资源，包括js,css等。他会给里面require的文件单独打包，不会和主文件打包在一起。

4. 第一个参数是数组，表明第二个参数里需要依赖的模块，这些会提前加载。

5. 第二个是回调函数,在这个回调函数里面require的文件会被单独打包成一个chunk,不会和主文件打包在一起，这样就生成了两个chunk,第一次加载时只加载主文件。

6. 第三个参数是错误回调。

7. 第四个参数是单独打包的chunk的文件名

import Vue from 'vue';
import Router from 'vue-router';
const HelloWorld=resolve=>{
require.ensure(['@/components/HelloWorld'],()=>{
resolve(require('@/components/HelloWorld'))
})
}
Vue.use('Router')
export default new Router({
routes:[{
{path:'./',
name:'HelloWorld',
component:HelloWorld
}
}]
})

4.import和require的比较（了解）

1. import 是解构过程并且是编译时执行

2. require 是赋值过程并且是运行时才执行，也就是异步加载

3. require的性能相对于import稍低，因为require是在运行时才引入模块并且还赋值给某个变量