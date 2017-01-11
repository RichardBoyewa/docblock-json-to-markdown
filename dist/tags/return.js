"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ret;
function ret(ret) {
	return "Return **" + this._renderTypes(ret.type) + "** " + ret.description + "\n";
}
module.exports = exports["default"];