export default function example(example) {
	return `#### Example
\`\`\`${example.language || ''}
	${example.body}
\`\`\``;
}
