'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = defaultTemplate;
function defaultTemplate(data) {
	return [this._config.parts.group(data.filter(function (block) {
		return block.class !== undefined;
	}), {
		title: 'Class'
	}), this._config.parts.group(data.filter(function (block) {
		return block.constructor === true;
	}), {
		title: 'Constructor'
	}), this._config.parts.group(data.filter(function (block) {
		return block.styleguide;
	}), {
		title: 'Examples',
		description: "Here's some usage examples."
	}), this._config.parts.group(data.filter(function (block) {
		return block.setting === true;
	}), {
		title: 'Settings',
		description: "Here's the list of available settings."
	}), this._config.parts.group(data.filter(function (block) {
		return block.type !== undefined && !block.private && !block.protected;
	}), {
		title: 'Properties'
	}), this._config.parts.group(data.filter(function (block) {
		return !block.type && !block.private && !block.protected;
	}), {
		title: 'Methods'
	})].join("\n");
}
module.exports = exports['default'];