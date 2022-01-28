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
return (window["webpackJsonpsample_widget_custom"] = window["webpackJsonpsample_widget_custom"] || []).push([["component-user-profile"],{

/***/ "aEqC":
/*!************************************************************!*\
  !*** ./src/features/widgets/user-profile/user-profile.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserProfile = void 0;\r\nvar React = __webpack_require__(/*! react */ \"cDcd\");\r\nvar UserProfile = /** @class */ (function (_super) {\r\n    __extends(UserProfile, _super);\r\n    function UserProfile(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.handleProfileImageChange = function () {\r\n            _this.props.onProfileImageClick && _this.props.onProfileImageClick();\r\n        };\r\n        return _this;\r\n    }\r\n    UserProfile.prototype.componentDidMount = function () {\r\n        var _a, _b;\r\n        console.log(\"Component Did Mount is Appear\");\r\n        (_b = (_a = this.props).sampleUserDetailsAction) === null || _b === void 0 ? void 0 : _b.call(_a);\r\n    };\r\n    UserProfile.prototype.render = function () {\r\n        var _a, _b, _c, _d, _e, _f, _g;\r\n        console.log(\"The Render\", this.props.userDetails);\r\n        var _h = this.props, className = _h.className, userDetails = _h.userDetails;\r\n        var fullName = userDetails === null || userDetails === void 0 ? void 0 : userDetails.fullName;\r\n        var birthDate = (_a = userDetails === null || userDetails === void 0 ? void 0 : userDetails.birthDate) === null || _a === void 0 ? void 0 : _a.day;\r\n        var contactNumber = (_b = userDetails === null || userDetails === void 0 ? void 0 : userDetails.contactNumbers) === null || _b === void 0 ? void 0 : _b.mobile;\r\n        var addressLine1 = (_d = (_c = userDetails === null || userDetails === void 0 ? void 0 : userDetails.postalContact) === null || _c === void 0 ? void 0 : _c.business) === null || _d === void 0 ? void 0 : _d.line1;\r\n        var postalCode = (_f = (_e = userDetails === null || userDetails === void 0 ? void 0 : userDetails.postalContact) === null || _e === void 0 ? void 0 : _e.business) === null || _f === void 0 ? void 0 : _f.postalCode;\r\n        var email = (_g = userDetails === null || userDetails === void 0 ? void 0 : userDetails.email) === null || _g === void 0 ? void 0 : _g.person;\r\n        var gender = userDetails === null || userDetails === void 0 ? void 0 : userDetails.gender;\r\n        return React.createElement(\"div\", { className: className + \" ph3\" },\r\n            React.createElement(\"div\", { className: \"flex flex-row w-100\" },\r\n                this.props.isProfilPhoto && React.createElement(this.props.imageInput, { onClick: this.handleProfileImageChange }),\r\n                this.props.isProfilName && React.createElement(this.props.name, { text: fullName ? fullName : 'Not Available' })),\r\n            React.createElement(\"div\", { className: \"flex flex-column w-100\" }, this.props.isNameConfig && React.createElement(\"div\", { className: \"flex flex-row\" },\r\n                React.createElement(this.props.userName, null),\r\n                React.createElement(this.props.nameValue, { text: fullName ? fullName : 'Not Available' }))),\r\n            React.createElement(\"div\", { className: \"flex flex-column w-100\" }, this.props.isDobConfig && React.createElement(\"div\", { className: \"flex flex-row\" },\r\n                React.createElement(this.props.dob, null),\r\n                React.createElement(this.props.dobValue, { text: birthDate ? birthDate : 'Not Available' }))),\r\n            React.createElement(\"div\", { className: \"flex flex-column w-100\" }, this.props.isPhoneNoConfig && React.createElement(\"div\", { className: \"flex flex-row\" },\r\n                React.createElement(this.props.phone, null),\r\n                React.createElement(this.props.phoneValue, { text: contactNumber ? contactNumber : 'Not Available' }))),\r\n            this.props.isAddressConfig && React.createElement(\"div\", { className: \"flex flex-column w-100\" },\r\n                React.createElement(\"div\", { className: \"flex flex-row\" },\r\n                    React.createElement(this.props.address, null),\r\n                    React.createElement(this.props.addressLine1, { text: addressLine1 ? addressLine1 : 'Not Available' })),\r\n                React.createElement(\"div\", { className: 'flex flex-row' },\r\n                    React.createElement(this.props.address2, null),\r\n                    React.createElement(this.props.postalCode, { text: postalCode ? postalCode : 'Not Available' }))),\r\n            React.createElement(\"div\", { className: \"flex flex-column w-100\" }, this.props.isEmailConfig && React.createElement(\"div\", { className: \"flex flex-row\" },\r\n                React.createElement(this.props.email, null),\r\n                React.createElement(this.props.emailValue, { text: email ? email : 'Not Available' }))),\r\n            React.createElement(\"div\", { className: \"flex flex-column w-100\" }, this.props.isGenderConfig && React.createElement(\"div\", { className: \"flex flex-row\" },\r\n                React.createElement(this.props.gender, null),\r\n                React.createElement(this.props.genderValue, { text: gender ? gender : 'Not Available' }))));\r\n    };\r\n    return UserProfile;\r\n}(React.Component));\r\nexports.UserProfile = UserProfile;\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/widgets/user-profile/user-profile.tsx?");

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;\n\n//# sourceURL=webpack://sample-widget-custom/external_%22react%22?");

/***/ })

},[["aEqC","runtime"]]]);
});