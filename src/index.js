import __jsonToMarkdown from './core/jsonToMarkdown';
import __setup from './core/setup';
import __config from './core/config';
import _merge from 'lodash/merge';
function docblockJsonToMarkdown(config = {}) {
	const _this = {
		previousConfig : _merge({}, __config, config)
	}
	// extend config
	__setup(config);
	// return api
	return {
		toMarkdown : __jsonToMarkdown.bind(_this)
	}
}
docblockJsonToMarkdown.jsonToMarkdown = docblockJsonToMarkdown(__config).jsonToMarkdown;
docblockJsonToMarkdown.setup = __setup;
docblockJsonToMarkdown.config = __config;
export default docblockJsonToMarkdown;
