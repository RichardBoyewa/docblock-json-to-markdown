'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = defaultTemplate;

var _head = require('../parts/head');

var _head2 = _interopRequireDefault(_head);

var _constructor = require('../parts/constructor');

var _constructor2 = _interopRequireDefault(_constructor);

var _properties = require('../parts/properties');

var _properties2 = _interopRequireDefault(_properties);

var _methods = require('../parts/methods');

var _methods2 = _interopRequireDefault(_methods);

var _group = require('../parts/group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultTemplate(data) {
	return [(0, _head2.default)(data), (0, _constructor2.default)(data), (0, _group2.default)(data.filter(function (block) {
		return block.setting === true;
	}), {
		title: 'Settings',
		description: "Here's the list of available settings that you can pass to the constructor"
	}), (0, _properties2.default)(data), (0, _methods2.default)(data)].join("\n");
}
module.exports = exports['default'];