"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function component() {
  var element = document.createElement('div'); // lodash（目前通过一个 script 引入）对于执行这一行是必需的

  element.innerHTML = _lodash.default.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.append(component());