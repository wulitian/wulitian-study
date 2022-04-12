# babel知识

1. #### **什么是babel?**

    Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。提供了对jsx，react转换提供支持，可以删除类型注释，可通过插件进行配置，可调式支持source map ,规范性尽可能遵循ECMAScript标准，并且代码可压缩尽可能的减少代码运行而不依赖庞大的运行时环境。

2. #### **babel7使用**

    | 包名                            | 功能                           | 说明                                                         |
    | ------------------------------- | ------------------------------ | ------------------------------------------------------------ |
    | @babel/cli                      | 命令行执行babel命令工具        | 非必装开发依赖，packages.json的script中使用了babel命令则需安装 |
    | @babel/core                     | 核心包                         |开发依赖，提供了源码到目标源码的编译的过程                    |
    | @babel/plugin-*                 | babel编译功能实现插件          | 开发依赖，按照需要的功能安装                                 |
    | @babel/preset-*                 | 功能实现插件预设               | 开发依赖，按照需要的功能安装，js语言新特性转换推荐使用preset-env |
    | @babel/polyfill                 | 低版本浏览器兼容库             | 非必装生产依赖，已不推荐使用，推荐通过preset-env的useBuiltIns属性按需引入 |
    | @babel/runtime-corejs*          | 不污染变量的低版本浏览器兼容库 | 非必装生产依赖，plugin-transform-runtime设置开启后，可以不污染变量的引入polyfill |
    | @babel/plugin-transform-runtime | 复用工具函数                   | 非必装开发依赖，和@babel/runtime同时存在                     |
    | core-js@*                       | 低版本浏览器兼容库             | 非必装生产依赖，通过preset-env引入polyfill需安装此包，并通过corejs指定版本 |
    | babel-loader                    | webpack中使用babel加载文件     | 非必装开发依赖，webpack项目中使用                            |
    

3. #### **配置文件**

    配置文件类型

    - 项目范围的配置
      - `babel.config.json` 文件，以及不同扩展名的文件 (`.js`, `.cjs`, `.mjs`)
    - 相对文件的配置
      - `.babelrc.json` 文件，以及不同扩展名的文件 (`.babelrc`, `.js`, `.cjs`, `.mjs`)
      - 带有 `"babel"` key 的 `package.json` 文件
    - 该类配置文件是针对文件夹级别的配置，即项目根目录文件夹下或其子文件夹下都可以配置和应用该类配置文件，但子文件夹里的配置文件会覆盖祖先文件夹里的配置文件（TODO: 是配置对象整体覆盖还是合并配置对象覆盖相同的选项），因此通过这种方式，可以给不同的文件夹层级设置不同的规则。

    package.json文件里添加babel配置项
    ```json5
       {
          "name":"babel-test",
          "version":"1.0.0",
          "devDependencies": {
              "@babel/core":"^7.4.5",
              "@babel/cli":"^7.4.4",
              "@babel/preset-env":"^7.4.5"
               // ...
          },
          "babel": {
              "presets": ["@babel/preset-env"]
          }
       }
    ```
    .babelrc：
    ```json5
           {
               "presets": ["@babel/preset-env"]
           }
    ```
     .babelrc.js：
     ```js
           module.exports = {
               presets: ['@babel/preset-env']
           };
     ```

4. #### 预设

    - [@babel/preset-env](https://babel.docschina.org/docs/en/babel-preset-env) 用于编译 ES2015+ 语法
    - [@babel/preset-typescript](https://babel.docschina.org/docs/en/babel-preset-typescript) 用于 [TypeScript](https://www.typescriptlang.org/)
    - [@babel/preset-react](https://babel.docschina.org/docs/en/babel-preset-react) 用于 [React](https://reactjs.org/)
    - [@babel/preset-flow](https://babel.docschina.org/docs/en/babel-preset-flow) 用于 [Flow](https://flow.org/)

5. #### @babel/core
   
   Babel 编译的核心包，提供了一些方法如：
   
   - `transform`/`transformSync`/`transformAsync`
   - `transformFile`/`transformFile`/`transformFile`
   - `transformFromAst`/`transformFromAstSync`/`transformFromAstAsync`
   - `parse`/`parseSync`/`parseAsync`
   - 以及其他一些高级 API
