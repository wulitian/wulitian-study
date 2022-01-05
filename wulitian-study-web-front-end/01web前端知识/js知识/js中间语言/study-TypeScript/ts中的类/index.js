// 类的定义，继承，修饰符，静态属性，静态方法，抽象类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1.类的定义
var Persion = /** @class */ (function () {
    function Persion(n) {
        this.name = n;
    }
    Persion.prototype.run = function () {
        console.log(this.name);
    };
    return Persion;
}());
var p = new Persion('wulitian');
p.run();
// 2.类的继承extends super
var Wlt = /** @class */ (function (_super) {
    __extends(Wlt, _super);
    function Wlt(n) {
        return _super.call(this, n) || this;
    }
    Wlt.prototype.run = function () {
        console.log('子类run调用');
    };
    return Wlt;
}(Persion));
// 出现同名方法先调用父类方法再调用子方法
var wlt = new Wlt('wulitian');
wlt.run();
// 3.修饰器public(公有：当前类，子类，外部可以访问),protected（保护：当前类，子类可以访问）,private（私有：当前类可以访问）不写默认为public
// 4.静态属性，静态方法（ static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。）
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 10;
StaticMem.disp();
// 5.抽象类（用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现, abstract抽象方法只能放在抽象类里面）
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.play = function () {
        console.log('小汽车放着歌');
    };
    return Car;
}());
var Ad = /** @class */ (function (_super) {
    __extends(Ad, _super);
    function Ad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ad.prototype.run = function () {
        console.log('奥迪车跑了');
    };
    return Ad;
}(Car));
var ad = new Ad();
ad.run();
ad.play();
