'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = example;
function example(example) {
	return '#### Example\n```' + (example.language || '') + '\n\t' + example.body + '\n```';
}
module.exports = exports['default'];