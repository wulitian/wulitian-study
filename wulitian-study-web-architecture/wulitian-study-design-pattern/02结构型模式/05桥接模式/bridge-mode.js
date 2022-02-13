!(function () {
    class Color {
        constructor(name) {
            this.name = name;
        }
    }

    class Shape {
        constructor(name) {
            this.name = name;
        }
    }

    class brush {
        constructor(color, shape) {
            this.color = color;
            this.shape = shape;
        }

        draw() {
            console.log(`使用${this.color.name}颜色画了一个${this.shape.name}`);
        }
    }

    let red = new Color("red");
    let yellow = new Color("yellow");
    let circle = new Shape("circle");
    let square = new Shape("square");
    let brush1 = new brush(red, circle);
    let brush2 = new brush(yellow, square);
    brush1.draw();
    brush2.draw();
})()

