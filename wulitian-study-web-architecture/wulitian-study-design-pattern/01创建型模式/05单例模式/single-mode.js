/**
 * 单例模式
 */

/**
 * 单例设计模式
 */
// 最简单的单例设计模式
!(function(){
    let car = {
        name: '造车场',
        create: function() {}
    }
    console.log(car.name)
})()

// 通过static实现单例设计模式
!(function(){
    class Car {
        constructor(name, creator, products) {
            this.name = name;
            this.creator = creator;
            this.products = products;
        }
        static getInstance(name, creator, products) {
            if(!this.instance) {
                this.instance = new Car(name, creator, products);
            }
            return this.instance;
        }
    }
    console.log(Car.getInstance("奔驰","一汽","一汽工厂") === Car.getInstance("宝马","一汽","一汽工厂"))
})()

// 通过构造实现
!(function(){
    class Car {
        constructor(name, creator, products) {
            this.name = name;
            this.creator = creator;
            this.products = products;
            if(!Car.instance) {
                Car.instance = this;
            }
            return Car.instance;
        }
    }
    console.log(new Car("奔驰","一汽","一汽工厂") === new Car("宝马","一汽","一汽工厂"))
})()

// 自执行函数实现单例设计模式
!(function(){
    let Car = (function(){
        let instance = null;
        function init(name, creator, products){
            this.name = name;
            this.creator = creator;
            this.products = products;
            this.start = function(){
                console.log(this.name);
            }
        }
        return function(name, creator, products){
            if(!instance){
                return instance = new init(name, creator, products);
            }else{
                return instance;
            }
        }
    })();
    let car = Car("奔驰", "一汽", "一汽工厂");
    let car2 = Car("奔驰2", "一汽", "一汽工厂");
    console.log(car === car2);
})()
