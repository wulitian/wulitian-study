/**
 * 外层函数调用时this指向window，定时器指向的this指向window
 */
var name = 'wulitian';

function fn(){
    console.log(this.name);
}

fn();

setTimeout(function(){
    console.log(this); // window
}, 0);

