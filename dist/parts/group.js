"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = group;
function group(blocks) {
	var _this = this;

	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	blocks = blocks.filter(function (block) {
		return !block._done;
	});
	if (!blocks.length) return;
	var ret = [];
	if (settings.title) {
		ret.push("\n## " + settings.title + "\n");
	}
	if (settings.description) {
		ret.push(settings.description);
	}
	blocks.forEach(function (block) {
		ret.push(_this._renderBlock(block));
	});
	return ret.join("\n");
}
module.exports = exports["default"];