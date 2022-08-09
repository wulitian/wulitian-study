// IIFE模式（闭包）
(function(window){
    let msg = 'model';
    function foo(){
        console.log('foo()',msg);
    }
    window.module = {foo}
})(window)

   