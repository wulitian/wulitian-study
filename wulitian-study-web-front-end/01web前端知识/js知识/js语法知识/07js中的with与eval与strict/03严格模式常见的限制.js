"use strict"

// 1. 禁止意外创建全局变量
// name = "wulitian"
// console.log(name)
//
// function fn() {
//     age = 20
// }
//
// fn()
// console.log(age)

// 2.不允许函数有相同的参数名称
// function fn2(x, y, x) {
//   console.log(x, y, x)
// }
//
// fn2(1, 2, 3)


// 3.静默错误
// true.name = "a"
// NaN = 1
// var obj = {}
// Object.defineProperty(obj, "name", {
//   configurable: false,
//   writable: false,
//   value: "1"
// })
// console.log(obj.name)
// obj.name = "wulitian"
//
// delete obj.name

// 4.不允许使用原先的八进制格式 0123
// var num = 0o123 // 八进制
// var num2 = 0x123 // 十六进制
// var num3 = 0b100 // 二进制
// console.log(num, num2, num3)

// 5.with语句不允许使用

// 6.eval函数不会向上引用变量了
// var str = '"use strict"; var name = "wulitian"; console.log(name);'
// eval(str)
// console.log(name)
