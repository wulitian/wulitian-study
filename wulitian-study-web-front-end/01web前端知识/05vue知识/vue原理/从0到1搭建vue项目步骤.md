# 从0到1搭建vue项目步骤

1. 根据项目类型选择一些合适的框架，通常分为小程序 开发，H5 页面 开发、PC 官网 、后台管理系统 开发、Native 开发。
2. 是否自己开发一个类似于@vue/cli的脚手架，取决于以后复用的可能，时间投入是否值得。
3. 脚手架成员选择，是否需要vue-router,vuex,单元测试，端到端测试，es6的支持程度，兼容性的考虑，是否使用ts,样式方面是否使用sass/less/stylus/postCss
4. 关于代码规范和风格选用js使用eslint，其中我们可以选择一个合适的风格，tslint如果使用ts就集成一个，是否使用styleLint.
5. 通用的配置xx.json、.xxrc、xx.config.js、xxconfig
6. 编辑器配置 ：.editorconfig这里最重要的是缩进方式，及 Tab 大小，建议 2 个空格作用缩进。
7. 版本控制的选择通常git,涉及到提交规范Angular团队规范，changelog的生成，打tag，
8. 持续集成和部署目前开源项目通常采用 Travis，而一般公司内部项目通常采用 Jenkins 来做持续集成，在部署上通常采用 Docker，集群上使用 KubeOperator 来管理。
9. API 请求方式通常采用 Restfull 的方式来请求数据，也可以采用 GraphQL 的方式来请求。如果采用 Restfull 的方式通常可以使用 axios, fetch api。
10. 代理和数据 Mock
11. 使用的库 UI 框架 : Element, iView, vue-strap 等
12. 常用的工具库 日期 : moment, dayjs URL 解析 : query-string, path-to-reqexp 实用方法 : lodash Cookie : js-cookie 混淆 ID : hashids 图表 : echarts 拖拽 : Vue.Draggable Meta 修改 : vue-meta
13. 项目目录划分 视图页面放在 pages 或者 views 中 静态文件放在 static 中 资源文件放在 assets 中 样式文件放在 styles 中 辅助库放在 utils 中 配置文件可以放在 config 或者 constants 中
vuex 的文件放在 stores 中，至于 getters, actions, mutation, modules 可以参考 vuex 的文档 路由文件放在 routes 中 所有组件放在 components 中 共享代码也可以使用 shared 作为目录 布局组件可以放在 layouts 目录中 权限配置
主要分为页面权限（路由）、功能权限，采用多级角色划分方式。菜单配置数据直接通过接口返回