/**
 * 建造者模式
 */
!function () {
    // 房子
    class House {
        bedroom = "";
        livingroom = "";
        kitchen = "";
    }

// 包工头
    class Contractor {
        makeHouse() {
            let worker = new Worker();
            worker.makeBedroom();
            worker.makeLivingroom();
            worker.makeKitchen();
        }
    }

// 工人
    class Worker {
        makeBedroom() {
            console.log("卧室盖好了")
        }

        makeLivingroom() {
            console.log("客厅盖好了")
        }

        makeKitchen() {
            console.log("厨房盖好了")
        }

        handOver() {
            let house = new House();
            house.bedroom = "卧室盖好了"
            house.livingroom = "客厅盖好了"
            house.kitchen = "厨房盖好了"
            return house
        }
    }

    let worker = new Worker();
    let contractor = new Contractor();
    contractor.makeHouse();
    let house = worker.handOver();
    console.log(house)
}();

!function () {

    // 生产者
    class Product {
        bedroom = "";
        livingroom = "";
        kitchen = "";
    }

    // 建造者
    class Builder {
        makeBedroom() {
            this.bedroom = "卧室盖好了";
            return this;
        }

        makeLivingroom() {
            this.livingroom = "客厅盖好了";
            return this;
        }

        makeKitchen() {
            this.kitchen = "厨房盖好了";
            return this;
        }

        handOver() {
            let product = new Product();
            product.bedroom = this.bedroom;
            product.livingroom = this.livingroom;
            product.kitchen = this.kitchen;
            return product
        }
    }
    // 指挥者
    class Director {
        makeHouse(builder) {
            builder.makeBedroom().makeLivingroom().makeKitchen().handOver();
        }
    }

    const builder = new Builder();
    const director = new Director();
    director.makeHouse(builder);
    console.log(builder)
}()
