# js中的语法基础

#### 语法

- 区分大小写

js语法中是区分大小写的，比如run与Run是两个变量。

- 标识符

标识符就是变量、函数、属性的名字，组成为：第一个字符必须是一个字母、下划线（_）或美元符号（$）剩下的其他字符可以是字母、下划线、美元符号或数字。

- 注释

单行注释与多行注释
```js
// 单行注释
/* 这是多行 
注释 */
```
- 严格模式

严格模式是一种不同的JavaScript解析和执行模型，ECMAScript3的一些不规范写法在这种模式下会被处理，对于不安全的活动将抛出错误。要对整个脚本启用严格模式
在行首加入"use strict"。也可以在函数内单独加严格模式。

- 语句

1. js中可以省略最后的分号但是不推荐。
2. js中当if语句只有一条语句时可以省略花括号不推荐。

#### 关键字保留字

- 关键字：break do in typeof case else instanceof var catch export new void class extends return while const finally super with continue for switch yield debugger function this default if throw delete import try
- 保留字：enum implements package public interface protected static let private await
关键字保留字不可以用作标识符，但是可以用作对象属性名，但是不建议用
  
#### 变量

- var 

var声明存在变量提升，在全局作用域声明或去掉var声明的变量就会变成全局变量，支持重复多次声明。

- let 

不存在变量提升，在全局声明不会变成全局变量存在块级作用域，重复声明会报错。存在暂时性死区，再声明之前调用会报错ReferenceError

- const

主要声明常量，如果尝试修改会报错，如果声明对象，修改对象内属性不会报错，也比较常用

- 声明风格及最佳实践

#### 数据类型

数据类型主要有6中undefined,null,string,number,boolean,symbol其中有一些资料也会介绍为7种包括bigint

- typeof

可以区分以下数据类型但是不能区分null与object,因为都会返回object

- "undefined"表示值未定义。 
- "boolean"表示值为布尔值。
- "string"表示值为字符串。 
- "number"表示值为数值。
- "object"表示值为对象（而不是函数）或null。
- "function"表示值为函数。
- "symbol"表示值为符号。

#### 操作符

操作符包括数学操作符加减、位操作符、关系操作符、相等操作符。

- 一元操作符

- 位操作符

- 布尔操作符

- 乘性操作符

- 指数操作符

- 加性操作符

- 关系操作符

- 相等操作符

- 条件操作符

- 赋值操作符

- 逗号操作符

#### 语句

- if语句

没啥说的这玩意没必要说。

- do-while语句

没啥说的这玩意没必要说，就是至少会执行一次。

- while语句

没啥说的这玩意没必要说。

- for语句 

没啥说的这玩意没必要说。

- for-in语句

用于枚举对象中的非符号键属性

- for-of语句

用于遍历可迭代对象的元素

- 标签语句

- break与continue

break 直接退出循环 continue跳出本次魂环

- with
  
with语句的用途是将代码作用域设置为特定的对象

- switch

当与case值匹配上就会执行对应的case内的语句，如果没有break会继续执行下面的case,最后都会执行default。
