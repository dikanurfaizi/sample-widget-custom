(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sample-widget-custom"] = factory();
	else
		root["sample-widget-custom"] = factory();
})(window, function() {
return (window["webpackJsonpsample_widget_custom"] = window["webpackJsonpsample_widget_custom"] || []).push([["reducer-reducers"],{

/***/ "9ZG7":
/*!**********************************************!*\
  !*** ./src/features/reducers/app-reducer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.appReducer = exports.initialState = void 0;\r\nvar app_type_1 = __webpack_require__(/*! ../type/app-type */ \"Cx+m\");\r\nexports.initialState = {};\r\nvar reducer = function (state, action) {\r\n    if (state === void 0) { state = exports.initialState; }\r\n    switch (action.type) {\r\n        case app_type_1.AppActionTypes.SAMPLE: {\r\n            return __assign(__assign({}, state), { sampledata: 'sample data' });\r\n        }\r\n        default: {\r\n            return state;\r\n        }\r\n    }\r\n};\r\nexports.appReducer = reducer;\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/reducers/app-reducer.ts?");

/***/ }),

/***/ "JAuQ":
/*!*********************************************************!*\
  !*** ./src/features/reducers/sample-account-reducer.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.sampleAccountReducer = void 0;\r\nvar type_1 = __webpack_require__(/*! ../type */ \"h88k\");\r\nvar initialState = {\r\n    savingsAccountListDetails: [],\r\n    savingsAccountListDetailsStatus: type_1.ApiRequestStatus.IDLE\r\n};\r\nvar sampleAccountReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case type_1.AccountsTypes.SET_SAVINGS_ACCOUNT_LIST_DETAILS:\r\n            return __assign(__assign({}, state), { savingsAccountListDetails: action.payload });\r\n        case type_1.AccountsTypes.SET_SAVINGS_ACCOUNT_LIST_DETAILS_STATUS:\r\n            return __assign(__assign({}, state), { savingsAccountListDetailsStatus: action.payload });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.sampleAccountReducer = sampleAccountReducer;\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/reducers/sample-account-reducer.ts?");

/***/ }),

/***/ "L/Qm":
/*!******************************************************!*\
  !*** ./src/features/reducers/sample-user-reducer.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.sampleUserReducer = void 0;\r\nvar type_1 = __webpack_require__(/*! ../type */ \"h88k\");\r\nvar initialState = {};\r\nvar sampleUserReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case type_1.UserDetailsTypes.SET_USER_DETAILS:\r\n            return __assign(__assign({}, state), { userDetails: action.payload });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.sampleUserReducer = sampleUserReducer;\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/reducers/sample-user-reducer.ts?");

/***/ }),

/***/ "MxiS":
/*!****************************************!*\
  !*** ./src/features/reducers/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./app-reducer */ \"9ZG7\"), exports);\r\n__exportStar(__webpack_require__(/*! ./authentication-reducer */ \"mW1W\"), exports);\r\n__exportStar(__webpack_require__(/*! ./sample-account-reducer */ \"JAuQ\"), exports);\r\n__exportStar(__webpack_require__(/*! ./sample-user-reducer */ \"L/Qm\"), exports);\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/reducers/index.ts?");

/***/ }),

/***/ "mW1W":
/*!*********************************************************!*\
  !*** ./src/features/reducers/authentication-reducer.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.authenticationReducer = void 0;\r\nvar type_1 = __webpack_require__(/*! ../type */ \"h88k\");\r\nvar initialState = {\r\n    isAuthenticated: false,\r\n    userInfo: {\r\n        userGroup: ''\r\n    }\r\n};\r\nvar authenticationReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case type_1.AuthenticationTypes.SET_AUTHENTICATION_STATUS:\r\n            return __assign(__assign({}, state), { isAuthenticated: action.payload });\r\n        case type_1.AuthenticationTypes.SET_USER_INFO:\r\n            return __assign(__assign({}, state), { userInfo: __assign(__assign({}, state.userInfo), action.payload) });\r\n        default: {\r\n            return state;\r\n        }\r\n    }\r\n};\r\nexports.authenticationReducer = authenticationReducer;\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/reducers/authentication-reducer.ts?");

/***/ })

},[["MxiS","runtime","action-action~component-savings-account~reducer-reducers~saga-sagas"]]]);
});