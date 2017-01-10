'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = constr;

var _renderBlock = require('../core/renderBlock');

var _renderBlock2 = _interopRequireDefault(_renderBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function constr(data) {
	var constr = data.find(function (block) {
		return block.constructor === true;
	});
	if (!constr) return;
	// delete constr.constructor;
	delete constr.name;
	if (!constr) return;
	var ret = ['## Constructor', (0, _renderBlock2.default)(constr)];
	return ret.join("\n");
}
module.exports = exports['default'];