/**
 * 构造函数调用下this的指向为实例对象
 */
var that = undefined;

function fn(){
    that = this;
}

let obj = new fn();

console.log(obj === that)