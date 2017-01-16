export default function scssTemplate(data) {
	return [
		this._config.parts.head(data),
		this._config.parts.group(data.filter((block) => {
			return block.mixin === true;
		}), {
			title : 'Mixins'
		}),
		this._config.parts.group(data.filter((block) => {
			return block.function === true;
		}), {
			title : 'Functions'
		})
	].join("\n");
}
