/**
 * call,apply,bind可以改变this的指向通过第一个参数。默认不传相当于window非node环境下。
 */

var name = 'wulitian';

const obj = {
    name: 'WULITIAN',
    fn: function () {
        console.log(this.name)
    }
}

const obj2 = {
    name: 'WULITIAN2'
}

obj.fn();
obj.fn.call();
obj.fn.call(obj2);
obj.fn.apply();
obj.fn.apply(obj2);
obj.fn.bind()();
obj.fn.bind(obj2)();