"use strict";

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = document.getElementById('app');

_reactDom["default"].hydrate(React.createElement(_App["default"], null), app);