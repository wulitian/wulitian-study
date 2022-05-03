var obj = {
    name: "wulitian",
    age: 18,
}

Object.defineProperty(obj, "age", {
    enumerable: true,//可枚举
    writable: true,//可写
    configurable: true,//可以删除和赋值
    value: 28//当前属性值
})

console.log(obj)

// 定义了属性描述默认值为
Object.defineProperty(obj, "age", {
    // value: undefined,
    // configurable: false,
    // enumerable: false,
    // writable: false
})
var obj2 = {
    name: "wulitian",
    _age: 20
}
let newAge = 30;
// 属性描述符对属性赋值读取过程的定义
Object.defineProperty(obj2, "age", {
    get: function () {
        return this._age
    },
    set: function (value) {
        this._age = value
    }
})
var obj3 = {
    name: "wulitian",
    _age: 20
}
Object.defineProperties(obj3, {
    name:{
        enumerable: true,//可枚举
        writable: true,//可写
        configurable: true,//可以删除和赋值
        value: 28//当前属性值
    },
    age:{
        enumerable: true,//可枚举
        get: function () {
            return this._age
        },
        set: function (value) {
            this._age = value
        }
    }
})
// 获取属性描述
console.log(Object.getOwnPropertyDescriptor(obj2,'age'))
console.log(Object.getOwnPropertyDescriptors(obj3))