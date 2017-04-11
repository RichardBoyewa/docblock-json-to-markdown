'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = values;
function values(values) {
	return 'Values : **' + values.split(/,|\|/).map(function (value) {
		return value.trim();
	}).join(',') + '**\n';
}
module.exports = exports['default'];