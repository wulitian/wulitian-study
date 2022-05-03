//父类对象
function Car(name) {
    this.name = name;
    this.run = function(){
        console.log("开车");
    }
}

Car.prototype.getName = function () {
    console.log("奔驰")
}

// 原型继承
!(function () {
    function Bc(){}
    Bc.prototype = new Car("奔驰")
    let bc = new Bc();
    bc.getName();
})()

// 构造借用继承
!(function () {
    function Bc(name){
        Car.call(this,name);
    }
    let bc = new Bc("奔驰");
    console.log(bc.name);
    bc.run();
})()

// 原型继承+构造借用继承
!(function () {
    function Bc(name){
        Car.call(this,name);
    }
    Bc.prototype = new Car("奔驰")
    let bc = new Bc("奔驰");
    console.log(bc.name);
    bc.run();
})()

// 原型式继承
!(function () {
    function Bc(name){
        return new Car(name);
    }
    let bc = new Bc("奔驰");
    console.log(bc.name);
    bc.getName();
})()

// 寄生继承
!(function () {
    function Bc(){}
    function obj(){}
    obj.prototype = Car.prototype;
    Bc.prototype = new obj();
    let bc = new Bc();
    console.log(bc)
    bc.getName()
})()

// 寄生组合继承
!(function () {
    function Bc(name){
        Car.call(this,name);
    }
    function obj(){}
    obj.prototype = Car.prototype;
    Bc.prototype = new obj();
    Bc.prototype.constructor = Bc;
    let bc = new Bc("奔驰");
    console.log(bc.name);
    bc.run();
    bc.getName();
})()

// 拷贝继承
!(function () {
    function Bc(){}
    let car = new Car("奔驰");
    for(let p in car){
        Bc.prototype[p] = car[p];
    }
    let bc = new Bc();
    console.log(bc.name);
    bc.run();
    bc.getName();
})()

// es6继承
!(function () {
    class Bc extends Car{
        constructor(props) {
            super(props);
        }
    }

})()