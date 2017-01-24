"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = titleLevel;
var _titleLevel = 1;
function titleLevel() {
	var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	if (add !== null) {
		_titleLevel += add;
	}
	if (_titleLevel < 1) _titleLevel = 1;
	// return level
	return _titleLevel;
}
module.exports = exports["default"];