import __jsonToMarkdown from './core/jsonToMarkdown';
import __setup from './core/setup';
import __config from './core/config';
import _merge from 'lodash/merge';
function docblockParserToMarkdown(config = {}) {
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
docblockParserToMarkdown.toMarkdown = docblockParserToMarkdown(__config).toMarkdown;
docblockParserToMarkdown.setup = __setup;
docblockParserToMarkdown.config = __config;
export default docblockParserToMarkdown;
