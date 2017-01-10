'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsonToMarkdown = require('./core/jsonToMarkdown');

var _jsonToMarkdown2 = _interopRequireDefault(_jsonToMarkdown);

var _setup = require('./core/setup');

var _setup2 = _interopRequireDefault(_setup);

var _config = require('./core/config');

var _config2 = _interopRequireDefault(_config);

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function docblockParserToMarkdown() {
	var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var _this = {
		previousConfig: (0, _merge3.default)({}, _config2.default, config)
	};
	// extend config
	(0, _setup2.default)(config);
	// return api
	return {
		toMarkdown: _jsonToMarkdown2.default.bind(_this)
	};
}
docblockParserToMarkdown.toMarkdown = docblockParserToMarkdown(_config2.default).toMarkdown;
docblockParserToMarkdown.setup = _setup2.default;
docblockParserToMarkdown.config = _config2.default;
exports.default = docblockParserToMarkdown;
module.exports = exports['default'];