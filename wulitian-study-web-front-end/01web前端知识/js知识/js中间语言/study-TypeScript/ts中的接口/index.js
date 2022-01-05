// 接口：属性接口，函数类型接口，可索引接口，类类型接口，接口集成（接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用）
var wlt = {
    firstName: '雾里',
    lastName: '天',
    say: function () {
        return 'hello';
    },
};
console.log(wlt.firstName);
console.log(wlt.lastName);
console.log(wlt.say());
var wltName = function (key, value) {
    return key + value;
};
console.log(wltName('雾里', '天'));
var arr1 = ['aaa', 'bbb'];
var arr2 = { a: '1', b: '2' };
console.log(arr1[0]);
console.log(arr2.a);
var Ad = /** @class */ (function () {
    function Ad() {
    }
    Ad.prototype.eat = function (str) {
        console.log("\u96FE\u91CC\u5929" + str);
    };
    return Ad;
}());
var ad = new Ad();
ad.eat('吃饭了');
var P = /** @class */ (function () {
    function P() {
        this.firstName = '雾里';
        this.lastName = '天';
    }
    return P;
}());
var p = new P();
console.log(p.firstName);
console.log(p.lastName);
