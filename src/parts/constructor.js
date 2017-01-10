export default function constr(data) {
	const constr = data.find((block) => {
		return block.constructor === true;
	});
	if ( ! constr) return;
	// delete constr.constructor;
	delete constr.name;
	if ( ! constr) return;
	const ret = [
		'## Constructor',
		this._renderBlock(constr)
	];
	return ret.join("\n");
}
