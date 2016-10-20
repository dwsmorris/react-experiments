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

	const spread = (first, ...rest) => first.concat(rest);

	_reactDom2.default.render(_react2.default.createElement(_bazinga2.default, null), document.getElementById("app"));
});