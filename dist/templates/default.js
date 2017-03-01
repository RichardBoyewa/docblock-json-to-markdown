'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = defaultTemplate;
function defaultTemplate(data) {
	return [this._config.parts.group(data.filter(function (block, index) {
		return index === 0 && block.name && !block.private && !block.protected;
	}), {
		title: '@[0].name',
		titleLevelAdd: 1,
		doNotRender: ['name']
	}), this._config.parts.group(data.filter(function (block) {
		return block.constructor === true;
	}), {
		doNotRender: ['name'],
		title: 'Constructor'
	}), this._config.parts.group(data.filter(function (block) {
		return block.styleguide !== undefined;
	}), {
		title: 'Examples',
		description: "Here's some usage examples."
	}), this._config.parts.group(data.filter(function (block) {
		return block.prop !== undefined;
	}), {
		title: 'Attributes',
		description: "Here's the list of available attribute to set on the element."
	}), this._config.parts.group(data.filter(function (block) {
		return block.setting !== undefined;
	}), {
		title: 'Settings',
		description: "Here's the list of available settings."
	}), this._config.parts.group(data.filter(function (block) {
		return !block.return && block.types !== undefined && !block.private && !block.protected;
	}), {
		title: 'Properties'
	}), this._config.parts.group(data.filter(function (block) {
		return !block.types && !block.private && !block.protected;
	}), {
		title: 'Methods'
	})].join("\n");
}
module.exports = exports['default'];