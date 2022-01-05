/**
 * 单例模式
 */

class SingleObject {
    run() {
        console.log("单例模式内方法");
    }
}

// 创建一个静态自执行的方法
SingleObject.getInstance = (function() {
    let instance;
    return function() {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance;
    }
})()

let obj1 = SingleObject.getInstance();
let obj2 = SingleObject.getInstance();

let obj3 = new SingleObject();
let obj4 = new SingleObject();
console.log(obj3 === obj2);
