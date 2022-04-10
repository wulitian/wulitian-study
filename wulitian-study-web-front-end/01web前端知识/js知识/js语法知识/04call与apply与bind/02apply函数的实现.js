/**
 *  便捷处理undefined、null时指向window,利用对象的方式隐形改变this指向注意参数是类数组
 */
Function.prototype.MyApply = function (thisArg, argArray) {
    let fn = this;
    thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg);
    thisArg.fn = fn;
    argArray = argArray || []
    result = thisArg.fn(...argArray)
    delete thisArg.fn;
    return result;
}

var name = "wulitian";

function fn(a, b) {
    console.log(a);
    console.log(b);
    console.log("fn函数执行", this.name);
}

const obj = {
    name: "WULITIAN"
}


fn.apply(undefined)
fn.apply(obj)
fn.apply(obj, [1,2])
fn.MyApply(undefined)
fn.MyApply(obj)
fn.MyApply(obj, [1,2])
