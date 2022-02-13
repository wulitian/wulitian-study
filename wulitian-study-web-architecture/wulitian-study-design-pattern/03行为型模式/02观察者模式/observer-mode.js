!(function () {
    class Subject {
        constructor() {
            this.observers = []
        }

        add(observer) {
            this.observers.push(observer)
        }

        notify() {
            for (let observer of this.observers) {
                observer.update();
            }
        }
    }

    class observer {
        constructor(name) {
            this.name = name;
        }

        update() {
            console.log("目标通知我接收，我是" + this.name);
        }
    }

    let observer1 = new observer("手机1");
    let observer2 = new observer("手机2");
    let subject = new Subject();
    subject.add(observer1);
    subject.add(observer2);
    subject.notify(observer1);
    subject.notify(observer2);
})()
