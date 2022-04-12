/**
 *  存在闭包会形成10个私有作用域所以会依次执行0,1,2,3,4，如果去掉自执行函数会输出10个10
 * @type {number}
 */
for(var i = 0; i<5; i++){
    (function(j){
        setTimeout(function(){
            console.log(j)
        }, 1000)
    })(i)
}