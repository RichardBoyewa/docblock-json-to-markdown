'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = jsTemplate;
function jsTemplate(data) {
	return [this._config.parts.head(data), this._config.parts.constructor(data), this._config.parts.group(data.filter(function (block) {
		return block.styleguide;
	}), {
		title: 'Examples',
		description: "Here's some usage examples."
	}), this._config.parts.group(data.filter(function (block) {
		return block.setting === true;
	}), {
		title: 'Settings',
		description: "Here's the list of available settings."
	}), this._config.parts.properties(data), this._config.parts.methods(data)].join("\n");
}
module.exports = exports['default'];