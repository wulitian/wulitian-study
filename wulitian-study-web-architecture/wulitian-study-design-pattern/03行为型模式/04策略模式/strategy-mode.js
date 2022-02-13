!(function () {
    class Plus {
        constructor(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        }

        calculate() {
            return this.num1 + this.num1;
        }
    }

    class Minus {
        constructor(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        }

        calculate() {
            return this.num1 - this.num1;
        }
    }

    class Multiply {
        constructor(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        }

        calculate() {
            return this.num1 * this.num1;
        }
    }

    class Divide {
        constructor(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        }

        calculate() {
            if (!this.num2) {
                throw new Error("除数不能为0");
            }
            return this.num1 / this.num2;
        }
    }

    class Context {
        constructor(algorithm) {
            this.algorithm = algorithm;
        }

        calculate() {
            return this.algorithm.calculate();
        }
    }

    let divide = new Divide(2, 1);
    let context = new Context(divide);
    console.log(context.calculate(context));
})()
