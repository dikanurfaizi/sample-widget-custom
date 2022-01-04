(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["sample-widget-custom"] = factory(require("react"), require("react-dom"));
	else
		root["sample-widget-custom"] = factory(root["react"], root["react-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__) {
return (window["webpackJsonpsample_widget_custom"] = window["webpackJsonpsample_widget_custom"] || []).push([["component-savings-account-panel"],{

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;\n\n//# sourceURL=webpack://sample-widget-custom/external_%22react%22?");

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;\n\n//# sourceURL=webpack://sample-widget-custom/external_%22react-dom%22?");

/***/ }),

/***/ "i55r":
/*!************************************************************************!*\
  !*** ./src/features/widgets/savings-account/savings-account-panel.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SavingsAccountPanel = void 0;\r\nvar React = __webpack_require__(/*! react */ \"cDcd\");\r\nvar designer_widgets_1 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar designer_widgets_2 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar designer_widgets_3 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar designer_widgets_4 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar SavingsAccountPanel = /** @class */ (function (_super) {\r\n    __extends(SavingsAccountPanel, _super);\r\n    function SavingsAccountPanel(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.changeComponentName = function (name) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            _this.props.onMetaChange(path + \"/\" + id, { name: name });\r\n        };\r\n        _this.changeFont = function (font) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            _this.props.onStyleChange(path + \"/\" + id, { font: font });\r\n        };\r\n        _this.handleBalanceChange = function (selected) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            _this.props.onPropChange(path + \"/\" + id, { isBalanceConfig: selected });\r\n        };\r\n        _this.handleSearchChange = function (selected) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            _this.props.onPropChange(path + \"/\" + id, { isSearchConfig: selected });\r\n        };\r\n        _this.renderPopupContent = function () {\r\n            var _a, _b;\r\n            var platforms;\r\n            var items = (_b = (_a = _this.props.component) === null || _a === void 0 ? void 0 : _a.supportedDevices) === null || _b === void 0 ? void 0 : _b.filter(function (el) { var _a; return ((_a = el === null || el === void 0 ? void 0 : el.supportedPlatforms) === null || _a === void 0 ? void 0 : _a.length) > 0; });\r\n            platforms = items === null || items === void 0 ? void 0 : items.map(function (item, index) {\r\n                var _a;\r\n                return (React.createElement(\"div\", { className: index !== (items.length - 1) ?\r\n                        \"flex pt2 bo0 b--solid bob1 primary-s3-bb \" : \"flex pt2\" },\r\n                    React.createElement(\"div\", { className: \"flex flex-row pb2\" },\r\n                        React.createElement(\"i\", { className: _this.getDeviceIcon(item) }),\r\n                        item.deviceType === \"Desktop\" ?\r\n                            React.createElement(\"div\", { className: \"f7 pt2\" }, item.deviceType)\r\n                            : React.createElement(\"div\", { className: \"f7 pt2 pr1 \" }, item.deviceType),\r\n                        React.createElement(\"span\", { className: \"pl3 pt2\" }, \":\")), (_a = item.supportedPlatforms) === null || _a === void 0 ? void 0 :\r\n                    _a.map(function (platform) {\r\n                        return (React.createElement(\"div\", { className: \"flex flex-row pl2 pb2\" },\r\n                            React.createElement(\"i\", { className: _this.getPlatformIcon(platform) }),\r\n                            React.createElement(\"div\", { className: \"f7 pt2 pr2\" }, platform)));\r\n                    })));\r\n            });\r\n            return (React.createElement(\"div\", { className: \"nb3\" },\r\n                React.createElement(\"div\", { className: \"f7 pt2 pb2\" }, \"This widget is compatible with:\"),\r\n                platforms));\r\n        };\r\n        _this.getDeviceIcon = function (item) {\r\n            var icon;\r\n            switch (item === null || item === void 0 ? void 0 : item.deviceType) {\r\n                case 'Mobile':\r\n                    icon = 'ion-ios-phone-portrait f4 pt2 ph3 flex items-start';\r\n                    break;\r\n                case 'Tablet':\r\n                    icon = 'ion-ios-tablet-portrait f4 pt2 ph3 flex items-start';\r\n                    break;\r\n                default:\r\n                    icon = 'ion-ios-laptop f3 ph2';\r\n            }\r\n            return icon;\r\n        };\r\n        _this.getPlatformIcon = function (platfroms) {\r\n            var icon;\r\n            switch (platfroms) {\r\n                case 'Android':\r\n                    icon = 'ion-logo-android f4 pr2 pl3';\r\n                    break;\r\n                case 'iOS':\r\n                    icon = 'ion-logo-apple f4 pr2 pl3';\r\n                    break;\r\n                default:\r\n                    icon = 'pl3';\r\n            }\r\n            return icon;\r\n        };\r\n        return _this;\r\n    }\r\n    SavingsAccountPanel.prototype.getFontOptions = function () {\r\n        var options = [{ value: '', text: 'None', image: '' }], fonts = this.props.fonts || [];\r\n        fonts.map(function (item) {\r\n            options.push({\r\n                value: item.class,\r\n                text: item.name,\r\n                image: ''\r\n            });\r\n        });\r\n        return options;\r\n    };\r\n    SavingsAccountPanel.prototype.showPopover = function () {\r\n        this.deviceCompatibiltyPopover.showPopover();\r\n    };\r\n    SavingsAccountPanel.prototype.renderDesignPanel = function () {\r\n        var _this = this;\r\n        return (React.createElement(designer_widgets_2.PanelContent, null,\r\n            React.createElement(designer_widgets_3.PanelControl, null,\r\n                React.createElement(designer_widgets_4.TextInput, { label: \"Name\", value: this.props.component.name, onBlur: this.changeComponentName })),\r\n            React.createElement(\"div\", { className: \"flex flex-row\" },\r\n                React.createElement(\"div\", { className: \"flex-row w-70\" },\r\n                    React.createElement(designer_widgets_3.PanelControl, { title: \"Device Compatibility\" })),\r\n                React.createElement(designer_widgets_3.PopoverWidget, { className: \"\", titleIcon: \"ion-md-information-circle\", isConfirmable: false, messageTitle: \"Device Compatibility\", ref: function (el) { return _this.deviceCompatibiltyPopover = el; }, position: \"right\", message: this.renderPopupContent() },\r\n                    React.createElement(\"div\", { className: \"flex flex-row w-30 mr2\" },\r\n                        React.createElement(\"div\", { className: \"\" },\r\n                            React.createElement(\"div\", { className: \"flex flex-row pt3 pl4\" },\r\n                                React.createElement(\"span\", { className: \"bp3-icon-info-sign flex mr1 pointer accent-text\" },\r\n                                    React.createElement(\"div\", { className: \"pl2\", onClick: function () { return _this.showPopover(); } }, \"Info\"))))))),\r\n            React.createElement(designer_widgets_3.PanelControl, { title: \"Bussiness Configurations\" },\r\n                React.createElement(designer_widgets_4.ToggleButton, { onChange: this.handleBalanceChange, text: \"Balance\" }),\r\n                \"selected=\",\r\n                this.props.component.props.isBalanceConfig),\r\n            React.createElement(designer_widgets_3.PanelControl, { title: \"UI Configurations\" },\r\n                React.createElement(designer_widgets_4.ToggleButton, { onChange: this.handleSearchChange, text: \"Search\" }),\r\n                \"selected=\",\r\n                this.props.component.props.isSearchConfig),\r\n            React.createElement(designer_widgets_3.PanelControl, { title: \"Font\" },\r\n                React.createElement(designer_widgets_4.DropDown, { value: this.props.component.style.font || '', options: this.getFontOptions(), onChange: this.changeFont }))));\r\n    };\r\n    SavingsAccountPanel.prototype.render = function () {\r\n        return (React.createElement(designer_widgets_1.Panel, null, this.renderDesignPanel()));\r\n    };\r\n    return SavingsAccountPanel;\r\n}(React.Component));\r\nexports.SavingsAccountPanel = SavingsAccountPanel;\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/widgets/savings-account/savings-account-panel.tsx?");

/***/ })

},[["i55r","runtime","vendor/blueprintjs","vendor/designer-widgets","vendor/popper.js","vendor/prop-types","vendor/resize-observer-polyfill","vendor/dom4","vendor/get-intrinsic","vendor/tslib","vendor/react-lifecycles-compat","vendor/process","vendor/object-keys","vendor/deep-equal","vendor/babel","vendor/regexp.prototype.flags","vendor/has-symbols","vendor/object-assign","vendor/warning","vendor/call-bind","vendor/define-properties","vendor/function-bind","vendor/dom-helpers","vendor/is-regex","vendor/classnames","vendor/object-is","vendor/is-arguments","vendor/is-date-object","vendor/webpack","vendor/has-tostringtag","vendor/gud","vendor/has"]]]);
});