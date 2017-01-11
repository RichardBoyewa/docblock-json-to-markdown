"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = jsonToMarkdown;
function jsonToMarkdown(json) {
	// template
	var template = this._config.templates[this._config.language] || this._config.templates.default;
	var tpl = template(json);
	// return markdown
	return tpl.trim();
}
module.exports = exports["default"];