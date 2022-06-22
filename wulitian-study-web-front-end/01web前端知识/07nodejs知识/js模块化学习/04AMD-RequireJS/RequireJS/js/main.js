(function(window){
    requirejs.config({
        baseUrl:'js',
        paths: {
            modules1:'modules/modules1',
            modules2:'modules/modules2',
            jquery:'libs/jquery-2.1.1.min'
        }
    })
    requirejs(['modules2'],function(modules2){
        modules2.getName();
    })
})(window)