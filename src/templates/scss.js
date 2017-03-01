export default function scssTemplate(data) {
	return [
		this._config.parts.group(data.filter((block, index) => {
			return index === 0;
		}), {
			title : '@[0].name',
			titleLevelAdd : 1,
			doNotRender : ['name']
		}),
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
