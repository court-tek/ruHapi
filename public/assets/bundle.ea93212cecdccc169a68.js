webpackJsonp([0],{

/***/ 1460:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(63);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(186);

__webpack_require__(182);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var button = {
  padding: "20px",
  background: "#4dc0b5",
  position: "absolute",
  top: "0",
  right: "614px",
  marginTop: "50px",
  cursor: "pointer"
};

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      color: "indigo"
    };
    _this.letterColor = _this.letterColor.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: "letterColor",
    value: function letterColor() {
      if (this.state.color === "indigo") {
        this.setState({ color: "green" });
      } else if (this.state.color === "green") {
        this.setState({ color: "indigo" });
      }
      console.log("We work it");
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "starter" },
        _react2.default.createElement(
          "h1",
          { className: "" + this.state.color },
          "This React App is Live"
        ),
        _react2.default.createElement(
          "div",
          { onClick: this.letterColor, style: button },
          "Change Color"
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;


var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ },

/***/ 182:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }

},[1460]);