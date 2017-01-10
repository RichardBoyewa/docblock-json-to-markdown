'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = setup;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setup() {
	var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	(0, _merge3.default)(_config2.default, config);
}
module.exports = exports['default'];