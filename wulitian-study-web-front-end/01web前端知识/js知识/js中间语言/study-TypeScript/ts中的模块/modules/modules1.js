"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 暴露函数
function fun1(str) {
    console.log(str);
}
exports.fun1 = fun1;
function fun2() {
    console.log('fun2');
}
exports.fun2 = fun2;
function fun3() {
    console.log('fun3');
}
// 暴露变量
exports.str = '123';
// 暴露类
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'wulitian';
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
exports.Person = Person;
// export default fun3
