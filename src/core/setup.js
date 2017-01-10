import __config from './config'
import _merge from 'lodash/merge'
export default function setup(config = {}) {
	_merge(__config, config);
}
