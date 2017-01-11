export default function jsonToMarkdown(json) {
	// template
	const template = this._config.templates[this._config.language] || this._config.templates.default;
	const tpl = template(json);
	// return markdown
	return tpl.trim();
}
