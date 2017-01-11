'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _head = require('../parts/head');

var _head2 = _interopRequireDefault(_head);

var _constructor = require('../parts/constructor');

var _constructor2 = _interopRequireDefault(_constructor);

var _group = require('../parts/group');

var _group2 = _interopRequireDefault(_group);

var _methods = require('../parts/methods');

var _methods2 = _interopRequireDefault(_methods);

var _properties = require('../parts/properties');

var _properties2 = _interopRequireDefault(_properties);

var _class = require('../tags/class');

var _class2 = _interopRequireDefault(_class);

var _example = require('../tags/example');

var _example2 = _interopRequireDefault(_example);

var _author = require('../tags/author');

var _author2 = _interopRequireDefault(_author);

var _name = require('../tags/name');

var _name2 = _interopRequireDefault(_name);

var _body = require('../tags/body');

var _body2 = _interopRequireDefault(_body);

var _params = require('../tags/params');

var _params2 = _interopRequireDefault(_params);

var _type = require('../tags/type');

var _type2 = _interopRequireDefault(_type);

var _return = require('../tags/return');

var _return2 = _interopRequireDefault(_return);

var _default = require('../tags/default');

var _default2 = _interopRequireDefault(_default);

var _see = require('../tags/see');

var _see2 = _interopRequireDefault(_see);

var _default3 = require('../templates/default');

var _default4 = _interopRequireDefault(_default3);

var _scss = require('../templates/scss');

var _scss2 = _interopRequireDefault(_scss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	language: 'js',
	tags: {
		class: _class2.default,
		example: _example2.default,
		author: _author2.default,
		name: _name2.default,
		body: _body2.default,
		params: _params2.default,
		type: _type2.default,
		return: _return2.default,
		default: _default2.default,
		see: _see2.default
	},
	parts: {
		head: _head2.default,
		constructor: _constructor2.default,
		group: _group2.default,
		properties: _properties2.default,
		methods: _methods2.default
	},
	templates: {
		default: _default4.default,
		scss: _scss2.default
	}
};
module.exports = exports['default'];