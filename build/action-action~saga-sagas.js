(window["webpackJsonpsample_widget_custom"] = window["webpackJsonpsample_widget_custom"] || []).push([["action-action~saga-sagas"],{

/***/ "IDcJ":
/*!**********************************************!*\
  !*** ./src/features/action/sample-action.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.sampleAction = void 0;\r\nvar typesafe_actions_1 = __webpack_require__(/*! typesafe-actions */ \"i0Yl\");\r\nvar app_type_1 = __webpack_require__(/*! ../type/app-type */ \"Cx+m\");\r\nexports.sampleAction = function () { return typesafe_actions_1.action(app_type_1.AppActionTypes.SAMPLE); };\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/action/sample-action.ts?");

/***/ }),

/***/ "Oluw":
/*!**************************************!*\
  !*** ./src/features/action/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./authentication-action */ \"kDkZ\"), exports);\r\n__exportStar(__webpack_require__(/*! ./sample-account-action */ \"hgz/\"), exports);\r\n__exportStar(__webpack_require__(/*! ./sample-action */ \"IDcJ\"), exports);\r\n__exportStar(__webpack_require__(/*! ./sample-user-action */ \"bH30\"), exports);\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/action/index.ts?");

/***/ }),

/***/ "bH30":
/*!***************************************************!*\
  !*** ./src/features/action/sample-user-action.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setSampleUserDetailsAction = exports.sampleUserDetailsAction = void 0;\r\nvar typesafe_actions_1 = __webpack_require__(/*! typesafe-actions */ \"i0Yl\");\r\nvar sample_user_type_1 = __webpack_require__(/*! ../type/sample-user-type */ \"uEIh\");\r\nexports.sampleUserDetailsAction = function () { return typesafe_actions_1.action(sample_user_type_1.UserDetailsTypes.USER_DETAILS, {}); };\r\nexports.setSampleUserDetailsAction = function (customerDetails) {\r\n    return typesafe_actions_1.action(sample_user_type_1.UserDetailsTypes.SET_USER_DETAILS, customerDetails);\r\n};\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/action/sample-user-action.ts?");

/***/ }),

/***/ "hgz/":
/*!******************************************************!*\
  !*** ./src/features/action/sample-account-action.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setSavingsAccountListDetailsStatus = exports.setSavingAccountListDetails = exports.fetchSavingsAccountListDetailsAction = void 0;\r\nvar typesafe_actions_1 = __webpack_require__(/*! typesafe-actions */ \"i0Yl\");\r\nvar sample_account_type_1 = __webpack_require__(/*! ../type/sample-account-type */ \"iu73\");\r\nexports.fetchSavingsAccountListDetailsAction = function (request) {\r\n    return typesafe_actions_1.action(sample_account_type_1.AccountsTypes.FETCH_SAVINGS_ACOUNT_DETAILS, request);\r\n};\r\nexports.setSavingAccountListDetails = function (request) {\r\n    return typesafe_actions_1.action(sample_account_type_1.AccountsTypes.SET_SAVINGS_ACCOUNT_LIST_DETAILS, request);\r\n};\r\nexports.setSavingsAccountListDetailsStatus = function (request) {\r\n    return typesafe_actions_1.action(sample_account_type_1.AccountsTypes.SET_SAVINGS_ACCOUNT_LIST_DETAILS_STATUS, request);\r\n};\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/action/sample-account-action.ts?");

/***/ }),

/***/ "kDkZ":
/*!******************************************************!*\
  !*** ./src/features/action/authentication-action.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setUserInfoAction = exports.setAuthenticationStatusAction = void 0;\r\nvar typesafe_actions_1 = __webpack_require__(/*! typesafe-actions */ \"i0Yl\");\r\nvar type_1 = __webpack_require__(/*! ../type */ \"h88k\");\r\nexports.setAuthenticationStatusAction = function (status) { return typesafe_actions_1.action(type_1.AuthenticationTypes.SET_AUTHENTICATION_STATUS, status); };\r\nexports.setUserInfoAction = function (user) { return typesafe_actions_1.action(type_1.AuthenticationTypes.SET_USER_INFO, user); };\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/action/authentication-action.ts?");

/***/ })

}]);