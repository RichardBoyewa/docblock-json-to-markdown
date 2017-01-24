'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = example;
function example(example) {
	return Array(this._titleLevel() + 1).join('#') + ' Example\n```' + (example.language || '') + '\n\t' + example.body + '\n```';
}
module.exports = exports['default'];