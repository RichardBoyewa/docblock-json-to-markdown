'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsonToMarkdown = require('./core/jsonToMarkdown');

var _jsonToMarkdown2 = _interopRequireDefault(_jsonToMarkdown);

var _renderBlock = require('./core/renderBlock');

var _renderBlock2 = _interopRequireDefault(_renderBlock);

var _renderTag = require('./core/renderTag');

var _renderTag2 = _interopRequireDefault(_renderTag);

var _renderBlocks = require('./core/renderBlocks');

var _renderBlocks2 = _interopRequireDefault(_renderBlocks);

var _renderTypes = require('./utils/renderTypes');

var _renderTypes2 = _interopRequireDefault(_renderTypes);

var _titleLevel = require('./utils/titleLevel');

var _titleLevel2 = _interopRequireDefault(_titleLevel);

var _config = require('./core/config');

var _config2 = _interopRequireDefault(_config);

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _docblockJsonToMarkdown() {
	var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	return new DocblockJsonToMarkdown(config);
}

var DocblockJsonToMarkdown = function DocblockJsonToMarkdown() {
	var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	_classCallCheck(this, DocblockJsonToMarkdown);

	this._config = (0, _merge3.default)({}, _config2.default, config);
	// bind all methods in config with the good context
	for (var key in this._config.tags) {
		this._config.tags[key] = this._config.tags[key].bind(this);
	}
	for (var _key in this._config.parts) {
		this._config.parts[_key] = this._config.parts[_key].bind(this);
	}
	for (var _key2 in this._config.templates) {
		this._config.templates[_key2] = this._config.templates[_key2].bind(this);
	}
	this.renderBlocks = _renderBlocks2.default.bind(this);
	this._renderBlock = _renderBlock2.default.bind(this);
	this._renderTag = _renderTag2.default.bind(this);
	this._renderTypes = _renderTypes2.default.bind(this);
	this._titleLevel = _titleLevel2.default.bind(this);
	this.jsonToMarkdown = _jsonToMarkdown2.default.bind(this);
};

exports.default = _docblockJsonToMarkdown;
module.exports = exports['default'];