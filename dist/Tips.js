"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Tips.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tips = function Tips(_ref) {
  var showFlag = _ref.showFlag,
      location = _ref.location,
      distance = _ref.distance,
      tipsMsg = _ref.tipsMsg,
      times = _ref.times;
  var styles = {};

  if (showFlag) {
    setTimeout(function () {
      document.querySelector('.tips').remove();
    }, times && typeof times === 'number' ? times : 2000);
  }

  location === 'center' ? styles.location = {
    top: '50%',
    transform: 'translateY(-50%)'
  } : styles.location = _defineProperty({}, "".concat(location ? location : 'bottom'), distance ? distance : '50px');
  return (showFlag ? showFlag : false) ? _react.default.createElement("div", {
    className: "tips",
    style: styles.location
  }, _react.default.createElement("span", {
    className: "tips-box"
  }, tipsMsg ? tipsMsg : '提示')) : null;
};

var _default = Tips;
exports.default = _default;