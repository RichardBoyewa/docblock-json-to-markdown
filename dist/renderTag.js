'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderTag;

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderTag(name, value) {
	if (_settings2.default.tags[name] && name !== 'constructor') {
		return _settings2.default.tags[name](value);
	}
	return '';
}
module.exports = exports['default'];