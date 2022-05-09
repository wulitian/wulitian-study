# 使用yeoman创建脚手架

#### 定义
yeoman是一款创建 web 应用的通用型脚手架。通过 Yeoman 提供的 Generator 我们可以创建不同类型的项目。

#### 使用步骤

1. 明确需求

2. 找到合适的Generator

3. 全局范围内找到Generator

4. 通过Yo运行对应的Generator

5. 通过命令交互填写选项

6. 生成你所需要的项目结构

#### 基础使用 node-generator的使用

1. 全局安装，使用 yarn 或 npm 都可以。

```
yarn add yo -g | npm install yo -g
```

2. 安装对应项目类型的 generator。

```
yarn add generator-node -g | npm install generator-node
```

使用 yarn 会出现 yo 命令找不到的错误，此时使用替换成 npm 全局安装即可。generator-node 模块同理。

3. 运行 generator。

```
yo node
```

#### 使用Sub Generator

使用场景：在已有项目中创建文件，可以按照指定的模板进行文件创建。适用于不需要通过完整 generator 创建项目，只需要一部分功能的情况。步骤如下：
并不是所有的 generator 都支持创建 Sub generator，实际使用时，需要查看对应的 generator 文档。

1. 创建 cli 命令，命令规则

```
yo node:cli
```

2. 使用 yarn link 将模块加入到全局范围，这样就可以在终端中使用 cli 命令了。

```
yarn link
```

3. 安装 sub generator 依赖项

```
yarn
```

4. 查看模块加入结果

```
my-module --help    // my-module 是 Sub generator 名称
```

#### 创建自己的generator

generator 命名方式： generator-\<name>。步骤如下：

在当前工程下创建自定义 generator。第 4 步创建的 generator 会以 yeoman 提供的 generator 作为基础模板。

```
mkdir generator-sample
cd generator-sample
yarn init | npm init
yarn add yeoman-generator | npm install yeoman-generator
```
1. 创建以下目录：
generators/app/index.js
```
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // appname 为项目生成目录名称
      }
    ])
    .then(answers => {
      // answers => { name: 'user input value' }
      this.answers = answers
    })
  }
  writing () {
    // this.fs.write(
    //   this.destinationPath('temp.txt'),
    //   Math.random().toString()
    // )

    // // 通过模板方式写入文件到目标目录
    // // 模板文件路径
    // const tmpl = this.templatePath('foo.txt')
    // // 输出目标路径
    // const output = this.destinationPath('foo.txt')
    // // 模板数据上下文
    // const context = { title: 'Hello zce~', success: false }

    // this.fs.copyTpl(tmpl, output, context)

    // 模板文件路径
    const tmpl = this.templatePath('bar.html')
    // 输出目标路径
    const output = this.destinationPath('bar.html')
    // 模板数据上下文
    const context = this.answers

    this.fs.copyTpl(tmpl, output, context)
  }
}
```

2. 使用 yarn link 在第一步的文件路径上注册 generator 模块
```
yarn link
```

3. 使用注册成功的 generator 模块

```
yo sample
```

如果想定义自生成器可以在app同级目录添加新的目录，模块名称必须是generator-<name>

#### Vue项目Generator

1. 基础项目结构文件准备(如：src、package.json)
   
2. 创建一个 generator 新项目，编写 generator/app/index.js 文件

3. prompting - 用户输入处理
   
4. template 目录准备，路径为 generator/app/template。在 template 文件中，需要替换为用户输入的地方使用 EJS 语法。

5. writing - 处理文件靠别拷贝
   
6. yarn link 将 generator 添加本地全局模块。再创建一个新项目目录，新项目目录中使用 yo generator 名称的方式进行新项目初始化创建。

#### 发布Generator

本质上Generator 就是一个 npm 的模块。

1. 新建一个 github 的仓库用来托管写好的代码
千万别忘了新建一个 .gitignore 文件，然后将 node_modules 写进 .gitignore

2. 使用 yarn 或是 npm 将发布插件
如果发布失败就查看一下是不是使用淘宝镜像了，淘宝镜像是一个只读镜像，不接受任何的改变，所以在发布前需要将镜像改回官方（npm 或是 yarn）的镜像。

3. 发布完成的模块就可以直接在 npm 的官网上找到，要安装就可以使用以下命令：

4. npm install 发布的Generator
