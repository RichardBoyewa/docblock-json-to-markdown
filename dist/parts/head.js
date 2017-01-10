"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = head;

var _renderBlock = require("../core/renderBlock");

var _renderBlock2 = _interopRequireDefault(_renderBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function head(data) {
	// if is a class
	var cls = data.find(function (block) {
		return block.class;
	});
	if (!cls) return;
	delete cls.name;
	var ret = [(0, _renderBlock2.default)(cls)];
	return ret.join("\n");
}
module.exports = exports["default"];