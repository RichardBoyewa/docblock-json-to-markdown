'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = scssTemplate;
function scssTemplate(data) {
	return [this._config.parts.group(data.filter(function (block, index) {
		return index === 0;
	}), {
		title: '@[0].name',
		titleLevelAdd: 1,
		doNotRender: ['name']
	}), this._config.parts.group(data.filter(function (block) {
		return block.mixin === true;
	}), {
		title: 'Mixins'
	}), this._config.parts.group(data.filter(function (block) {
		return block.function === true;
	}), {
		title: 'Functions'
	}), this._config.parts.group(data.filter(function (block) {
		return block.types;
	}), {
		title: 'Variables'
	})].join("\n");
}
module.exports = exports['default'];