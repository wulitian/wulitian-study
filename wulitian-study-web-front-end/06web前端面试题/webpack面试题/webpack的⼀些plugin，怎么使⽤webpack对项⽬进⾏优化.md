# webpack的⼀些plugin，怎么使⽤webpack对项⽬进⾏优化

#### 精简回答：

1. 减少编译体积 ContextReplacementPugin 、 IgnorePlugin 、 babel-plugin-import 、 babel-plugin-transform-runtime


2. 并⾏编译 happypack 、 thread-loader 、 uglifyjsWebpackPlugin 开启并⾏

3. 缓存 cache-loader 、 hard-source-webpack-plugin 、 uglifyjsWebpackPlugin 开启缓存、 babel-loader 开启缓存预编译 dllWebpackPlugin && DllReferencePlugin 、 auto-dll-webapck-plugin

4. 减少编译体积 Tree-shaking 、 Scope Hositing

5. hash 缓存 webpack-md5-plugin

6. 拆包 splitChunksPlugin 、 import() 、 require.ensure
