# npm

## 一、 什么是npm
npm 是javascript 的包管理工具，类似于php的composer 。

## 二、 npm 安装
1、从nodejs 官网下载 nodejs 安装包， 安装后进入命令终端运行查看安装是否成功。npm -v 如果感觉版本不是最新，可以通过命令更新npm版本：npm install npm@latest -g

## 三、初始项目
通过 npm init 命令，根据提示完成项目初始，如果没有特别要求，一直选择默认即可。 初始完以后 会在项目目录下新建 package.json 目录。

## 四、npm组成
1.网站
2.注册表（registry）
3.命令行工具 (CLI)
网站 是开发者查找包（package）、设置参数以及管理 npm 使用体验的主要途径。
注册表 是一个巨大的数据库，保存了每个包（package）的信息。
CLI 通过命令行或终端运行。开发者通过 CLI 与 npm 打交道。
默认初始 package.json 文件如下 ：

{
  "name": "study-npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "doc": "docs"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://gitee.com/wangk_code/study-npm.git"
  },
  "author": "",
  "license": "ISC"
}

其中需要注意的是 scripts 节点下，可以配置命令别名。然后通过命令运行：

 npm run test 
 
## 四、npm 包管理
npm 的包有两种安装方式，一种是本地安装，作用于当前项目。一种是全局安装。

### 1、 本地安装。
安装依赖包
//全局安装
npm install 模块名 -g
//本地安装
npm install 模块名
//一次性安装多个
npm install 模块1 模块2 模块3 
//安装开发时依赖包
npm install 模块名 --save-dev
//安装运行时依赖包
npm install 模块名 --save
### 2， 查看安装的目录
//查看项目中模块所在的目录
npm root
//查看全局安装的模块所在目录
npm root -g
### 3， 查看npm的所有命令命令
npm help
### 4，查看某个包的各种属性
npm view 模块名 dependencies
### 5，查看包的源文件地址
npm view 模块名 repository.url
### 6，查看当前模块依赖的node最低版本号
npm view 模块名 engines
### 7，查看模块的当前版本号
npm view 模块名 version
### 8， 查看模块的历史版本和当前版本
npm view 模块名 versions
### 9，查看一个模块的所有信息
npm view 模块名
### 10，查看npm使用的所有文件夹
npm help folders
### 11，用于更改包内容后进行重建
npm rebuild 模块名
### 12，检查包是否已经过时
npm outdated
### 13， 更新node模块
npm update 模块名
//当然你也可以update 该模块到指定版本
npm update 模块名 @版本号
//如果安装到最新版本可以使用以下命令
npm install 模块名@latest 
### 14，查看一个模块的所有信息
npm view 模块名
### 15，卸载node模块
npm uninstall 模块名
### 16，访问package.json的字段文档
npm help json
### 17，发布一个npm包的时候，需要检验某个包名是否已经存在
npm search 模块名
### 18，引导你创建一个package.json文件，包括名称、版本、作者这些信息
npm init
### 19， 清除npm的缓存
npm cache clean
### 20，查看npm的版本
npm -v
### 21，查看某个模块的bugs列表界面
npm bugs 模块名
### 22，打开某个模块的仓库界面
npm repo 模块名
### 23，打开某个模块的文档
npm docs 模块名
### 24，打开某个模块的主页
npm home 模块名
### 25，查看当前已经安装的模块
npm list
//当然我们也可以限制输入的模块层级，例如
npm list --depth=0
### 26，清除未被使用到的模块
npm prune
