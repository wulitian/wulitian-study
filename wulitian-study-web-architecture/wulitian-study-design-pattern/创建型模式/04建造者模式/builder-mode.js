/**
 * 建造者模式
 */

// 房子
class House{
    bedroom = "";
    livingroom = "";
    kitchen = "";
}

// 包工头
class Contractor{
    makeHouse(){
        let worker = new Worker();
        worker.makeBedroom();
        worker.makeLivingroom();
        worker.makeKitchen();
    }
}

// 工人
class Worker{
    makeBedroom(){
        console.log("卧室盖好了")
    }
    makeLivingroom(){
        console.log("客厅盖好了")
    }
    makeKitchen(){
        console.log("厨房盖好了")
    }
    handOver(){
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
