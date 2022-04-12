define(function(require,exports,module){
    let name = 'modules2';
    function getName(){
        console.log(name)
    }
    exports.modules2 = getName
})