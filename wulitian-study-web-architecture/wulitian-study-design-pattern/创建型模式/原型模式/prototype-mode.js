/**
 * 原型模式
 * prototype可以理解为ES6中class的一种底层原理，但是class是实现面向对象的基础，并不是服务于某个模式
 */

// 创建一个原型
let prototype = {
    getName: function() {
        return this.first + " " + this.last;
    },
    say: function() {
        console.log("Hello!");
    }
}

// 基于原型创建x
let x = Object.create(prototype);
console.log(x)
x.first = "A";
x.last = "B";
console.log(x.getName());
x.say();

// 基于原型创建y
let y = Object.create(prototype);
y.first = "C";
y.last = "D";
console.log(y.getName());
y.say();
