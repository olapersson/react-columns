'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = mapNodesToColumns;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashMin = require('lodash.min');

var _lodashMin2 = _interopRequireDefault(_lodashMin);

function mapNodesToColumns() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$children = _ref.children;
  var children = _ref$children === undefined ? [] : _ref$children;
  var _ref$columns = _ref.columns;
  var columns = _ref$columns === undefined ? 1 : _ref$columns;
  var _ref$dimensions = _ref.dimensions;
  var dimensions = _ref$dimensions === undefined ? [] : _ref$dimensions;

  var nodes = [];
  var heights = [];

  if (columns === 1) {
    return children;
  }

  // use dimensions to calculate the best column for each child
  if (dimensions.length && dimensions.length === children.length) {
    for (var i = 0; i < columns; i++) {
      nodes[i] = [];
      heights[i] = 0;
    }
    children.forEach(function (child, i) {
      var _dimensions$i = dimensions[i];
      var width = _dimensions$i.width;
      var height = _dimensions$i.height;

      var index = heights.indexOf((0, _lodashMin2['default'])(heights));
      nodes[index].push(child);
      heights[index] += height / width;
    });
  }
  // equally spread the children across the columns
  else {
      var _loop = function (i) {
        nodes[i] = children.filter(function (child, j) {
          return j % columns === i;
        });
      };

      for (var i = 0; i < columns; i++) {
        _loop(i);
      }
    }

  return nodes;
}

module.exports = exports['default'];