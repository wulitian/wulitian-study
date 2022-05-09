#### **1.`plugin`和`Preset`的理解**

**Preset就是一些Plugin组成的合集**,可以将`Preset`理解称为就是一些的`Plugin`整合称为的一个包。

#### **2.`babel-preset-env`**

`@babel/preset-env`是一个智能预设，它可以将我们的高版本`JavaScript`代码进行转译根据内置的规则转译成为低版本的`javascript`代码。

`preset-env`内部集成了绝大多数`plugin`（`State > 3`）的转译插件，它会根据对应的参数进行代码转译。

> `@babel/preset-env`不会包含任何低于 Stage 3 的 JavaScript 语法提案。如果需要兼容低于`Stage 3`阶段的语法则需要额外引入对应的`Plugin`进行兼容。

> 需要额外注意的是`babel-preset-env`仅仅针对语法阶段的转译，比如转译箭头函数，`const/let`语法。针对一些`Api`或者`Es6`内置模块的`polyfill`，`preset-env`是无法进行转译的。这块内容我们会在之后的`polyfill`中为大家进行详细讲解。

#### **3.`babel-preset-react`**

通常我们在使用`React`中的`jsx`时，相信大家都明白实质上`jsx`最终会被编译称为`React.createElement()`方法。

`babel-preset-react`这个预设起到的就是将`jsx`进行转译的作用。

#### **4.`babel-preset-typescript`**

对于`TypeScript`代码，我们有两种方式去编译`TypeScript`代码成为`JavaScript`代码。

1. 使用`tsc`命令，结合`cli`命令行参数方式或者`tsconfig`配置文件进行编译`ts`代码。
2. 使用`babel`，通过`babel-preset-typescript`代码进行编译`ts`代码。

### **5.常见Plugin**

关于常见的`Plugin`其实大多数都集成在了`babel-preset-env`中，当你发现你的项目中并不能支持最新的`js`语法时，此时我们可以查阅对应的`Babel Plugin List`找到对应的语法插件添加进入`babel`
配置。

> 同时还有一些不常用的`packages`，比如`@babel/register`：它会改写`require`命令，为它加上一个钩子。此后，每当使用`require`加载`.js`、`.jsx`、`.es`和`.es6`后缀名的文件，就会先用Babel进行转码。

> 这些包日常中不是特别常用，如果有同学有相关编译相关需求完全可以去`babel`官网查阅。如果官网不存在现成的`plugin/package`，别担心！我们同时也会在之后手把手教大家`babel`插件的开发。

其中最常见的`@babel/plugin-transform-runtime`我们会在下面的`Polyfill`进行详细的讲解。

## 前端基建中的`Babel`配置详解

关于前端构建工具，无论你使用的是`webapack`还是`rollup`又或是任何构建打包工具，内部都离不开`Babel`相关配置。 关于`WebPack`中我们日常使用的`babel`相关配置主要涉及以下三个相关插件:

- `babel-loader`
- `babel-core`
- `babel-preset-env`

也许你经常在项目搭建过程中见到他们，这里我们将逐步使用一段伪代码来讲解他们之间的区别和联系。 首先我们需要清楚在 **webpack中loader的本质就是一个函数，接受我们的源代码作为入参同时返回新的内容。**

### `babel-loader`

所以`babel-loader`的本质就是一个函数，我们匹配到对应的`jsx?/tsx?`的文件交给`babel-loader`:

```
/**
 * 
 * @param sourceCode 源代码内容
 * @param options babel-loader相关参数
 * @returns 处理后的代码
 */
function babelLoader (sourceCode,options) {
  // ..
  return targetCode
}
```

> 关于`options`，`babel-loader`支持直接通过`loader`的参数形式注入，同时也在`loader`函数内部通过读取`.babelrc/babel.config.js/`babel.config.json``等文件注入配置。

### `babel-core`

我们讲到了`babel-loader`仅仅是识别匹配文件和接受对应参数的函数，那么`babel`在编译代码过程中核心的库就是`@babel/core`这个库。`babel-core`是`babel`
最核心的一个编译库，他可以将我们的代码进行**词法分析--语法分析--语义分析**过程从而生成`AST`抽象语法树，从而对于“这棵树”的操作之后再通过编译称为新的代码。

