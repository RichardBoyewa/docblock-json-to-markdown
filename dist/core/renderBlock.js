"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderBlock;
function renderBlock(block) {
	// mark the block as done
	if (block._done) return;
	block._done = true;
	// loop on each tags in the block
	var ret = [];
	for (var key in block) {
		var value = block[key];
		var tagRendered = this._renderTag(key, value);
		if (!tagRendered) continue;
		if (key === 'name') {
			ret.unshift(tagRendered);
		} else {
			ret.push(tagRendered);
		}
	}
	return ret.join("\n");
}
module.exports = exports["default"];