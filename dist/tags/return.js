"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ret;
function ret(ret) {
	return "Return **" + this._renderTypes(ret.types) + "** " + ret.description + "\n";
}
module.exports = exports["default"];