> `babel-core`其实相当于`@babel/parse`和`@babel/generator`这两个包的合体，`babel-core`通过`transform`方法将我们的代码进行编译。关于`babel-core`中的编译方法其实有很多种，比如直接接受字符串形式的`transform`方法或者接受`js`文件路径的`transformFile`方法进行文件整体编译。 同时它还支持同步以及异步的方法。

接下来让我们完善对应的`babel-loader`函数:

```
const core = require('@babel/core')
/**
 * 
 * @param sourceCode 源代码内容
 * @param options babel-loader相关参数
 * @returns 处理后的代码
 */
function babelLoader (sourceCode,options) {
  // 通过transform方法编译传入的源代码
  core.transform(sourceCode)
  return targetCode
}
```

这里我们在`babel-loader`中调用了`babel-core`这个库进行了代码的编译作用。

### `babel-preset-env`

上边我们说到`babel-loader`本质是一个函数，它在内部通过`babel/core`这个核心包进行`JavaScript`代码的转译。 但是针对代码的转译**我们需要告诉babel以什么样的规则进行转化**
，比如我需要告诉`babel`：“嘿，babel。将我的这段代码转化称为EcmaScript5版本的内容！”。 此时`babel-preset-env`在这里充当的就是这个作用：**告诉babel我需要以为什么样的规则进行代码转移**。

```
const core = require('@babel/core');
/**
 *
 * @param sourceCode 源代码内容
 * @param options babel-loader相关参数
 * @returns 处理后的代码
 */
function babelLoader(sourceCode, options) {
  // 通过transform方法编译传入的源代码
  core.transform(sourceCode, {
    presets: ['babel-preset-env'],
    plugins: [...]
  });
  return targetCode;
}
```

> 这里`plugin`和`prest`其实是同一个东西，所以我将`plugin`直接放在代码中了。同理一些其他的`preset`或者`plugin`也是发挥这样的作用。

### `Babel`相关`polyfill`内容

#### 何谓`polyfill`

关于`polyfill`，我们先来解释下何谓`polyfill`。

首先我们来理清楚这三个概念:

- 最新`ES`语法，比如：箭头函数，`let/const`。
- 最新`ES Api`，比如`Promise`
- 最新`ES`实例/静态方法，比如`String.prototype.include`

`babel-prest-env`仅仅只会转化最新的`es`语法，并不会转化对应的`Api`和实例方法,比如说`ES 6`中的`Array.from`静态方法。`babel`
是不会转译这个方法的，如果想在低版本浏览器中识别并且运行`Array.from`方法达到我们的预期就需要额外引入`polyfill`进行在`Array`上添加实现这个方法。
语法层面的转化preset-env完全可以胜任。但是一些内置方法模块，仅仅通过preset-env的语法转化是无法进行识别转化的，所以就需要一系列类似”垫片“的工具进行补充实现这部分内容的低版本代码实现。这就是所谓的polyfill的作用，
针对于`polyfill`方法的内容，`babel`中涉及两个方面来解决：

- `@babel/polyfill`
- `@babel/runtime`
- `@babel/plugin-transform-runtime`

我们理清了何谓`polyfill`以及`polyfill`的作用和含义后，让我们来逐个击破这两个`babel`包对应的使用方式和区别吧。

#### `@babel/polyfill`

首先我们来看看第一种实现`polyfill`的方式：

##### `@babel/polyfill`介绍

通过babelPolyfill[7]通过往全局对象上添加属性以及直接修改内置对象的`Prototype`上添加方法实现`polyfill`。

比如说我们需要支持`String.prototype.include`，在引入`babelPolyfill`这个包之后，它会在全局`String`的原型对象上添加`include`方法从而支持我们的`Js Api`。

我们说到这种方式本质上是往全局对象/内置对象上挂载属性，所以这种方式难免会造成全局污染。

##### 应用`@babel/polyfill`

在`babel-preset-env`中存在一个`useBuiltIns`参数，这个参数决定了如何在`preset-env`中使用`@babel/polyfill`。

```
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": false
        }]
    ]
}
```

- `useBuiltIns`--`"usage"`| `"entry"`| `false`

###### `false`

当我们使用`preset-env`传入`useBuiltIns`参数时候，默认为`false`。它表示仅仅会转化最新的`ES`语法，并不会转化任何`Api`和方法。

###### `entry`

