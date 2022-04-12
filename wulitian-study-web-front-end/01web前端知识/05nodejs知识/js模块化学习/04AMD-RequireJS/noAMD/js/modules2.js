(function(window, module1){
    function getName(){
        console.log(module1.getName());
    }
    window.module2 = {getName}
})(window, module1)