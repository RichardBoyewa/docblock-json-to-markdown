export default function defaultTemplate(data) {
	return [
		this._config.parts.group(data.filter((block) => {
			return block.class !== undefined;
		}), {
			doNotRender : ['name']
		}),
		this._config.parts.group(data.filter((block) => {
			return block.constructor === true;
		}), {
			doNotRender : ['name'],
			title : 'Constructor'
		}),
		this._config.parts.group(data.filter((block) => {
			return block.styleguide;
		}), {
			title : 'Examples',
			description : "Here's some usage examples."
		}),
		this._config.parts.group(data.filter((block) => {
			return block.setting === true;
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
