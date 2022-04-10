/**
 *  存在上级作用域的引用形成闭包并缓存当前变量
 * @type {number}
 */
var n = 10
function fn(){
    var n =20
    function f() {
        n++;
        console.log(n)
    }
    return f
}

var x = fn()
x() // 21

