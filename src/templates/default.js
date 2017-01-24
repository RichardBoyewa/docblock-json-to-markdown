export default function defaultTemplate(data) {
	return [
		this._config.parts.group(data.filter((block, index) => {
			return index === 0 && block.name && block.constructor !== true && ! block.styleguide && ! block.prop && ! block.setting && ! block.return && ! block.types && ! block.private && ! block.protected;
		}), {
			title : '@[0].name',
			titleLevelAdd : 1,
			doNotRender : ['name']
		}),
		this._config.parts.group(data.filter((block) => {
			return block.constructor === true;
		}), {
			doNotRender : ['name'],
			title : 'Constructor'
		}),
		this._config.parts.group(data.filter((block) => {
			return block.styleguide !== undefined;
		}), {
			title : 'Examples',
			description : "Here's some usage examples."
		}),
		this._config.parts.group(data.filter((block) => {
			return block.prop !== undefined;
		}), {
			title : 'Attributes',
			description : "Here's the list of available attribute to set on the element."
		}),
		this._config.parts.group(data.filter((block) => {
			return block.setting !== undefined;
		}), {
			title : 'Settings',
			description : "Here's the list of available settings."
		}),
		this._config.parts.group(data.filter((block) => {
			return ! block.return && block.types !== undefined && ! block.private && ! block.protected;
		}), {
			title : 'Properties'
		}),
		this._config.parts.group(data.filter((block) => {
			return ! block.types && ! block.private && ! block.protected;
		}), {
			title : 'Methods'
		})
	].join("\n");
}
