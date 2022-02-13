// 保护代理司机开车
!(function () {
    class person {
        constructor(age) {
            this.age = age;
        }

        drive() {
            console.log("开车")
        }
    }

    class proxyDriver {
        constructor(person) {
            this.person = person;
        }

        drive() {
            if (this.person.age > 18) {
                console.log("不可以开车")
            } else {
                this.person.drive();
            }
        }
    }

    let driver = new proxyDriver(new person(20));
    driver.drive();
})()

// 缓存代理之计算缓存
!(function () {
    let mult = function () {
        let a = 1;
        for (let i = 0, l = arguments.length; i < l; i++) {
            a = a * arguments[i];
        }
        return a;
    }

    let proxyMult = (function () {
        let cache = {};
        return function () {
            let args = Array.prototype.join.call(arguments, ',');
            if (args in cache) {
                return cache[args];
            }
            return cache[args] = mult.apply(this, arguments);
        }
    })();
    proxyMult(1, 2, 3)
    proxyMult(1, 3, 3)
})()

// 虚拟代理之图片加载
!(function () {
    let image = (function () {
        let imageNode = document.createElement("img");
        document.body.appendChild(imageNode);
        return {
            setSrc: function (src) {
                imageNode.src = src;
            }
        }
    })()

    let proxyImage = (function () {
        let img = new Image;
        img.onload = function () {
            image.setSrc(this.src)
        }
        return {
            setSrc: function (src) {
                image.setSrc('loading.png')
                img.src = src
            }
        }
    })();
    proxyImage.setSrc('xxxxx.png')
})()
