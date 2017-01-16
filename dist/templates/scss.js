'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = scssTemplate;
function scssTemplate(data) {
	return [this._config.parts.head(data), this._config.parts.group(data.filter(function (block) {
		return block.mixin === true;
	}), {
		title: 'Mixins',
		description: "Here's the list of available mixins."
	}), this._config.parts.group(data.filter(function (block) {
		return block.function === true;
	}), {
		title: 'Functions',
		description: "Here's the list of available functions."
	})].join("\n");
}
module.exports = exports['default'];