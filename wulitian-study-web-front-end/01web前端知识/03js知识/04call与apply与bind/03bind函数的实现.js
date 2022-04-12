/**
 *  便捷处理undefined、null时指向window,利用对象的方式隐形改变this指向注意返回的是函数
 */
Function.prototype.MyBind = function(thisArg, ...argArray) {
  let fn = this;
  thisArg = (thisArg === null||thisArg === undefined)?window:Object(thisArg);
  return function(...arg){
    thisArg.fn = fn;
    let finArg = [...arg,...argArray]
    thisArg.fn(...finArg)
    delete thisArg.fn
  }
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


fn.bind(undefined)()
fn.bind(obj)()
fn.bind(obj, 1,2)()
fn.MyBind(undefined)()
fn.MyBind(obj)()
fn.MyBind(obj, 1,2)()
