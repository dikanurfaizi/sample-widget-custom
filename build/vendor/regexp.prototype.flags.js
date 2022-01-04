(window["webpackJsonpsample_widget_custom"] = window["webpackJsonpsample_widget_custom"] || []).push([["vendor/regexp.prototype.flags"],{

/***/ "5xAX":
/*!******************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"82c2\");\nvar callBind = __webpack_require__(/*! call-bind */ \"PrET\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"VwiP\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"V+xs\");\nvar shim = __webpack_require__(/*! ./shim */ \"HH6Z\");\n\nvar flagsBound = callBind(implementation);\n\ndefine(flagsBound, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = flagsBound;\n\n\n//# sourceURL=webpack://sample-widget-custom/./node_modules/regexp.prototype.flags/index.js?");

/***/ }),

/***/ "HH6Z":
/*!*****************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/shim.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar supportsDescriptors = __webpack_require__(/*! define-properties */ \"82c2\").supportsDescriptors;\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"V+xs\");\nvar gOPD = Object.getOwnPropertyDescriptor;\nvar defineProperty = Object.defineProperty;\nvar TypeErr = TypeError;\nvar getProto = Object.getPrototypeOf;\nvar regex = /a/;\n\nmodule.exports = function shimFlags() {\n\tif (!supportsDescriptors || !getProto) {\n\t\tthrow new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');\n\t}\n\tvar polyfill = getPolyfill();\n\tvar proto = getProto(regex);\n\tvar descriptor = gOPD(proto, 'flags');\n\tif (!descriptor || descriptor.get !== polyfill) {\n\t\tdefineProperty(proto, 'flags', {\n\t\t\tconfigurable: true,\n\t\t\tenumerable: false,\n\t\t\tget: polyfill\n\t\t});\n\t}\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://sample-widget-custom/./node_modules/regexp.prototype.flags/shim.js?");

/***/ }),

/***/ "V+xs":
/*!*********************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/polyfill.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"VwiP\");\n\nvar supportsDescriptors = __webpack_require__(/*! define-properties */ \"82c2\").supportsDescriptors;\nvar $gOPD = Object.getOwnPropertyDescriptor;\nvar $TypeError = TypeError;\n\nmodule.exports = function getPolyfill() {\n\tif (!supportsDescriptors) {\n\t\tthrow new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');\n\t}\n\tif ((/a/mig).flags === 'gim') {\n\t\tvar descriptor = $gOPD(RegExp.prototype, 'flags');\n\t\tif (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {\n\t\t\treturn descriptor.get;\n\t\t}\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://sample-widget-custom/./node_modules/regexp.prototype.flags/polyfill.js?");

/***/ }),

/***/ "VwiP":
/*!***************************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/implementation.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $Object = Object;\nvar $TypeError = TypeError;\n\nmodule.exports = function flags() {\n\tif (this != null && this !== $Object(this)) {\n\t\tthrow new $TypeError('RegExp.prototype.flags getter called on non-object');\n\t}\n\tvar result = '';\n\tif (this.global) {\n\t\tresult += 'g';\n\t}\n\tif (this.ignoreCase) {\n\t\tresult += 'i';\n\t}\n\tif (this.multiline) {\n\t\tresult += 'm';\n\t}\n\tif (this.dotAll) {\n\t\tresult += 's';\n\t}\n\tif (this.unicode) {\n\t\tresult += 'u';\n\t}\n\tif (this.sticky) {\n\t\tresult += 'y';\n\t}\n\treturn result;\n};\n\n\n//# sourceURL=webpack://sample-widget-custom/./node_modules/regexp.prototype.flags/implementation.js?");

/***/ })

}]);