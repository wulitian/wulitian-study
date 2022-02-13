!(function () {
    const Beverage = function(){};
    Beverage.prototype.boilWater = function(){
        console.log( '把水煮沸' );
    };
    Beverage.prototype.brew = function(){
        throw new Error('不可直接调用抽象方法需要重写');
    }
    Beverage.prototype.pourInCup = function(){
        throw new Error('不可直接调用抽象方法需要重写');
    }
    Beverage.prototype.addCondiments = function(){
        throw new Error('不可直接调用抽象方法需要重写');
    }
    Beverage.prototype.init = function(){
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    };

    const Coffee = function(){};
    Coffee.prototype = new Beverage();
    Coffee.prototype.brew = function(){
        console.log("泡咖啡")
    }
    Coffee.prototype.pourInCup = function(){
        console.log("倒进杯子")
    }
    Coffee.prototype.addCondiments = function() {
        console.log( '加糖' );
    }
    let coffee = new Coffee();
    coffee.init();

    const Tea = function(){};
    Tea.prototype = new Beverage();
    Tea.prototype.brew = function(){
        console.log("泡茶叶")
    }
    Tea.prototype.pourInCup = function(){
        console.log("倒进杯子")
    }
    Tea.prototype.addCondiments = function() {
        console.log( '加黑珍珠' );
    }
    let tea = new Tea();
    tea.init();
})()
