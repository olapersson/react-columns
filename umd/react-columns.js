/*!
 * react-columns 0.2.1 - http://novascreen.github.io/react-columns/
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactColumns"] = factory(require("react"));
	else
		root["ReactColumns"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _mq = __webpack_require__(2);

	var _mapNodesToColumns = __webpack_require__(1);

	var _mapNodesToColumns2 = _interopRequireDefault(_mapNodesToColumns);

	var Columns = (function (_Component) {
	  _inherits(Columns, _Component);

	  function Columns(props) {
	    _classCallCheck(this, Columns);

	    _get(Object.getPrototypeOf(Columns.prototype), 'constructor', this).call(this, props);
	    this.setColumns = this.setColumns.bind(this);
	    this.state = {};
	  }

	  _createClass(Columns, [{
	    key: 'setColumns',
	    value: function setColumns() {
	      this.setState({
	        columns: this._columns.getValue()
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.queries.length) {
	        this._columns = (0, _mq.mediaQueryMapper)({
	          queries: this.props.queries,
	          valueKey: 'columns',
	          defaultValue: this.props.queries.length ? 1 : this.props.columns,
	          onChange: this.setColumns
	        });
	        this.setColumns();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._columns) {
	        this._columns.removeListeners();
	      }
	    }
	  }, {
	    key: 'renderColumns',
	    value: function renderColumns(columns) {
	      var _props = this.props;
	      var children = _props.children;
	      var dimensions = _props.dimensions;
	      var gap = _props.gap;

	      var columnStyles = {
	        boxSizing: 'border-box',
	        float: 'left',
	        width: 1 / columns * 100 + '%',
	        paddingLeft: gap,
	        paddingRight: gap
	      };
	      var renderedColumns = children;

	      if (columns > 1) {
	        var columnsContainers = (0, _mapNodesToColumns2['default'])({ children: children, columns: columns, dimensions: dimensions });
	        renderedColumns = columnsContainers.map(function (column, i) {
	          return _react2['default'].createElement(
	            'div',
	            { key: i, style: columnStyles },
	            column
	          );
	        });
	      }

	      return renderedColumns;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var className = _props2.className;
	      var gap = _props2.gap;
	      var rootStyles = _props2.rootStyles;
	      var _state$columns = this.state.columns;
	      var columns = _state$columns === undefined ? this.props.columns : _state$columns;

	      var rowStyles = columns === 1 ? {} : {
	        marginLeft: 'calc(' + gap + ' * -1)',
	        marginRight: 'calc(' + gap + ' * -1)'
	      };

	      return _react2['default'].createElement(
	        'div',
	        { className: className, style: rootStyles },
	        _react2['default'].createElement(
	          'div',
	          { style: rowStyles },
	          this.renderColumns(columns),
	          _react2['default'].createElement('div', { style: { clear: 'both' } })
	        )
	      );
	    }
	  }]);

	  return Columns;
	})(_react.Component);

	Columns.defaultProps = {
	  className: '',
	  rootStyles: {
	    overflowX: 'hidden'
	  },
	  queries: [],
	  columns: 3,
	  gap: '0px'
	};

	Columns.propTypes = {
	  className: _react.PropTypes.string,
	  rootStyles: _react.PropTypes.object,
	  queries: _react.PropTypes.array,
	  columns: _react.PropTypes.number,
	  gap: _react.PropTypes.string
	};

	exports['default'] = Columns;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = mapNodesToColumns;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashMin = __webpack_require__(3);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var mediaQueries = {};

	function mediaQuery() {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var _ref$query = _ref.query;
	  var query = _ref$query === undefined ? '' : _ref$query;
	  var _ref$full = _ref.full;
	  var full = _ref$full === undefined ? false : _ref$full;
	  var _ref$onChange = _ref.onChange;
	  var onChange = _ref$onChange === undefined ? function () {} : _ref$onChange;

	  var result = {
	    query: query,
	    full: full,
	    queryMatches: false,
	    _mq: null
	  };
	  if (!query) {
	    return result;
	  }

	  function listener(mq) {
	    result.queryMatches = mq.matches;
	    onChange(result.queryMatches);
	  }
	  function removeListener() {
	    result._mq.removeListener(listener);
	  }

	  result.query = !full && query[query.length - 1] !== ')' ? '(' + query + ')' : query;

	  if (!mediaQueries[result.query]) {
	    mediaQueries[result.query] = window.matchMedia(result.query);
	  }
	  result._mq = mediaQueries[result.query];
	  result.queryMatches = result._mq.matches;
	  result.removeListener = removeListener;

	  result._mq.addListener(listener);

	  return result;
	}

	function mediaQueryMapper() {
	  var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var _ref2$queries = _ref2.queries;
	  var queries = _ref2$queries === undefined ? [] : _ref2$queries;
	  var _ref2$valueKey = _ref2.valueKey;
	  var valueKey = _ref2$valueKey === undefined ? 'value' : _ref2$valueKey;
	  var _ref2$defaultValue = _ref2.defaultValue;
	  var defaultValue = _ref2$defaultValue === undefined ? '' : _ref2$defaultValue;
	  var _ref2$onChange = _ref2.onChange;
	  var onChange = _ref2$onChange === undefined ? function () {} : _ref2$onChange;

	  var mQs = queries.map(function (query) {
	    return mediaQuery({
	      query: query.query,
	      full: query.full,
	      onChange: onMqChange
	    });
	  });

	  function getValue() {
	    var value = defaultValue;
	    mQs.forEach(function (mQ, i) {
	      if (mQ.queryMatches) {
	        value = queries[i][valueKey];
	      }
	    });
	    return value;
	  }

	  function onMqChange(mq) {
	    onChange(getValue());
	  }

	  function removeListeners() {
	    mQs.forEach(function (mq, i) {
	      mq.removeListener();
	    });
	  }

	  return { getValue: getValue, removeListeners: removeListeners };
	}

	exports['default'] = { mediaQuery: mediaQuery, mediaQueryMapper: mediaQueryMapper };
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of methods like `_.max` and `_.min` which accepts a
	 * `comparator` to determine the extremum value.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The iteratee invoked per iteration.
	 * @param {Function} comparator The comparator used to compare values.
	 * @returns {*} Returns the extremum value.
	 */
	function baseExtremum(array, iteratee, comparator) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    var value = array[index],
	        current = iteratee(value);

	    if (current != null && (computed === undefined
	          ? (current === current && !isSymbol(current))
	          : comparator(current, computed)
	        )) {
	      var computed = current,
	          result = value;
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.lt` which doesn't coerce arguments to numbers.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is less than `other`,
	 *  else `false`.
	 */
	function baseLt(value, other) {
	  return value < other;
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * Computes the minimum value of `array`. If `array` is empty or falsey,
	 * `undefined` is returned.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @returns {*} Returns the minimum value.
	 * @example
	 *
	 * _.min([4, 2, 8, 6]);
	 * // => 2
	 *
	 * _.min([]);
	 * // => undefined
	 */
	function min(array) {
	  return (array && array.length)
	    ? baseExtremum(array, identity, baseLt)
	    : undefined;
	}

	module.exports = min;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;