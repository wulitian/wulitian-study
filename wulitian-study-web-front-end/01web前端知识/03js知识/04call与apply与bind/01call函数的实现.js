/**
 *  便捷处理undefined、null时指向window,利用对象的方式隐形改变this指向
 */

Function.prototype.MyCall = function (thisArg, ...args) {
    var fn = this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    thisArg.fn = fn
    var result = thisArg.fn(...args)
    delete thisArg.fn
    return result
}
var name = "wulitian"
function fn(a, b) {
    console.log(a);
    console.log(b);
    console.log("fn函数执行", this.name);
}

const obj = {
    name:"WULITIAN"
}


fn.call(undefined)
fn.call(obj)
fn.call(obj,1,2)
fn.MyCall(undefined)
fn.MyCall(obj)
fn.MyCall(obj,1,2)
