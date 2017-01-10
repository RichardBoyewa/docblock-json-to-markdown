import __renderBlock from '../core/renderBlock'
export default function properties(data, settings = {}) {
	// if is a class
	const props = data.filter((block) => {
		return ( block.type && ! block.private);
	});
	if ( ! props.length) return;

	const ret = [`\n## ${settings.title || 'Properties'}\n`];
	if (settings.description) {
		ret.push(settings.description);
	}
	props.forEach((prop) => {
		ret.push(__renderBlock(prop));
	});
	return ret.join("\n");
}
