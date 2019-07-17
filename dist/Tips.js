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
      tipsMsg = _ref.tipsMsg;
  var styles = {};
  location === 'center' ? styles.location = {
    top: '50%',
    transform: 'translateY(-50%)'
  } : styles.location = _defineProperty({}, "".concat(location ? location : 'bottom'), distance ? distance : '50px');
  return (showFlag ? showFlag : false) ? _react.default.createElement("div", {
    className: "tips fadeInUp",
    style: styles.location
  }, _react.default.createElement("span", {
    className: "tips-box"
  }, tipsMsg ? tipsMsg : '提示')) : null;
};

var _default = Tips;
exports.default = _default;