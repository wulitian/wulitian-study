define(function(){
    let name = 'module1';
    function getName(){
        console.log(name)
        return name;
    }
    return {getName}
})