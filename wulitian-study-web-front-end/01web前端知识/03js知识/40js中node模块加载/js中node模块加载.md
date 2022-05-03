# js中node模块加载机制

#### 说明

node模块中使用的模块化为cjs。

module.exports 与 exports导出。

require 导入: 会先运行目标文件。

#### 模块加载顺序

1. 优先加载node内置模块

2. 如果不是内置模块去缓存找

3. 如果缓存没有去对应目录去找

4. 对应目录找不到去node_modules中找

5. 在node_modules中如果找不到报错

#### 文件夹加载顺序

1. 当前文件夹下是否存在package.json,如果有就找main,

2. 如果没有main就找index文件

3. 如果都找不到就报错

#### require支持三种文件类型

.js、.json、.node

#### module.exports 与 exports的区别

对module.exports的重新赋值会作为模块的导出内容，
对exports的重新赋值并不能改变模块导出内容，只是改变了exports这个变量而已，
因为模块始终是module，导出内容是module.exports。
