'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = group;
var _get = require('lodash/get');
function group(blocks) {
	var _this = this;

	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	blocks = blocks.filter(function (block) {
		return !block._done;
	});
	if (!blocks.length) return;
	var ret = [];

	if (settings.title) {
		if (settings.title.substr(0, 1) === '@') {
			ret.push('\n## ' + _get(blocks, settings.title.substr(1)) + '\n');
		} else {
			ret.push('\n## ' + settings.title + '\n');
		}
	}
	if (settings.description) {
		if (settings.description.substr(0, 1) === '@') {
			ret.push('\n## ' + _get(blocks, settings.description.substr(1)) + '\n');
		} else {
			ret.push(settings.description);
		}
	}

	// handle doNotRender
	if (settings.doNotRender) {
		settings.doNotRender.forEach(function (doNotRenderProperty) {
			blocks.forEach(function (block) {
				settings.doNotRender.forEach(function (property) {
					delete block[property];
				});
			});
		});
	}

	blocks.forEach(function (block) {
		ret.push(_this._renderBlock(block));
	});
	return ret.join("\n");
}
module.exports = exports['default'];