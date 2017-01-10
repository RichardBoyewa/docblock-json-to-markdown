'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderTag;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderTag(name, value) {
	if (_config2.default.tags[name] && name !== 'constructor') {
		return _config2.default.tags[name](value);
	}
	return '';
}
module.exports = exports['default'];