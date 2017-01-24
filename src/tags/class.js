import trimLine from 'trim-lines';
export default function classTag(cls) {
	return trimLine(`
		${Array(this._titleLevel()+1).join('#')} ${cls.name} ${cls.extends ? ` extends ${cls.extends}` : ''}
		${cls.body || ''}
	`);
}
