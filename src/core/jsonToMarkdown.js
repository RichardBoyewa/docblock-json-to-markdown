import __setup from './setup';
import __config from './config';
export default function jsonToMarkdown(json) {
	// template
	const template = __config.templates.default;
	const tpl = template(json);
	// restore previous setup
	__setup(this.previousConfig);
	// return markdown
	return tpl;
}
