# 使用plop创建特定的类型文件

#### 使用步骤

1. 在项目根目录新建一个文件夹 generators，文件夹中新增一个文件generators/index.js

```js
module.exports =  (plop) => {
	// 创建一个生成器
	plop.setGenerator('component', {
		description: '新增一个公共组件',//描述，在终端里生成器后面显示的内容
		prompts: [], // 提示，用于捕获用户输入
		actions: []  // 行为，具体执行的内容
	});
};
```
2. 修改package.json

```json5
{
  "scripts": {
    //...
    "generator": "plop --plopfile generators/index.js",
  },
}
```
3. 新建hanldebar模板文件
   
4. 完善生成器
   
4. 运行npm generator

