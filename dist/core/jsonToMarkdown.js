"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = jsonToMarkdown;
function jsonToMarkdown(json) {
	// template
	var template = this._config.templates.default;
	var tpl = template(json);
	// return markdown
	return tpl;
}
module.exports = exports["default"];