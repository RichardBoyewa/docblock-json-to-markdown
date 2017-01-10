import __jsonToMarkdown from './core/jsonToMarkdown';
import __renderBlock from './core/renderBlock';
import __renderTag from './core/renderTag';
import __config from './core/config';
import _merge from 'lodash/merge';
// function docblockJsonToMarkdown(config = {}) {
// 	const _this = {
// 		previousConfig : _merge({}, __config, config)
// 	}
// 	// extend config
// 	__setup(config);
// 	// return api
// 	return {
// 		jsonToMarkdown : __jsonToMarkdown.bind(_this)
// 	}
// }
// docblockJsonToMarkdown.jsonToMarkdown = docblockJsonToMarkdown(__config).jsonToMarkdown;
// docblockJsonToMarkdown.setup = __setup;
// docblockJsonToMarkdown.config = __config;
// export default docblockJsonToMarkdown;


function _docblockJsonToMarkdown(config = {}) {
	return new DocblockJsonToMarkdown(config);
}
class DocblockJsonToMarkdown {
	constructor(config = {}) {
		this._config = _merge({}, __config, config);
		// bind all methods in config with the good context
		for(let key in this._config.tags) {
			this._config.tags[key] = this._config.tags[key].bind(this);
		}
		for(let key in this._config.parts) {
			this._config.parts[key] = this._config.parts[key].bind(this);
		}
		for(let key in this._config.templates) {
			this._config.templates[key] = this._config.templates[key].bind(this);
		}
	}
}
DocblockJsonToMarkdown.prototype.jsonToMarkdown = __jsonToMarkdown;
DocblockJsonToMarkdown.prototype.__renderBlock = __renderBlock;
DocblockJsonToMarkdown.prototype.__renderTag = __renderTag;
export default _docblockJsonToMarkdown;
