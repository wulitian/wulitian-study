# webpack中常用 `Loader`

#### 加载文件

raw-loader：把文本文件的内容加载到代码中去，在 3-20加载SVG 中有介绍。
file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件，在 3-19加载图片、3-20加载 SVG、4-9 CDN 加速 中有介绍。
url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去，在 3-19加载图片、3-20加载 SVG 中有介绍。
source-map-loader：加载额外的 Source Map 文件，以方便断点调试，在 3-21加载 Source Map 中有介绍。
svg-inline-loader：把压缩后的 SVG 内容注入到代码中，在 3-20加载 SVG 中有介绍。
node-loader：加载 Node.js 原生模块 .node 文件。
image-loader：加载并且压缩图片文件。
json-loader：加载 JSON 文件。
yaml-loader：加载 YAML 文件。

#### 编译模版
pug-loader：把 Pug 模版转换成 JavaScript 函数返回。
handlebars-loader：把 Handlebars 模版编译成函数返回。
ejs-loader：把 EJS 模版编译成函数返回。
haml-loader：把 HAML 代码转换成 HTML。
markdown-loader：把 Markdown 文件转换成 HTML。

#### 转换脚本语言
babel-loader：把 ES6 转换成 ES5，在3-1使用 ES6 语言中有介绍。
ts-loader：把 TypeScript 转换成 JavaScript，在3-2使用 TypeScript 语言中有遇到。
awesome-typescript-loader：把 TypeScript 转换成 JavaScript，性能要比 ts-loader 好。
coffee-loader：把 CoffeeScript 转换成 JavaScript。

#### 转换样式文件
css-loader：加载 CSS，支持模块化、压缩、文件导入等特性。
style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
sass-loader：把 SCSS/SASS 代码转换成 CSS，在3-4使用 SCSS 语言中有介绍。
postcss-loader：扩展 CSS 语法，使用下一代 CSS，在3-5使用 PostCSS中有介绍。
less-loader：把 Less 代码转换成 CSS 代码。
stylus-loader：把 Stylus 代码转换成 CSS 代码。

#### 检查代码
eslint-loader：通过 ESLint 检查 JavaScript 代码，在 3-16检查代码中有介绍。
tslint-loader：通过 TSLint 检查 TypeScript 代码。
mocha-loader：加载 Mocha 测试用例代码。
coverjs-loader：计算测试覆盖率。

#### 其它
vue-loader：加载 Vue.js 单文件组件，在3-7使用 Vue 框架中有介绍。
i18n-loader：加载多语言版本，支持国际化。
ignore-loader：忽略掉部分文件，在3-11构建同构应用中有介绍。
ui-component-loader：按需加载 UI 组件库，例如在使用 antd UI 组件库时，不会因为只用到了 Button 组件而打包进所有的组件。
