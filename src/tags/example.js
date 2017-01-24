export default function example(example) {
	return `${Array(this._titleLevel()+1).join('#')} Example
\`\`\`${example.language || ''}
	${example.body}
\`\`\``;
}
