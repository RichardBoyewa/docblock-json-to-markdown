export default function head(data) {
	// if is a class
	const cls = data.find((block) => {
		return block.class;
	});
	if ( ! cls) return;
	delete cls.name;
	console.log(this);
	const ret = [
		this._renderBlock(cls)
	];
	return ret.join("\n");
}
