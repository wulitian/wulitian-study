define(['modules1','jquery'], function(modules1,$) {
    function getName(){
        console.log(modules1.getName())
    }
    $('body').css('background','red')
    return {getName}
});