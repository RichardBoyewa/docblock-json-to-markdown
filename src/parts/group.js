export default function group(blocks, settings = {}) {
	blocks = blocks.filter((block) => {
		return ! block._done;
	});
	if ( ! blocks.length) return;
	// handle doNotRender
	if (settings.doNotRender) {
		settings.doNotRender.forEach((doNotRenderProperty) => {
			blocks.forEach((block) => {
				settings.doNotRender.forEach((property) => {
					delete block[property];
				});
			});
		});
	}
	const ret = [];
	if (settings.title) {
		ret.push(`\n## ${settings.title}\n`);
	}
	if (settings.description) {
		ret.push(settings.description);
	}
	blocks.forEach((block) => {
		ret.push(this._renderBlock(block));
	});
	return ret.join("\n");
}
