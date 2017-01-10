'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = methods;

var _renderBlock = require('../core/renderBlock');

var _renderBlock2 = _interopRequireDefault(_renderBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function methods(data) {
	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	// if is a class
	var methods = data.filter(function (block) {
		return !block.class && !block.private && block.constructor !== true && !block.type;
	});
	if (!methods.length) return;

	var ret = ['\n## ' + (settings.title || 'Methods') + '\n'];
	if (settings.description) {
		ret.push(settings.description);
	}
	methods.forEach(function (method) {
		ret.push((0, _renderBlock2.default)(method));
	});
	return ret.join("\n");
}
module.exports = exports['default'];