当传入`entry`时，需要我们在项目入口文件中手动引入一次`core-js`，它会根据我们配置的浏览器兼容性列表(`browserList`)然后**全量**引入不兼容的`polyfill`。

> Tips: 在`Babel7.4。0`之后，`@babel/polyfill`被废弃它变成另外两个包的集成。`"core-js/stable"; "regenerator-runtime/runtime";`。你可以在这里看到变化[8]，但是他们的使用方式是一致的，只是在入口文件中引入的包不同了。

> 浏览器兼容性列表配置方式简介你可以在这里看到[9]。

```
// 项目入口文件中需要额外引入polyfill
// core-js 2.0中是使用"@babel/polyfill" core-js3.0版本中变化成为了上边两个包
import "@babel/polyfill"
// babel
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "entry"
        }]
    ]
}
```

> 同时需要注意的是，在我们使用`useBuiltIns:entry/usage`时，需要额外指定`core-js`这个参数。默认为使用`core-js 2.0`，所谓的`core-js`就是我们上文讲到的“垫片”的实现。它会实现一系列内置方法或者`Promise`等`Api`。

> `core-js 2.0`版本是跟随`preset-env`一起安装的，不需要单独安装哦～

###### `usage`

上边我们说到配置为`entry`时，`perset-env`会基于我们的浏览器兼容列表进行全量引入`polyfill`。所谓的全量引入比如说我们代码中仅仅使用了`Array.from`这个方法。但是`polyfill`
并不仅仅会引入`Array.from`，同时也会引入`Promise`、`Array.prototype.include`等其他并未使用到的方法。这就会造成包中引入的体积太大了。

此时就引入出了我们的`useBuintIns:usage`配置。

当我们配置`useBuintIns:usage`时，会根据配置的浏览器兼容，以及代码中 **使用到的Api 进行引入polyfill按需添加。**

当使用`usage`时，我们不需要额外在项目入口中引入`polyfill`了，它会根据我们项目中使用到的进行按需引入。

```
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "core-js": 3
        }]
    ]
}
```

###### 关于`usage`和`entry`存在一个需要注意的本质上的区别。

我们以项目中引入`Promise`为例。

当我们配置`useBuintInts:entry`时，仅仅会在入口文件全量引入一次`polyfill`。你可以这样理解:

```
// 当使用entry配置时
// 一系列实现polyfill的方法
global.Promise = promise
// 其他文件使用时
const a = new Promise()
```

而当我们使用`useBuintIns:usage`时，`preset-env`只能基于各个模块去分析它们使用到的`polyfill`从而进入引入。

`preset-env`会帮助我们智能化的在需要的地方引入，比如:

```
// a. js 中
import "core-js/modules/es.promise";
// b.js中
import "core-js/modules/es.promise";
```

- 在`usage`情况下，如果我们存在很多个模块，那么无疑会多出很多冗余代码(`import`语法)。
- 同样在使用`usage`时因为是模块内部局部引入`polyfill`所以并不会污染全局变量，而`entry`是挂载在全局中所以会污染全局变量。

`usageBuintIns`不同参数分别有不同场景的适应度，具体参数使用场景还需要大家结合自己的项目实际情况找到最佳方式。

#### `@babel/runtime`

上边我们讲到`@babel/polyfill`是存在污染全局变量的副作用，在实现`polyfill`时`Babel`还提供了另外一种方式去让我们实现这功能，那就是`@babel/runtime`。

简单来讲，`@babel/runtime`更像是一种**按需加载的解决方案**，比如哪里需要使用到`Promise`，`@babel/runtime`就会在他的文件顶部添加

`import promise from 'babel-runtime/core-js/promise'`。

同时上边我们讲到对于`preset-env`的`useBuintIns`配置项，我们的`polyfill`是`preset-env`帮我们智能引入。

而`babel-runtime`则会将引入方式由智能完全交由我们自己，我们需要什么自己引入什么。

它的用法很简单，只要我们去安装`npm install \--save @babel/runtime`后，在需要使用对应的`polyfill`的地方去单独引入就可以了。比如：

```
// a.js 中需要使用Promise 我们需要手动引入对应的运行时polyfill
import Promise from 'babel-runtime/core-js/promise'
const promsies = new Promise()
```

总而言之，`babel/runtime`你可以理解称为就是一个运行时“哪里需要引哪里”的工具库。

