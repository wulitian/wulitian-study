/**
 * 抽象工厂模式
 */

/**
 * 工程方法模式示例
 */
let Factory = function(son,parent){
    if(typeof Factory[parent] === "function"){
        function F(){}
        F.prototype = new Factory[parent]();
        son.constructor = son;
        son.prototype = new F();
    }else{
        throw new Error("未创建抽象对象");
    }
}

Factory.Car = function () {
    this.type = "car"
}
Factory.Car.prototype = {
    getPrice: function(){
        return new Error("抽象方法不能调用")
    },
    getSpeed: function(){
        return new Error("抽象方法不能调用")
    }
}

var BMA = function (price,speed) {
    this.price = price;
    this.speed = speed;
}

Factory(BMA,'Car')

BMA.prototype.getPrice = function(){
    return this.price;
}

let bma = new BMA(1000,10000)
console.log(bma)
console.log(bma.getSpeed())

