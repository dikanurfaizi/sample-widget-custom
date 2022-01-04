(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["sample-widget-custom"] = factory(require("react"));
	else
		root["sample-widget-custom"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_cDcd__) {
return (window["webpackJsonpsample_widget_custom"] = window["webpackJsonpsample_widget_custom"] || []).push([["component-login-sample"],{

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;\n\n//# sourceURL=webpack://sample-widget-custom/external_%22react%22?");

/***/ }),

/***/ "s2At":
/*!************************************************************!*\
  !*** ./src/features/widgets/login-sample/login-sample.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LoginSample = void 0;\r\nvar React = __webpack_require__(/*! react */ \"cDcd\");\r\nvar LoginSample = /** @class */ (function (_super) {\r\n    __extends(LoginSample, _super);\r\n    function LoginSample(props) {\r\n        return _super.call(this, props) || this;\r\n    }\r\n    LoginSample.prototype.render = function () {\r\n        var _a = this.props, children = _a.children, componentId = _a.componentId, translate = _a.translate, props = __rest(_a, [\"children\", \"componentId\", \"translate\"]);\r\n        return React.createElement(\"div\", __assign({}, props), \"LoginSample\");\r\n    };\r\n    return LoginSample;\r\n}(React.Component));\r\nexports.LoginSample = LoginSample;\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/widgets/login-sample/login-sample.tsx?");

/***/ })

},[["s2At","runtime"]]]);
});