> 针对`babel/runtime`绝大多数情况下我们都会配合`@babel/plugin-transfrom-runtime`进行使用达到智能化`runtime`的`polyfill`引入。

#### `@babel/plugin-transform-runtime`

##### `babel-runtime`存在的问题

`babel-runtime`在我们手动引入一些`polyfill`的时候，它会给我们的代码中注入一些类似`_extend()， classCallCheck()`之类的工具函数，这些工具函数的代码会包含在编译后的每个文件中，比如：

```
class Circle {}
// babel-runtime 编译Class需要借助_classCallCheck这个工具函数
function _classCallCheck(instance, Constructor) { //... } 
var Circle = function Circle() { _classCallCheck(this, Circle); };
```

如果我们项目中存在多个文件使用了`class`，那么无疑在每个文件中注入这样一段冗余重复的工具函数将是一种灾难。

所以针对上述提到的两个问题:

- `babel-runtime`无法做到智能化分析，需要我们手动引入。
- `babel-runtime`编译过程中会重复生成冗余代码。

我们就要引入我们的主角`@babel/plugin-transform-runtime`。

##### `@babel/plugin-transform-runtime`作用

`@babel/plugin-transform-runtime`插件的作用恰恰就是为了解决上述我们提到的`run-time`存在的问题而提出的插件。

- `babel-runtime`无法做到智能化分析，需要我们手动引入。

`@babel/plugin-transform-runtime`插件会智能化的分析我们的项目中所使用到需要转译的`js`代码，从而实现模块化从`babel-runtime`中引入所需的`polyfill`实现。

- `babel-runtime`编译过程中会重复生成冗余代码。

`@babel/plugin-transform-runtime`插件提供了一个`helpers`参数。

这个`helpers`参数开启后可以将上边提到编译阶段重复的工具函数，比如`classCallCheck, extends`等代码转化称为`require`语句。此时，这些工具函数就不会重复的出现在使用中的模块中了。比如这样：

```
// @babel/plugin-transform-runtime会将工具函数转化为require语句进行引入
// 而非runtime那样直接将工具模块代码注入到模块中
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck"); 
var Circle = function Circle() { _classCallCheck(this, Circle); };
```

##### 配置`@babel/plugin-transform-runtime`

其实用法原理部分已经在上边分析的比较透彻了，配置这里还有疑问的同学可以评论区给我留言或者移步`babel`官网查看[11]。

这里为列一份目前它的默认配置:

```
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
}
```

#### 总结`polyfill`

我们可以看到针对`polyfill`其实我耗费了不少去将它们之间的区别和联系，让我们来稍微总结一下吧。

在`babel`中实现`polyfill`主要有两种方式：

- 一种是通过`@babel/polyfill`配合`preset-env`去使用，这种方式可能会存在污染全局作用域。
- 一种是通过`@babel/runtime`配合`@babel/plugin-transform-runtime`去使用，这种方式并不会污染作用域。
- 全局引入会污染全局作用域，但是相对于局部引入来说。它会增加很多额外的引入语句，增加包体积。

在`useBuintIns:usage`情况下其实和`@babel/plugin-transform-runtime`情况下是类似的作用，

通常我个人选择是会在开发类库时遵守不污染全局为首先使用`@babel/plugin-transform-runtime`而在业务开发中使用`@babel/polyfill`。

```
babel-runtime 是为了减少重复代码而生的。babel生成的代码，可能会用到一些_extend()， classCallCheck() 之类的工具函数，默认情况下，这些工具函数的代码会包含在编译后的文件中。如果存在多个文件，那每个文件都有可能含有一份重复的代码。
babel-runtime插件能够将这些工具函数的代码转换成require语句，指向为对babel-runtime的引用，如 require('babel-runtime/helpers/classCallCheck'). 这样， classCallCheck的代码就不需要在每个文件中都存在了。
```

# `Babel`插件开发

上边我们讲到了日常业务中`babel`的使用方式原理，接下来我们来讲讲`babel`插件相关开发的内容。

也许你会疑惑`Babel`插件能有什么样的作用？简单来说，通过`babel`插件可以带你在原理层面更加深入前端编译原理的知识内容。

当然如果不仅仅是对于个人能力的提升，假使你在开发一款属于自己的组件库，你想实现类似`element-plus`中的按需引入方式，又或许对于`lint`你存在自己的特殊的规则。再不然对于一些`js`中特殊的写法的支持。

