export default function values(values) {
	return `Values : **${values.split(/,|\|/).map((value) => value.trim()).join(',')}**\n`;
}
