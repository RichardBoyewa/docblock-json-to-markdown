import __renderBlock from '../core/renderBlock'
export default function head(data) {
	// if is a class
	const cls = data.find((block) => {
		return block.class;
	});
	if ( ! cls) return;
	delete cls.name;
	const ret = [
		__renderBlock(cls)
	];
	return ret.join("\n");
}
