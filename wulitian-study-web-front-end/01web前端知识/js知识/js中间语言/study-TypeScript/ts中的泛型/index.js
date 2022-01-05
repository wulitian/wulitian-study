// 泛型（泛型函数，泛型类，泛型接口 定义：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)）
// 1.泛型函数(any也可以解决不特定的数据类型,T代表泛型)
function fun() {
    // return 1
    return '1';
}
function fun2(val) {
    return val;
}
var res = fun2('123');
var res2 = fun2(123);
console.log(res);
console.log(res2);
// 2.泛型类
var GetArr = /** @class */ (function () {
    function GetArr() {
        this.arr = [];
    }
    GetArr.prototype.push = function (e) {
        this.arr.push(e);
        return this.arr;
    };
    return GetArr;
}());
var getArr = new GetArr();
console.log(getArr.push(1));
console.log(getArr.push(2));
var getName = {
    firstName: '123',
    lastName: '123'
};
var a = function (value) {
    return value;
};
console.log(a("123"));
