'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = params;

var _trimLines = require('trim-lines');

var _trimLines2 = _interopRequireDefault(_trimLines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function params(params) {
	var _this = this;

	return (0, _trimLines2.default)('\n\t\tName  |  Type  |  Description  |  Status  |  Default\n\t\t------------  |  ------------  |  ------------  |  ------------  |  ------------\n\t\t' + params.map(function (param) {
		var optional = !param.optional ? 'required' : 'optional';
		var def = param.default || '';
		return param.name + '  |  **' + _this._renderTypes(param.types) + '**  |  ' + param.description + '  |  ' + optional + '  |  ' + def;
	}).join("\n") + '\n\t');
}
module.exports = exports['default'];