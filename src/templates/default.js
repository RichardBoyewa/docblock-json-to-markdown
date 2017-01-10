export default function defaultTemplate(data) {
	return [
		this._config.headPart(data),
		this._config.constructorPart(data),
		this._config.groupPart(data.filter((block) => {
			return block.setting === true;
		}), {
			title : 'Settings',
			description : "Here's the list of available settings that you can pass to the constructor"
		}),
		this._config.propertiesPart(data),
		this._config.methodsPart(data)
	].join("\n");
}
