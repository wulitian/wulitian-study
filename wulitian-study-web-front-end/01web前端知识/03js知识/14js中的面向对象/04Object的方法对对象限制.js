var obj = {
    name: 'wulitian',
    age: 28
}

// 1.禁止添加新的属性
Object.preventExtensions(obj)
obj.height = 2
console.log(obj)

// 2.禁止删除属性
// for (var key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key]
//   })
// }

Object.seal(obj)

delete obj.name
console.log(obj.name)

// 3.禁止修改属性
Object.freeze(obj)

obj.name = "WULITIAN"
console.log(obj.name)
