/**
 * 简单工厂模式示例
 */

/*-----------------------------------------*/
function Factory(name, type, time) {
    let obj = {};
    obj.name = name;
    obj.type = type;
    obj.time = time;
    let objType = {
        'js': () => {
            obj.js = 'js';
            return obj
        },
        'java': () => {
            obj.java = 'java';
            return obj
        },
        'vb': () => {
            obj.vb = 'vb';
            return obj
        }
    }
    console.log(objType[name]());
    objType[name] || objType[name]();
    return obj
}

let book1 = new Factory('js', '雾里天', '2021-09-17');
let book2 = new Factory('java', '雾里天', '2021-09-17');
let book3 = new Factory('vb', '雾里天', '2021-09-17');

console.log(book1);
console.log(book2);
console.log(book3);

/*-----------------------------------------*/
function Car(val) {
    this.name = val;
    this.run = () => {
        console.log(this.name);
    }
}

function Airplane(val) {
    this.name = val;
    this.air = () => {
        console.log(this.name);
    }
}

function Factory2(val) {
    switch (val) {
        case("Car"):
            return new Car(val);
        case("Airplane"):
            return new Airplane(val);
    }
    return {};
}

let carInstance = new Factory2("Car");
let airplaneInstance = new Factory2("Airplane");
console.log(carInstance);
console.log(airplaneInstance);
carInstance.run();
airplaneInstance.air();

/*-----------------------------------------*/
class Cat {
    constructor() {
        this.name = '猫';
    }

    eat() {
        console.log('猫吃饭');
    }
}

class Dog {
    constructor() {
        this.name = "狗";
    }

    eat() {
        console.log("狗吃饭");
    }
}

class Factory3 {
    create(val) {
        switch (val) {
            case("Cat"):
                return new Cat(val);
            case("Dog"):
                return new Dog(val);
        }
        return {};
    }
}

let factory3 = new Factory3();
console.log(factory3.create('Cat'));
console.log(factory3.create('Dog'));
factory3.create('Cat').eat();
factory3.create('Dog').eat();

