'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderBlock;

var _renderTag = require('./renderTag');

var _renderTag2 = _interopRequireDefault(_renderTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderBlock(block) {
	// mark the block as done
	if (block._done) return;
	block._done = true;
	// loop on each tags in the block
	var ret = [];
	for (var key in block) {
		var value = block[key];
		var tagRendered = (0, _renderTag2.default)(key, value);
		if (!tagRendered) continue;
		if (key === 'name') {
			ret.unshift(tagRendered);
		} else {
			ret.push(tagRendered);
		}
	}
	return ret.join("\n");
}
module.exports = exports['default'];