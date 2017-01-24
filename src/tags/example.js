export default function example(example) {
	return `${Array(this._titleLevel()+2).join('#')} Example
\`\`\`${example.language || ''}
	${example.body}
\`\`\``;
}
