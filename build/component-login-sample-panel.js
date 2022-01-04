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
return (window["webpackJsonpsample_widget_custom"] = window["webpackJsonpsample_widget_custom"] || []).push([["component-login-sample-panel"],{

/***/ "SRmm":
/*!******************************************************************!*\
  !*** ./src/features/widgets/login-sample/login-sample-panel.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LoginSamplePanel = void 0;\r\nvar React = __webpack_require__(/*! react */ \"cDcd\");\r\nvar designer_widgets_1 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar designer_widgets_2 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar designer_widgets_3 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar designer_widgets_4 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar designer_widgets_5 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar designer_widgets_6 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar designer_widgets_7 = __webpack_require__(/*! designer-widgets */ \"Hszm\");\r\nvar LoginSamplePanel = /** @class */ (function (_super) {\r\n    __extends(LoginSamplePanel, _super);\r\n    function LoginSamplePanel(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.changeFont = function (font) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            _this.props.onStyleChange(path + \"/\" + id, { font: font });\r\n        };\r\n        _this.changeFontSize = function (fontSize) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            _this.props.onStyleChange(path + \"/\" + id, { fontSize: 'f' + _this.getFontSize(fontSize) });\r\n        };\r\n        _this.changeColor = function (color) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            _this.props.onStyleChange(path + \"/\" + id, { backgroundColor: color + \"-bg\" });\r\n        };\r\n        _this.changeTextColor = function (color) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            _this.props.onStyleChange(path + \"/\" + id, { color: color + \"-text\" });\r\n        };\r\n        _this.changeBorderColor = function (color) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            var style = {\r\n                borderColor: color ? color + \"-b\" : '',\r\n                border: color ? \"ba\" : '',\r\n                borderWidth: color ? \"\" : 'bw0'\r\n            };\r\n            _this.props.onStyleChange(path + \"/\" + id, style);\r\n        };\r\n        _this.changeBorderRadius = function (borderRadius) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            _this.props.onStyleChange(path + \"/\" + id, { borderRadius: 'br' + borderRadius });\r\n        };\r\n        _this.changeComponentName = function (name) {\r\n            var _a = _this.props.selection[0], path = _a.path, id = _a.id;\r\n            _this.props.onMetaChange(path + \"/\" + id, { name: name });\r\n        };\r\n        _this.renderPopupContent = function () {\r\n            var _a, _b;\r\n            var platforms;\r\n            var items = (_b = (_a = _this.props.component) === null || _a === void 0 ? void 0 : _a.supportedDevices) === null || _b === void 0 ? void 0 : _b.filter(function (el) { var _a; return ((_a = el === null || el === void 0 ? void 0 : el.supportedPlatforms) === null || _a === void 0 ? void 0 : _a.length) > 0; });\r\n            platforms = items === null || items === void 0 ? void 0 : items.map(function (item, index) {\r\n                var _a;\r\n                return (React.createElement(\"div\", { className: index !== (items.length - 1) ?\r\n                        \"flex pt2 bo0 b--solid bob1 primary-s3-bb \" : \"flex pt2\" },\r\n                    React.createElement(\"div\", { className: \"flex flex-row pb2\" },\r\n                        React.createElement(\"i\", { className: _this.getDeviceIcon(item) }),\r\n                        item.deviceType === \"Desktop\" ?\r\n                            React.createElement(\"div\", { className: \"f7 pt2\" }, item.deviceType)\r\n                            : React.createElement(\"div\", { className: \"f7 pt2 pr1 \" }, item.deviceType),\r\n                        React.createElement(\"span\", { className: \"pl3 pt2\" }, \":\")), (_a = item.supportedPlatforms) === null || _a === void 0 ? void 0 :\r\n                    _a.map(function (platform) {\r\n                        return (React.createElement(\"div\", { className: \"flex flex-row pl2 pb2\" },\r\n                            React.createElement(\"i\", { className: _this.getPlatformIcon(platform) }),\r\n                            React.createElement(\"div\", { className: \"f7 pt2 pr2\" }, platform)));\r\n                    })));\r\n            });\r\n            return (React.createElement(\"div\", { className: \"nb3\" },\r\n                React.createElement(\"div\", { className: \"f7 pt2 pb2\" }, \"This widget is compatible with:\"),\r\n                platforms));\r\n        };\r\n        _this.getDeviceIcon = function (item) {\r\n            var icon;\r\n            switch (item === null || item === void 0 ? void 0 : item.deviceType) {\r\n                case 'Mobile':\r\n                    icon = 'ion-ios-phone-portrait f4 pt2 ph3 flex items-start';\r\n                    break;\r\n                case 'Tablet':\r\n                    icon = 'ion-ios-tablet-portrait f4 pt2 ph3 flex items-start';\r\n                    break;\r\n                default:\r\n                    icon = 'ion-ios-laptop f3 ph2';\r\n            }\r\n            return icon;\r\n        };\r\n        _this.getPlatformIcon = function (platfroms) {\r\n            var icon;\r\n            switch (platfroms) {\r\n                case 'Android':\r\n                    icon = 'ion-logo-android f4 pr2 pl3';\r\n                    break;\r\n                case 'iOS':\r\n                    icon = 'ion-logo-apple f4 pr2 pl3';\r\n                    break;\r\n                default:\r\n                    icon = 'pl3';\r\n            }\r\n            return icon;\r\n        };\r\n        return _this;\r\n    }\r\n    LoginSamplePanel.prototype.getFontOptions = function () {\r\n        var options = [{ value: '', text: 'None', image: '' }], fonts = this.props.fonts || [];\r\n        fonts.map(function (item) {\r\n            options.push({\r\n                value: item.class,\r\n                text: item.name,\r\n                image: ''\r\n            });\r\n        });\r\n        return options;\r\n    };\r\n    LoginSamplePanel.prototype.getFontNumber = function (fontSize) {\r\n        if (fontSize === void 0) { fontSize = ''; }\r\n        switch (fontSize.replace('f', '')) {\r\n            case '-6': return 9;\r\n            case '-5': return 8;\r\n            case '7': return 1;\r\n            case '6': return 2;\r\n            case '5': return 3;\r\n            case '4': return 4;\r\n            case '3': return 5;\r\n            case '2': return 6;\r\n            case '1': return 7;\r\n            default: return 3;\r\n        }\r\n    };\r\n    LoginSamplePanel.prototype.getFontSize = function (num) {\r\n        switch (num) {\r\n            case 9: return -6;\r\n            case 8: return -5;\r\n            case 7: return 1;\r\n            case 6: return 2;\r\n            case 5: return 3;\r\n            case 4: return 4;\r\n            case 3: return 5;\r\n            case 2: return 6;\r\n            case 1: return 7;\r\n            default: return 5;\r\n        }\r\n    };\r\n    LoginSamplePanel.prototype.getColorOptions = function (colors) {\r\n        var options;\r\n        if (colors && colors.length) {\r\n            options = [{ value: '', text: 'None', image: '' }];\r\n            colors.map(function (item) {\r\n                options.push({\r\n                    value: item.id,\r\n                    text: item.name,\r\n                    image: \"br-100 shadow-1 \" + item.name\r\n                });\r\n            });\r\n        }\r\n        return options;\r\n    };\r\n    LoginSamplePanel.prototype.getBorderNumber = function (radiusSize) {\r\n        if (radiusSize === void 0) { radiusSize = ''; }\r\n        switch (radiusSize.replace('br', '')) {\r\n            case '4': return 4;\r\n            case '3': return 3;\r\n            case '2': return 2;\r\n            case '1': return 1;\r\n            case '0': return 0;\r\n            default: return 0;\r\n        }\r\n    };\r\n    LoginSamplePanel.prototype.showPopover = function () {\r\n        this.deviceCompatibiltyPopover.showPopover();\r\n    };\r\n    LoginSamplePanel.prototype.renderDesignPanel = function () {\r\n        var _this = this;\r\n        return (React.createElement(designer_widgets_2.PanelContent, null,\r\n            React.createElement(designer_widgets_3.PanelControl, null,\r\n                React.createElement(designer_widgets_4.TextInput, { label: \"Name\", value: this.props.component.name, onBlur: this.changeComponentName })),\r\n            React.createElement(\"div\", { className: \"flex flex-row\" },\r\n                React.createElement(\"div\", { className: \"flex-row w-70\" },\r\n                    React.createElement(designer_widgets_3.PanelControl, { title: \"Device Compatibility\" })),\r\n                React.createElement(designer_widgets_3.PopoverWidget, { className: \"\", titleIcon: \"ion-md-information-circle\", isConfirmable: false, messageTitle: \"Device Compatibility\", ref: function (el) { return _this.deviceCompatibiltyPopover = el; }, position: \"right\", message: this.renderPopupContent() },\r\n                    React.createElement(\"div\", { className: \"flex flex-row w-30 mr2\" },\r\n                        React.createElement(\"div\", { className: \"\" },\r\n                            React.createElement(\"div\", { className: \"flex flex-row pt3 pl4\" },\r\n                                React.createElement(\"span\", { className: \"bp3-icon-info-sign flex mr1 pointer accent-text\" },\r\n                                    React.createElement(\"div\", { className: \"pl2\", onClick: function () { return _this.showPopover(); } }, \"Info\"))))))),\r\n            React.createElement(designer_widgets_3.PanelControl, { title: \"Background Color\" },\r\n                React.createElement(designer_widgets_5.ColorSelect, { colors: this.props.theme ? this.getColorOptions(this.props.theme.colors) : undefined, selectedThemeId: this.props.theme ? this.props.theme.id : '', value: (this.props.component.style.backgroundColor || '').replace('-bg', ''), onChange: this.changeColor })),\r\n            React.createElement(designer_widgets_3.PanelControl, { title: \"Text Color\" },\r\n                React.createElement(designer_widgets_5.ColorSelect, { colors: this.props.theme ? this.getColorOptions(this.props.theme.colors) : undefined, selectedThemeId: this.props.theme ? this.props.theme.id : '', value: (this.props.component.style.color || '').replace('-text', ''), onChange: this.changeTextColor })),\r\n            React.createElement(designer_widgets_3.PanelControl, { title: \"Font\" },\r\n                React.createElement(designer_widgets_6.DropDown, { value: this.props.component.style.font || '', options: this.getFontOptions(), onChange: this.changeFont })),\r\n            React.createElement(designer_widgets_3.PanelControl, { title: \"Font Size\" },\r\n                React.createElement(\"div\", { className: \"ph2\" },\r\n                    React.createElement(designer_widgets_7.Slider, { min: 1, max: 9, value: this.getFontNumber(this.props.component.style.fontSize), stepSize: 1, labelStepSize: 10, onChange: this.changeFontSize }))),\r\n            React.createElement(designer_widgets_3.PanelControl, { title: \"Border Color\" },\r\n                React.createElement(designer_widgets_5.ColorSelect, { colors: this.props.theme ? this.getColorOptions(this.props.theme.colors) : undefined, selectedThemeId: this.props.theme ? this.props.theme.id : '', value: (this.props.component.style.borderColor || '').replace('-b', ''), onChange: this.changeBorderColor })),\r\n            React.createElement(designer_widgets_3.PanelControl, { title: \"Border Radius\" },\r\n                React.createElement(designer_widgets_7.Slider, { min: 0, max: 4, value: this.getBorderNumber(this.props.component.style.borderRadius), stepSize: 1, labelStepSize: 4, onChange: this.changeBorderRadius }))));\r\n    };\r\n    LoginSamplePanel.prototype.render = function () {\r\n        return (React.createElement(designer_widgets_1.Panel, null, this.renderDesignPanel()));\r\n    };\r\n    return LoginSamplePanel;\r\n}(React.Component));\r\nexports.LoginSamplePanel = LoginSamplePanel;\r\n\n\n//# sourceURL=webpack://sample-widget-custom/./src/features/widgets/login-sample/login-sample-panel.tsx?");

/***/ }),

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

/***/ })

},[["SRmm","runtime","vendor/blueprintjs","vendor/designer-widgets","vendor/popper.js","vendor/prop-types","vendor/resize-observer-polyfill","vendor/dom4","vendor/get-intrinsic","vendor/tslib","vendor/react-lifecycles-compat","vendor/process","vendor/object-keys","vendor/deep-equal","vendor/babel","vendor/regexp.prototype.flags","vendor/has-symbols","vendor/object-assign","vendor/warning","vendor/call-bind","vendor/define-properties","vendor/function-bind","vendor/dom-helpers","vendor/is-regex","vendor/classnames","vendor/object-is","vendor/is-arguments","vendor/is-date-object","vendor/webpack","vendor/has-tostringtag","vendor/gud","vendor/has"]]]);
});