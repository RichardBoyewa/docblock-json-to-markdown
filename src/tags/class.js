import trimLine from 'trim-lines';
export default function(cls) {
	return trimLine(`
		# ${cls.name} ${cls.extends ? ` extends ${cls.extends}` : ''}
		${cls.body || ''}
	`);
}
