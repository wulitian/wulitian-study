"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ 10:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index2.js */ 46);


function getComponent() {
    const element = document.createElement('div');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    return __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 784, 23))
        .then(({default: _}) => {
            const element = document.createElement('div');

            element.innerHTML = _.join(['Hello', 'webpack'], ' ');

            return element;
        })
        .catch((error) => 'An error occurred while loading the component');
}
console.log(getComponent())
getComponent().then((component) => {
    document.body.appendChild(component);
});
(0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.fun)();

/***/ }),

/***/ 46:
/*!*******************!*\
  !*** ./index2.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fun": () => (/* binding */ fun)
/* harmony export */ });
function fun() {

    console.log("11111")

}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(10));
/******/ }
]);
//# sourceMappingURL=app.9ae4da2ba5fd53fff657.bundle.js.map