"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = defaultTemplate;
function defaultTemplate(data) {
	return [this._config.headPart(data), this._config.constructorPart(data), this._config.groupPart(data.filter(function (block) {
		return block.setting === true;
	}), {
		title: 'Settings',
		description: "Here's the list of available settings that you can pass to the constructor"
	}), this._config.propertiesPart(data), this._config.methodsPart(data)].join("\n");
}
module.exports = exports["default"];