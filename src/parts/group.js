import __renderBlock from '../core/renderBlock';
export default function group(blocks, settings = {}) {
	if ( ! blocks.length) return;
	const ret = [];
	if (settings.title) {
		ret.push(`\n## ${settings.title}\n`);
	}
	if (settings.description) {
		ret.push(settings.description);
	}
	blocks.forEach((block) => {
		ret.push(__renderBlock(block));
	});
	return ret.join("\n");
}