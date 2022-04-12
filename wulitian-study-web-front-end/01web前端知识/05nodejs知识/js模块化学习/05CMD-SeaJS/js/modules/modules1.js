define(function(require,exports,module){
    let name = 'modules1';
    function getName(){
        console.log(name)
    }
    module.exports = {getName}
})