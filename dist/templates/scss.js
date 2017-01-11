"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = scssTemplate;
function scssTemplate(data) {
	return [this._config.parts.head(data), this._config.parts.constructor(data), this._config.parts.properties(data), this._config.parts.methods(data, {
		title: 'Mixins'
	})].join("\n");
}
module.exports = exports["default"];