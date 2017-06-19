'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = scssTemplate;
function scssTemplate(data) {
	return [this.renderBlocks(data.filter(function (block, index) {
		return index === 0;
	}), {
		title: '@[0].name',
		titleLevelAdd: 1,
		doNotRender: ['name']
	}), this.renderBlocks(data.filter(function (block) {
		return block.mixin === true;
	}), {
		title: 'Mixins'
	}), this.renderBlocks(data.filter(function (block) {
		return block.function === true;
	}), {
		title: 'Functions'
	}), this.renderBlocks(data.filter(function (block) {
		return block.types;
	}), {
		title: 'Variables'
	})].join("\n");
}
module.exports = exports['default'];