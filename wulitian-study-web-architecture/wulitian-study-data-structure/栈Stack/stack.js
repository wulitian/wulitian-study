class stack {
    constructor() {
        this.arr = [];
    }

    push(item) {
        this.arr.push(item);
    }

    shift() {
        this.arr.shift();
    }

    pop() {
        this.arr.pop();
    }

    front() {
        return this.arr[0];
    }

    end() {
        return this.arr[this.arr.length];
    }

    length() {
        return this.arr.length;
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    clear() {
        this.arr = [];
    }
}