总而言之，懂编译原理真的是可以无所欲为！

## 带你走进`babel`的编译世界

针对于编译方面的知识，文章中的重点并不是这个。但是大家请放心，我会用最通俗的方式带大家入门`babel`插件的开发。

`webpack`、`lint`、`babel`等等很多工具和库的核心都是通过**抽象语法树**（Abstract Syntax Tree，AST）这个概念来实现对代码的处理。

### `AST`

所谓抽象语法树就是通过`JavaScript Parser`将代码转化成为一颗抽象语法树，这棵树定义了代码的结构。然后通过操纵这棵树的增删改查实现对代码的分析，变更，优化。

针对将代码转化为不同的`AST`你可以在这里`astexplorer`[12]目前主流任何解析器的`AST`转化。

这里我们首先列举一些涉及的参考网站给大家：

- astexplorer[13]：这是一个在线的代码转译器，他可以按照目前业界主流的方式将任何代码转为`AST`。
- babel-handbook：`babel`插件开发中文手册文档。
- the-super-tiny-compiler-cn[14]：一个`github`上的开源小型`listp`风格转化`js`编译器，强烈推荐对编译原理感兴趣的同学可以去看一看它的代码。

### `babel`插件开发基础指南

当我们需要开发一款属于自己的`babel`插件时，通常我们会借助`babel`的一些库去进行代码的`parser`以及`transform ast`，`generator code`，并不需要我们去手动对代码进行词法/语法分析过程。

插件开发通常会涉及这些库:

- `@babel/core`:上边我们说过`babel/core`是`babel`的核心库，核心的`api`都在这里。比如上边我们讲到的`transform`，`parse`方法。
- `@babel/parser`:`babel`解析器。
- `@babel/types`: 这个模块包含手动构建 AST 和检查 AST 节点类型的方法(比如通过对应的`api`生成对应的节点)。
- `@babel/traverse`: 这个模块用于对`Ast`的遍历，它维护了整棵树的状态(需要注意的是`traverse`对于`ast`是一种深度遍历)。
- `@babel/generator`: 这个模块用于代码的生成，通过`AST`生成新的代码返回。

### `babel`的工作流程

在日常前端项目中，绝大多数时候我们使用`babel`进行`js`代码的转化。

它的工作流程大概可以概括称为以下三个方面:

- `Parse`（解析）阶段：这个阶段将我们的`js`代码(字符串)进行词法分析生成一系列`tokens`，之后再进行语法分析将`tokens`组合称为一颗`AST`抽象语法树。(比如`babel-parser`它的作用就是这一步)
- `Transform`（转化）阶段：这个阶段`babel`通过对于这棵树的遍历，从而对于旧的`AST`进行增删改查，将新的`js`语法节点转化称为浏览器兼容的语法节点。(`babel/traverse`就是在这一步进行遍历这棵树)
- `Generator`（生成）阶段：这个阶段`babel`会将新的`AST`转化同样进行深度遍历从而生成新的代码。(`@babel/generator`)

我们用一张图来描述一下这个过程：

image.png

### `babel`中`AST`的遍历过程

- `AST`是所谓的深度优先遍历，关于何谓深度优先不了解的同学可以自行查阅相关资料～
- `babel`中`AST`节点的遍历是基于一种访问者模式(`Visitor`)，不同的访问者会执行不同的操作从而得到不同的结果。
- `visitor`上挂载了以每个节点命名的方法，当进行`AST`遍历时就会触发匹配的方法名从而执行对应方法进行操作。

## 手把手带你开发`babel`插件

这里我们以一个简单的`ES6`中的箭头函数转化为`ES5`方式入手，来带大家入门真正的`babel`插件开发。

我相信有的同学可能有疑惑，`babel`中已经存在对应的`@babel/plugin-transform-arrow-functions`进行箭头函数的转化，为什么我们还要去实现它呢。

没错，`babel`中的确已经存在这个插件而且已经非常完美了。这里我想强调的是，之所以选择这个例子是想带大家真正入门`babel`插件的开发流程，一个简单的例子其实可以更好的带给大家插件开发背后的思想体会，从而可以让大家举一反三。

让我们开始吧～

首先让我们来看看我们需要实现的结果:

### 目标

```
// input
const arrowFunc = () => {
 console.log(this)
}
// output
var _this = this
funciton arrowFunc() {
    console.log(_this)
}
```

