(window["webpackJsonpsample_widget_custom"] = window["webpackJsonpsample_widget_custom"] || []).push([["vendor/is-regex"],{

/***/ "2Nju":
/*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"VF6F\");\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"B6Q+\")();\nvar has;\nvar $exec;\nvar isRegexMarker;\nvar badStringifier;\n\nif (hasToStringTag) {\n\thas = callBound('Object.prototype.hasOwnProperty');\n\t$exec = callBound('RegExp.prototype.exec');\n\tisRegexMarker = {};\n\n\tvar throwRegexMarker = function () {\n\t\tthrow isRegexMarker;\n\t};\n\tbadStringifier = {\n\t\ttoString: throwRegexMarker,\n\t\tvalueOf: throwRegexMarker\n\t};\n\n\tif (typeof Symbol.toPrimitive === 'symbol') {\n\t\tbadStringifier[Symbol.toPrimitive] = throwRegexMarker;\n\t}\n}\n\nvar $toString = callBound('Object.prototype.toString');\nvar gOPD = Object.getOwnPropertyDescriptor;\nvar regexClass = '[object RegExp]';\n\nmodule.exports = hasToStringTag\n\t// eslint-disable-next-line consistent-return\n\t? function isRegex(value) {\n\t\tif (!value || typeof value !== 'object') {\n\t\t\treturn false;\n\t\t}\n\n\t\tvar descriptor = gOPD(value, 'lastIndex');\n\t\tvar hasLastIndexDataProperty = descriptor && has(descriptor, 'value');\n\t\tif (!hasLastIndexDataProperty) {\n\t\t\treturn false;\n\t\t}\n\n\t\ttry {\n\t\t\t$exec(value, badStringifier);\n\t\t} catch (e) {\n\t\t\treturn e === isRegexMarker;\n\t\t}\n\t}\n\t: function isRegex(value) {\n\t\t// In older browsers, typeof regex incorrectly returns 'function'\n\t\tif (!value || (typeof value !== 'object' && typeof value !== 'function')) {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn $toString(value) === regexClass;\n\t};\n\n\n//# sourceURL=webpack://sample-widget-custom/./node_modules/is-regex/index.js?");

/***/ })

}]);