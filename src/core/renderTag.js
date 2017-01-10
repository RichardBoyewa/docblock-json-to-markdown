import __settings from './settings'
export default function renderTag(name, value) {
	if (__settings.tags[name] && name !== 'constructor') {
		return __settings.tags[name](value);
	}
	return '';
}
