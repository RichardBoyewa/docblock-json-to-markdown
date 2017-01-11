"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = properties;
function properties(data) {
	var _this = this;

	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	// if is a class
	var props = data.filter(function (block) {
		return block.type && !block.private && !block.protected;
	});
	if (!props.length) return;

	var ret = ["\n## " + (settings.title || 'Properties') + "\n"];
	if (settings.description) {
		ret.push(settings.description);
	}
	props.forEach(function (prop) {
		ret.push(_this._renderBlock(prop));
	});
	return ret.join("\n");
}
module.exports = exports["default"];