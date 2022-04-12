// 1通过new Object()创建
var obj1 = new Object()
obj1.name = "wulitian"
obj1.age = 28
obj1.getName = function () {
    console.log(this.name)
}

// 2字面量形式
var obj2 = {
    name: "wulitian",
    age: 30,
    getName: function () {
        console.log(this.name)
    }
}

// 3函数创建对象
function obj3(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        return this.name;
    }
}

// 4class关键字创建
class obj4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
            return this.name;
        }
    }
}

// 5工厂方式
function obj5() {
    const object = new Object();
    object.name = 'wulitian';
    object.age = 28;
    object.getName = function () {
        return this.name;
    }
    return object
}

// 6原型方式
function obj6() {
}

obj6.prototype.name = 'wulitian';
obj6.prototype.age = 28;
obj6.prototype.getName = function () {
    return this.name;
}
