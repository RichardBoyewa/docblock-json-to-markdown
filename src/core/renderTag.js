import __config from './config'
export default function renderTag(name, value) {
	if (__config.tags[name] && name !== 'constructor') {
		return __config.tags[name](value);
	}
	return '';
}
