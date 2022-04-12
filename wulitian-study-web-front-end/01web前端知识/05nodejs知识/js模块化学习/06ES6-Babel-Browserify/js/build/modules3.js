'use strict';

define(function (require, exports, module) {
    var name = 'modules3';
    function getName() {
        console.log(name);
    }
    exports.modules3 = { getName: getName };
});