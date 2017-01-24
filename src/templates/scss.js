export default function scssTemplate(data) {
	return [
		this._config.parts.group(data.filter((block) => {
			return block.mixin !== true && block.function !== true && ! block.styleguide;
		})),
		this._config.parts.group(data.filter((block) => {
			return block.mixin === true;
		}), {
			title : 'Mixins'
		}),
		this._config.parts.group(data.filter((block) => {
			return block.function === true;
		}), {
			title : 'Functions'
		}),
		this._config.parts.group(data.filter((block) => {
			return block.types;
		}), {
			title : 'Variables'
		})
	].join("\n");
}
