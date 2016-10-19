define(["react", "react-dom", "./bazinga"], function (_react, _reactDom, _bazinga) {
	"use strict";

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _bazinga2 = _interopRequireDefault(_bazinga);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var spread = function spread(first) {
		for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			rest[_key - 1] = arguments[_key];
		}

		return first.concat(rest);
	};

	_reactDom2.default.render(_react2.default.createElement(_bazinga2.default, null), document.getElementById("app"));
});