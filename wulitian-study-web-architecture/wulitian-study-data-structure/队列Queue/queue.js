/**
 * 队列先进先出
 */
class Queue {
    constructor() {
        this.arr = [];
    }
    enqueue(element){
        this.arr.push(element);
    }
    dequeue(){
        this.arr.unshift();
    }
    front(){
        return this.arr[0];
    }
    end(){
        return this.arr[this.arr.length];
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    size(){
        return this.arr.length;
    }
    toString(){
        return this.arr.join('=>')
    }
}

module.exports = Queue
