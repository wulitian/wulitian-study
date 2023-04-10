# webpack中常用 `Plugin`

#### 用于修改行为
define-plugin：定义环境变量。
context-replacement-plugin：修改 require 语句在寻找文件时的默认行为。
ignore-plugin：用于忽略部分文件。

#### 用于优化
commons-chunk-plugin：提取公共代码。
extract-text-webpack-plugin：提取 JavaScript 中的 CSS 代码到单独的文件中。
prepack-webpack-plugin：通过 Facebook 的 Prepack 优化输出的 JavaScript 代码性能。
uglifyjs-webpack-plugin：通过 UglifyES 压缩 ES6 代码。
webpack-parallel-uglify-plugin：多进程执行 UglifyJS 代码压缩，提升构建速度。
imagemin-webpack-plugin：压缩图片文件。
webpack-spritesmith：用插件制作雪碧图。
ModuleConcatenationPlugin：开启 Webpack Scope Hoisting 功能。
dll-plugin：借鉴 DDL 的思想大幅度提升构建速度。
hot-module-replacement-plugin：开启模块热替换功能。

#### 其它
serviceworker-webpack-plugin：给网页应用增加离线缓存功能。
stylelint-webpack-plugin：集成 stylelint 到项目中。
i18n-webpack-plugin：给你的网页支持国际化。
provide-plugin：从环境中提供的全局变量中加载模块，而不用导入对应的文件。
web-webpack-plugin：方便的为单页应用输出 HTML，比 html-webpack-plugin 好用。
























