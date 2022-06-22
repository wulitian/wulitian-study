define(function(require,exports,module){
    let name = 'modules4';
    // 同步引入
    let modules2 = require('./modules2')
    modules2.modules2();
    // 异步引入
    require.async('./modules3',function(modules){
        modules.modules3.getName()
    })
    function getName(){
        console.log(name)
    }
    exports.modules4 = {getName}
})