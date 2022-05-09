
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash')) :
  typeof define === 'function' && define.amd ? define(['lodash'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.wulitian = factory(global.lodash));
})(this, (function (lodash) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var lodash__default = /*#__PURE__*/_interopDefaultLegacy(lodash);

  function fn() {
    var a = [1, 2, 3];
    var b = [4, 5, 6];
    return [].concat(a, b);
  }

  console.log(lodash__default["default"].VERSION);
  console.log(fn);
  var src = {};

  return src;

}));
//# sourceMappingURL=index.js.map
