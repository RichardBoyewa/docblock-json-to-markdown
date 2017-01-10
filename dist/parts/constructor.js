"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = constr;
function constr(data) {
	var constr = data.find(function (block) {
		return block.constructor === true;
	});
	if (!constr) return;
	// delete constr.constructor;
	delete constr.name;
	if (!constr) return;
	var ret = ['## Constructor', this._renderBlock(constr)];
	return ret.join("\n");
}
module.exports = exports["default"];