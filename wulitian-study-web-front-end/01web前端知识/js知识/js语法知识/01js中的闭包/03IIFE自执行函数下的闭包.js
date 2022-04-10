/**
 *  var 声明变量不存在作用域使用IIFE包裹形成闭包缓存私有作用域结果0,1,2
 * @type {number}
 */
var arr = [];

for (var i = 0; i < 5; i++) {
    (function(j){
        setTimeout( arr[j] = function () {
            console.log(j);
        }, 0)
    })(i)
}

