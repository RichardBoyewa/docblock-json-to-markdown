import trimLines from 'trim-lines';

export default function params(params) {
	return trimLines(`
		Name  |  Type  |  Description  |  Status  |  Default
		------------  |  ------------  |  ------------  |  ------------  |  ------------
		${params.map((param) => {
			let optional = ( ! param.optional) ? 'required' : 'optional';
			let def = param.default || '';
			return `${param.name}  |  **${this._renderTypes(param.types)}**  |  ${param.description}  |  ${optional}  |  ${def}`;
		}).join("\n")}
	`);
}
