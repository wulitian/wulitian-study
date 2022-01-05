// 模块（关于术语的一点说明: 请务必注意一点，TypeScript 1.5里术语名已经发生了变化。 “内部模块”现在称做“命名空间”。“外部模块”现在则简称为“模块” 模块在其自身的作用域里执行，而不是在全局作用域里；）
// import fun3 from './modules/modules1'
// fun3()

import {fun1,fun2,str,Person} from './modules/modules1'
fun1("fun1")
fun2()
console.log(str)
let person = new Person();
person.getName()
