'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = classTag;

var _trimLines = require('trim-lines');

var _trimLines2 = _interopRequireDefault(_trimLines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function classTag(cls) {
	return (0, _trimLines2.default)('\n\t\t' + Array(this._titleLevel() + 1).join('#') + ' ' + cls.name + ' ' + (cls.extends ? ' extends ' + cls.extends : '') + '\n\t\t' + (cls.body || '') + '\n\t');
}
module.exports = exports['default'];