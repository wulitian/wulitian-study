"use strict";

var _modules = require("./modules1");

var _modules2 = require("./modules2");

var _modules3 = _interopRequireDefault(_modules2);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)("body").css('background', 'red');

(0, _modules.foo)();
(0, _modules2.foo2)();
(0, _modules3.default)();