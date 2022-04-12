# yarn

## 一、 什么是yarn
yarn 是javascript 的包管理工具

## 二、 yarn 安装
1、npm install -g yarn

## 三、基本命令

### 1、 初始化。
yarn init 
### 2， 安装依赖
yarn add <Package name1> <Package name1>
### 3， 安装指定版本
yarn add <Package name>@version
### 4，将包更新到指定版本
yarn upgrade <Package name>@version
### 5，将包更新到最新版本
yarn upgrade --latest <Package name>
### 6，删除包
yarn remove <Package name1> <Package name2>
### 7，查看包管理信息
yarn info <Packagename>
### 8， 安装 package.json 里所有包
yarn install
### 9，强制下载所有包
yarn install --force
### 10，安装一个包的单一版本
yarn install --flat
### 11，只安装 dependencies 里的包
yarn install --production
### 12，不读取或生成 yarn.lock
yarn install --no-lockfile
### 13， 不生成 yarn.lock
yarn install --pure-lockfile