### `babel`原版转化方式

```
/**
 * babel插件
 * 主要还是@babel/core中的transform、parse 对于ast的处理
 * 以及babel/types 中各种转化规则
 * Ast是一种深度优先遍历
 * 内部使用访问者(visitor)模式
 * babel主要也是做的AST的转化
 * 1. 词法分析 tokens : var a  = 1 ["var","a","=","1"]
 * 2. 语法分析 将tokens按照固定规则生成AST语法树
 * 3. 语法树转化 在旧的语法树基础上进行增删改查 生成新的语法书
 * 4. 生成代码 根据新的Tree生成新的代码
 */
// babel核心转化库 包含core -》 AST -》 code的转化实现
/* 
  babel/core 其实就可以相当于 esprima+Estraverse+Escodegen
  它会将原本的sourceCode转化为AST语法树
  遍历老的语法树
  遍历老的语法树时候 会检查传入的插件/或者第三个参数中传入的`visitor`
  修改对应匹配的节点 
  生成新的语法树
  之后生成新的代码地址
*/
const babel = require('@babel/core');
// babel/types 工具库 该模块包含手动构建TS的方法，并检查AST节点的类型。(根据不同节点类型进行转化实现)
const babelTypes = require('@babel/types');
// 转化箭头函数的插件
const arrowFunction = require('@babel/plugin-transform-arrow-functions');
const sourceCode = `const arrowFunc = () => {
 console.log(this)
}`;
const targetCode = babel.transform(sourceCode, {
  plugins: [arrowFunction],
});
console.log(targetCode.code)
```

这里我们使用了`babel/core`，它的`transform`方法会将我们的代码转化称为`AST`同时进入`plugins`的处理成为新的`AST`，最终生成对应的代码。

> 不太清楚插件工作原理的同学可以根据代码注释自己动手写一下，这里仅仅是短短十几行代码。

### 自己实现`@babel/plugin-transform-arrow-functions`插件

这里我们尝试一下自己来实现一个这样的功能。

首先，让我们先来写好基础的结构:

```
const babel = require('@babel/core');
// babel/types 工具库 该模块包含手动构建TS的方法，并检查AST节点的类型。(根据不同节点类型进行转化实现)
const babelTypes = require('@babel/types');
// 我们自己实现的转化插件
const { arrowFunctionPlugin } = require('./plugin-transform-arrow-functions');
const sourceCode = `const arrowFunc = () => {
 console.log(this)
}`;
const targetCode = babel.transform(sourceCode, {
  plugins: [arrowFunctionPlugin],
});
// 打印编译后代码
console.log(targetCode.code)
// plugin-transform-arrow-functions.js
const arrowFunctionPlugin = () => {
    // ...
}
module.exports = {
    arrowFunctionPlugin
}
```

这里，我们新建了一个`plugin-transform-arrow-functions`文件来实现我们自己的插件：

上边我们讲过`babel`插件实质上就是一个对象，里边会有一个属性`visitor`。这个`visitor`对象上会有很多方法，每个方法都是基于节点的名称去命名的。

当`babel/core`中的`transform`方法进行`AST`的遍历时会进入`visitor`对象中匹配，如果对应节点的类型匹配到了`visitor`上的属性那么就会从而执行相应的方法。

比如这样一段代码:

```
const arrowFunctionPlugin = {
    visitor: {
      ArrowFunctionExpression(nodePath) {
          // do something
      }
    },
}
```

当进行`AST`遍历时，如果碰到节点类型为`ArrowFunctionExpression`时就会进入`visitor`对象中的`ArrowFunctionExpression`方法从而执行对应逻辑从而进行操作当前树。

这里有两个`tip`需要和大家稍微解释一下。

- 我如何知道每个节点的类型呢？比如`ArrowFunctionExpression`就是箭头函数的类型。

首先，babel/types[15]中涵盖了所有的节点类型。我们可以通过查阅`babel/types`查阅对应的节点类型。

当然还存在另一个更加方便的方式，上边我们提到的astexplorer[16]，你可以在这里查阅对应代码生成的`AST`从而获得对应的节点。

- 什么是`nodePath`参数，它有什么作用？

