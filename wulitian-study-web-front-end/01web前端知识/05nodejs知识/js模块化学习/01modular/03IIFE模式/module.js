// IIFE模式（闭包）
(function(window){
    var msg = 'modele';
    function foo(){
        console.log('foo()',msg);
    }
    window.module = {foo}
})(window)

   