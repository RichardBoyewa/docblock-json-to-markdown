const _get = require('lodash/get');
export default function group(blocks, settings = {}) {
	blocks = blocks.filter((block) => {
		return ! block._done;
	});
	if ( ! blocks.length) return;
	const ret = [];

	if (settings.title) {
		if (settings.title.substr(0,1) === '@') {
			ret.push(`\n## ${_get(blocks, settings.title.substr(1))}\n`);
		} else {
			ret.push(`\n## ${settings.title}\n`);
		}
	}
	if (settings.description) {
		if (settings.description.substr(0,1) === '@') {
			ret.push(`\n## ${_get(blocks, settings.description.substr(1))}\n`);
		} else {
			ret.push(settings.description);
		}
	}

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

	blocks.forEach((block) => {
		ret.push(this._renderBlock(block));
	});
	return ret.join("\n");
}
