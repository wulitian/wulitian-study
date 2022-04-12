(function(window){
    let name = 'module1';
    function getName(){
        console.log(name)
        return name;
    }
    window.module1 = {getName}
})(window)