"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = head;
function head(data) {
	// if is a class
	var cls = data.find(function (block) {
		return block.class;
	});
	if (!cls) return;
	delete cls.name;
	console.log(this);
	var ret = [this._renderBlock(cls)];
	return ret.join("\n");
}
module.exports = exports["default"];