export default function methods(data, settings = {}) {
	// if is a class
	const methods = data.filter((block) => {
		return ! block.class && ! block.private && block.constructor !== true && ! block.type;
	});
	if ( ! methods.length) return;

	const ret = [`\n## ${settings.title || 'Methods'}\n`];
	if (settings.description) {
		ret.push(settings.description);
	}
	methods.forEach((method) => {
		ret.push(this._renderBlock(method));
	});
	return ret.join("\n");
}
