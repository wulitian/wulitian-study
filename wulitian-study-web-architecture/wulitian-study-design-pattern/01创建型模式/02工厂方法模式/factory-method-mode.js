/**
 * 工程方法模式示例
 */

/*-----------------------------------------*/
function Factory(type, content) {
    if (this instanceof Factory) {
        console.log(2);
        return new this[type](content);
    } else {
        console.log(1);
        return new Factory(type, content);
    }
}

Factory.prototype = {
    javascript: function (content) {
        console.log(content);
    },
    java: function (content) {
        console.log(content);
    },
    vb: function (content) {
        console.log(content);
    }
}
const arr = [
    {type: 'javascript', content: 'javascript我最强'},
    {type: 'java', content: 'java我最强'},
    {type: 'vb', content: 'vb我最强'}
]
arr.forEach((e) => {
    Factory(e.type, e.content);
})

/*-----------------------------------------*/
function car(val) {
    this.name = val;
    this.run = () => {
        console.log(this.name);
    }
}

function airplane(val) {
    this.name = val;
    this.air = () => {
        console.log(this.name);
    }
}

function Factory2(constructor, val) {
    return new constructor(val);
}

let carInstance = new Factory2(car, '汽车');
let airplaneInstance = new Factory2(airplane, '飞机');
console.log(carInstance);
console.log(airplaneInstance);
carInstance.run();
airplaneInstance.air();


/*-----------------------------------------*/
class cat {
    constructor() {
        this.name = "猫";
    }

    eat() {
        console.log("猫吃饭");
    }
}

class dog {
    constructor() {
        this.name = "狗";
    }

    eat() {
        console.log("狗吃饭");
    }
}

class Factory3 {
    create(constructor) {
        return new constructor();
    }
}

let factory3 = new Factory3();
console.log(factory3.create(cat));
console.log(factory3.create(dog));
factory3.create(cat).eat();
factory3.create(dog).eat();
