'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _group = require('../parts/group');

var _group2 = _interopRequireDefault(_group);

var _example = require('../tags/example');

var _example2 = _interopRequireDefault(_example);

var _extends = require('../tags/extends');

var _extends2 = _interopRequireDefault(_extends);

var _author = require('../tags/author');

var _author2 = _interopRequireDefault(_author);

var _name = require('../tags/name');

var _name2 = _interopRequireDefault(_name);

var _body = require('../tags/body');

var _body2 = _interopRequireDefault(_body);

var _params = require('../tags/params');

var _params2 = _interopRequireDefault(_params);

var _types = require('../tags/types');

var _types2 = _interopRequireDefault(_types);

var _return = require('../tags/return');

var _return2 = _interopRequireDefault(_return);

var _default = require('../tags/default');

var _default2 = _interopRequireDefault(_default);

var _see = require('../tags/see');

var _see2 = _interopRequireDefault(_see);

var _static = require('../tags/static');

var _static2 = _interopRequireDefault(_static);

var _default3 = require('../templates/default');

var _default4 = _interopRequireDefault(_default3);

var _scss = require('../templates/scss');

var _scss2 = _interopRequireDefault(_scss);

var _js = require('../templates/js');

var _js2 = _interopRequireDefault(_js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	language: 'js',
	tags: {
		example: _example2.default,
		extends: _extends2.default,
		author: _author2.default,
		name: _name2.default,
		body: _body2.default,
		params: _params2.default,
		type: _types2.default,
		types: _types2.default,
		return: _return2.default,
		default: _default2.default,
		see: _see2.default,
		static: _static2.default
	},
	parts: {
		group: _group2.default
	},
	templates: {
		default: _default4.default,
		scss: _scss2.default,
		js: _js2.default
	},
	types: {
		js: {
			HTMLElement: 'https://developer.mozilla.org/fr/docs/Web/API/HTMLElement',
			HTMLLinkElement: 'https://developer.mozilla.org/fr/docs/Web/API/HTMLLinkElement',
			String: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String',
			Array: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array',
			Object: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object',
			Function: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function',
			Boolean: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean',
			Date: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date',
			Error: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error',
			JSON: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON',
			Map: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map',
			Math: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math',
			NaN: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/NaN',
			Number: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number',
			Promise: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise',
			Proxy: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy',
			RegExp: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp'
		},
		scss: {
			List: 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists',
			String: 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings',
			Map: 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps',
			Color: 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors',
			Function: 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#functions',
			Mixin: 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins'
		}
	}
};
module.exports = exports['default'];