export default function ret(ret) {
	return `Return **${this._renderTypes(ret.type)}** ${ret.description}\n`;
}
