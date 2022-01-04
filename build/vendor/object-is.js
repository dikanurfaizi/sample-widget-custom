(window["webpackJsonpsample_widget_custom"] = window["webpackJsonpsample_widget_custom"] || []).push([["vendor/object-is"],{

/***/ "1u+m":
/*!**************************************************!*\
  !*** ./node_modules/object-is/implementation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar numberIsNaN = function (value) {\n\treturn value !== value;\n};\n\nmodule.exports = function is(a, b) {\n\tif (a === 0 && b === 0) {\n\t\treturn 1 / a === 1 / b;\n\t}\n\tif (a === b) {\n\t\treturn true;\n\t}\n\tif (numberIsNaN(a) && numberIsNaN(b)) {\n\t\treturn true;\n\t}\n\treturn false;\n};\n\n\n\n//# sourceURL=webpack://sample-widget-custom/./node_modules/object-is/implementation.js?");

/***/ }),

/***/ "WDQk":
/*!********************************************!*\
  !*** ./node_modules/object-is/polyfill.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"1u+m\");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof Object.is === 'function' ? Object.is : implementation;\n};\n\n\n//# sourceURL=webpack://sample-widget-custom/./node_modules/object-is/polyfill.js?");

/***/ }),

/***/ "bbcx":
/*!*****************************************!*\
  !*** ./node_modules/object-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"82c2\");\nvar callBind = __webpack_require__(/*! call-bind */ \"PrET\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"1u+m\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"WDQk\");\nvar shim = __webpack_require__(/*! ./shim */ \"wVpn\");\n\nvar polyfill = callBind(getPolyfill(), Object);\n\ndefine(polyfill, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = polyfill;\n\n\n//# sourceURL=webpack://sample-widget-custom/./node_modules/object-is/index.js?");

/***/ }),

/***/ "wVpn":
/*!****************************************!*\
  !*** ./node_modules/object-is/shim.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"WDQk\");\nvar define = __webpack_require__(/*! define-properties */ \"82c2\");\n\nmodule.exports = function shimObjectIs() {\n\tvar polyfill = getPolyfill();\n\tdefine(Object, { is: polyfill }, {\n\t\tis: function testObjectIs() {\n\t\t\treturn Object.is !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://sample-widget-custom/./node_modules/object-is/shim.js?");

/***/ })

}]);