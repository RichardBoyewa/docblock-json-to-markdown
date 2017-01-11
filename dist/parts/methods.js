"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = methods;
function methods(data) {
	var _this = this;

	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	// if is a class
	var methods = data.filter(function (block) {
		return !block.class && !block.private && !block.protected && block.constructor !== true && !block.type && !block.styleguide;
	});
	if (!methods.length) return;

	var ret = ["\n## " + (settings.title || 'Methods') + "\n"];
	if (settings.description) {
		ret.push(settings.description);
	}
	methods.forEach(function (method) {
		ret.push(_this._renderBlock(method));
	});
	return ret.join("\n");
}
module.exports = exports["default"];