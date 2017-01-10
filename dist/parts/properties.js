'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = properties;

var _renderBlock = require('../core/renderBlock');

var _renderBlock2 = _interopRequireDefault(_renderBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function properties(data) {
	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	// if is a class
	var props = data.filter(function (block) {
		return block.type && !block.private;
	});
	if (!props.length) return;

	var ret = ['\n## ' + (settings.title || 'Properties') + '\n'];
	if (settings.description) {
		ret.push(settings.description);
	}
	props.forEach(function (prop) {
		ret.push((0, _renderBlock2.default)(prop));
	});
	return ret.join("\n");
}
module.exports = exports['default'];