这里每一个方法都存在一个`nodePath`参数，所谓的`nodePath`参数你可以将它理解成为一个节点路径。它包含了这个树上这个节点分叉的所有信息和对应的`api`。**注意这里可以强调是路径**，你可以在这里查阅[17]
它的含义以及对应的所有`API`。

在我们写好基础的结构之后，让我们来开始动手实现插件的内部逻辑吧。

我们清楚想要讲代码进行编译，难免要进行`AST`节点的修改。本质上我们还是通过对于`AST`节点的操作修改`AST`从而生成我们想要的代码结果。

- **首先，我们可以通过**astexplorer[18]分别输入我们的源代码和期望的编译后代码得到对应的`AST`结构。
- 之后，我们在对比这两棵树的结构从而在原有的`AST`基础上进行修改得到我们最终的`AST`。
- 剩下，应该就没有什么剩下的步骤了。`babel transform`方法会根据我们修改后的`AST`生成对应的源代码。

> 强烈建议同学们自己进入astexplorer[19]输入需要转译的代码和转译后的代码进行对比一下。

需要编译的箭头函数部分节点截图：

image.png

编译后代码的部分节点截图：

image.png

这里，我们发现对比`input`和`output`:

- `output`中将箭头函数的节点`ArrowFunctionExpression`替换成为了`FunctionDeclaration`。
- `output`中针对箭头函数的`body`，调用表达式声明`ExpressionStatement`时，传入的`arguments`从`ThisExpression`更换成了`Identifier`。
- 同时`output`在箭头函数同作用域内额外添加了一个变量声明，`const _this = this`。

很简单吧，我们只需要在我们的`arrowFunctionPlugin`中实现这三个功能就可以满足要求了，让我们一起来动手试一试吧。

```
const babelTypes = require('@babel/types');
function ArrowFunctionExpression(path) {
  const node = path.node;
  hoistFunctionEnvironment(path);
  node.type = 'FunctionDeclaration';
}
/**
 * @param {*} nodePath 当前节点路径
 */
function hoistFunctionEnvironment(nodePath) {
  // 往上查找 直到找到最近顶部非箭头函数的this p.isFunction() && !p.isArrowFunctionExpression()
  // 或者找到跟节点 p.isProgram()
  const thisEnvFn = nodePath.findParent((p) => {
    return (p.isFunction() && !p.isArrowFunctionExpression()) || p.isProgram();
  });
  // 接下来查找当前作用域中那些地方用到了this的节点路径
  const thisPaths = getScopeInfoInformation(thisEnvFn);
  const thisBindingsName = generateBindName(thisEnvFn);
  // thisEnvFn中添加一个变量 变量名为 thisBindingsName 变量值为 this
  // 相当于 const _this = this
  thisEnvFn.scope.push({
    // 调用babelTypes中生成对应节点
    // 详细你可以在这里查阅到 https://babeljs.io/docs/en/babel-types
    id: babelTypes.Identifier(thisBindingsName),
    init: babelTypes.thisExpression(),
  });
  thisPaths.forEach((thisPath) => {
    // 将this替换称为_this
    const replaceNode = babelTypes.Identifier(thisBindingsName);
    thisPath.replaceWith(replaceNode);
  });
}
/**
 * 查找当前作用域内this使用的地方
 * @param {*} nodePath 节点路径
 */
function getScopeInfoInformation(nodePath) {
  const thisPaths = [];
  // 调用nodePath中的traverse方法进行便利
  // 你可以在这里查阅到  https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md
  nodePath.traverse({
    // 深度遍历节点路径 找到内部this语句
    ThisExpression(thisPath) {
      thisPaths.push(thisPath);
    },
  });
  return thisPaths;
}
/**
 * 判断之前是否存在 _this 这里简单处理下
 * 直接返回固定的值
 * @param {*} path 节点路径
 * @returns
 */
function generateBindName(path, name = '_this', n = '') {
  if (path.scope.hasBinding(name)) {
    generateBindName(path, '_this' + n, parseInt(n) + 1);
  }
  return name;
}
module.exports = {
  hoistFunctionEnvironment,
  arrowFunctionPlugin: {
    visitor: {
      ArrowFunctionExpression,
    },
  },
};
```

接下来让我们在代码中使用我们写好的插件来`run`一下吧。

image.png

## 总结插件开发流程

上边虽然是一个简单的插件`Demo`例子，但是麻雀虽小五脏俱全。一个完整的`babel`插件流程大概就是如此，这里让我们稍微总结一下关于`babel`插件的开发过程。

