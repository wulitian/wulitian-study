define(['wulitian-study-web-front-end/01web前端知识/nodejs知识/js模块化学习/04AMD-RequireJS/RequireJS/js/modules/modules1','jquery'], function(modules1, $) {
    function getName(){
        console.log(modules1.getName())
    }
    $('body').css('background','red')
    return {getName}
});