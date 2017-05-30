export default function scssTemplate(data) {
	return [
		this.renderBlocks(data.filter((block, index) => {
			return index === 0;
		}), {
			title : '@[0].name',
			titleLevelAdd : 1,
			doNotRender : ['name']
		}),
		this.renderBlocks(data.filter((block) => {
			return block.mixin === true;
		}), {
			title : 'Mixins'
		}),
		this.renderBlocks(data.filter((block) => {
			return block.function === true;
		}), {
			title : 'Functions'
		}),
		this.renderBlocks(data.filter((block) => {
			return block.types;
		}), {
			title : 'Variables'
		})
	].join("\n");
}