- 通过源代码和转译后代码进行`AST`节点对比，找出对应的区别节点，尽量复用之前的节点。
- 存在修改/增加/删除的节点，通过`nodePath`中的`Api`调用对应的方法进行`AST`的处理。

宏观上来讲插件的开发流程主要就分为这两个步骤，剩下的就是各位对于`ast`中转化部分的“业务逻辑”啦。

> `babel`插件开发部分可能会涉及一些大家之前并没有接触过的`API`，这里我选择直接用代码的方式去讲解插件的开发并没有去深入讲解这些`API`。如果对某些部分不太理解的话可以在评论区留言给我，对应的`API`我个人建议大家多动手去babel-handbook插件开发手册[20]查询，这里理解起来会更加深刻。

> 文中插件仅仅是一个小`Demo`级别的，目的是为了将大家带入`babel`插件的开发的大门。文章中的代码你可以在这里[21]查看。这个`repo`中不仅仅包含文章中的`demo`,还涉及了一些难度更高的插件学习模仿，以及文章开始提到的实现组件库的按需加载插件 (按需加载插件我还在写,原谅我的懒惰...)。

# babel-register


运行Babel的下一个最常见的方法是通过 `babel-register` 。通过此选项，您仅需要文件即可运行 Babel，这可能会更好地与您的设置集成。

**请注意**，这并非供生产使用。部署以这种方式编译的代码被认为是不好的做法。最好在部署之前提前进行编译。但是，这对于构建脚本或您在本地运行的其他事情非常有效。

首先让我们在项目中创建一个 `index.js` 文件。

```
console.log("Hello world!");
```

如果我们使用 `node index.js` 来运行它，那么 Babel 不会编译它。因此，我们需要先设置 `babel-register` 。

首先安装 `babel-register` 。

```
$ npm install --save-dev babel-register
```

接下来，在项目中创建一个 `register.js` 文件，并编写以下代码：

```
require("babel-register");
require("./index.js");
```

这是在 Node 的模块系统中注册 Babel 并开始编译每个 `require` 的文件。

现在，我们可以使用 `node egister.js` 代替运行 `node index.js` 。

```
$ node register.js
```

注意：您不能在要编译的文件中注册 Babel。在 Babel 有机会编译文件之前，Node 正在执行文件。

```
require("babel-register");

// not compiled:
console.log("Hello world!");
```

我们先来看看官网上对于`babel-register`的描述：

> One of the ways you can use Babel is through the require hook. The require hook will bind itself to node's `require` and automatically compile files on the fly. This is equivalent to CoffeeScript's coffee-script/register[22].

简答来说也就是引入`babel/register`后`babel`会对于特定后缀的文件进行处理。

> All subsequent files required by node with the extensions `.es6, .es, .jsx, .mjs,` and `.js` will be transformed by Babel.

起初其实我不太理解它的作用究竟是什么，对于上述后缀的文件交给`Babel`进行转化，这个我们在各种前端编译工具中比如`webpack`中的`babel-loader`和`rollup`中的`@rollup/plugin-babel`
帮我们做的事情吗？

这里的`@babel/regiser`的功能是不是有点多次一举了。

**稍微简单总结一下，也就是说通常在我们前端领域中我们结合了各种构建工具和babel的配合使用可以更好的将需要处理的文件交给babel进行处编译。**

**
而在nodejs中babel并不是其核心API的一部分，如果我们想在nodejs中使用babel进行转译我们的文件，就可以通过babel/regiseter针对于require语句引入的文件交给babel去transform。从而达到在nodejs进行转译js文件。**

> 需要额外注意的是`babel/register`是即时编译。

```
// index.js
require('@babel/register')
const data = require('./register');
console.log(`${data}`, 'data');
// register.js
const arrowFunction = () => {
  console.log('Hello,My name is wang.haoyu');
};
module.exports = arrowFunction
// babelrc
{
  "presets": ["@babel/preset-env"]
}
```

当我们使用`node`运行`index.js`时:

你会发现我们的打印结果已经变成了普通函数了。

此时，让我们来注释掉对应的`@babel/register`

```
// require('@babel/register')
const data = require('./register');
console.log(`${data}`, 'data');
```

我们发现此时我们的箭头函数并没有被`preset-env`生效。