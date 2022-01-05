# webpack打包体积的优化思路

#### 精简回答：
1. 测量构建时间speed-measure-webpack-plugin,分析体积webpack-bundle-analyzer 

2. 按需加载（单页面应用最大问题就是，把整个工程作为一个入口打包，所以首页白屏是建成体验不好）

3. 优化loader配置（优化正则匹配，减少查询文件时间）

4. 关闭生产模式的sourcemap（sourcemap主要是开发环境使用方便调试）

5. cdn优化（内容分发网络）

6. 多线程解析处理文件thread loader（传统打包是单线程的，在use前面加thread-loader）

7. 删除未被引用的代码如console.log
