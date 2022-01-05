// IIFE模式（闭包）
(function(window,jQuery){
    let msg = 'wulitian';
    function foo(){
        console.log(msg);
    }
    $("body").css("background",'red')
    window.module = foo
})(window,jQuery)