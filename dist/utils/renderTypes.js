'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderTypes;
function renderTypes(types) {
	var _this = this;

	types = [].concat(types);
	// loop on each types
	types.map(function (type) {
		// check if the type exist in types config list
		if (_this._config.types[_this._config.language] && _this._config.types[_this._config.language][type]) {
			return '[' + type + '](' + _this._config.types[_this._config.language][type] + ')';
		}
		return type;
	});
	// return the rendered types
	return types.join('|');
}
module.exports = exports['default'];