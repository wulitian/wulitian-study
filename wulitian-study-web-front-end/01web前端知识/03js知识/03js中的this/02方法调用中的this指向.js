/**
 * 方法调用this会指向当前对象
 */
var name = 'wulitian';

const test = function fn() {
    console.log(this.name)
}

const obj = {
    name: "WULITIAN",
    test: test
}
obj.test();
