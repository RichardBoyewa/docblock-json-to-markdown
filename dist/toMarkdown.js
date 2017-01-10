'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = toMarkdown;

var _setup = require('./setup');

var _setup2 = _interopRequireDefault(_setup);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toMarkdown(json) {
	// template
	var template = _config2.default.templates.default;
	var tpl = template(json);
	// restore previous setup
	(0, _setup2.default)(this.previousConfig);
	// return markdown
	return tpl;
}
module.exports = exports['default'];