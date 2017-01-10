"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = group;

var _renderBlock = require("../core/renderBlock");

var _renderBlock2 = _interopRequireDefault(_renderBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function group(blocks) {
	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if (!blocks.length) return;
	var ret = [];
	if (settings.title) {
		ret.push("\n## " + settings.title + "\n");
	}
	if (settings.description) {
		ret.push(settings.description);
	}
	blocks.forEach(function (block) {
		ret.push((0, _renderBlock2.default)(block));
	});
	return ret.join("\n");
}
module.exports = exports["default"];