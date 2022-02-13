/**
 * 桥接模式
 */

class Color {
    constructor(name) {
        this.name = name;
    }
}

class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    draw() {
        console.log(`使用${this.color.name}颜色画了一个${this.name}`);
    }
}


// 测试
let red = new Color("red");
let yellow = new Color("yellow");
let circle = new Shape("circle", red);
circle.draw();

let triangle = new Shape("triangle", yellow);
triangle.draw();
