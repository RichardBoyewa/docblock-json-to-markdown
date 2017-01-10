'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (cls) {
	return (0, _trimLines2.default)('\n\t\t# ' + cls.name + ' ' + (cls.extends ? ' extends ' + cls.extends : '') + '\n\t\t' + (cls.body || '') + '\n\t');
};

var _trimLines = require('trim-lines');

var _trimLines2 = _interopRequireDefault(_trimLines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];