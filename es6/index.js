'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';
import { mediaQueryMapper } from './mq';
import mapNodesToColumns from './mapNodesToColumns';

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
        this._columns = mediaQueryMapper({
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
        var columnsContainers = mapNodesToColumns({ children: children, columns: columns, dimensions: dimensions });
        renderedColumns = columnsContainers.map(function (column, i) {
          return React.createElement(
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

      return React.createElement(
        'div',
        { className: className, style: rootStyles },
        React.createElement(
          'div',
          { style: rowStyles },
          this.renderColumns(columns),
          React.createElement('div', { style: { clear: 'both' } })
        )
      );
    }
  }]);

  return Columns;
})(Component);

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
  className: PropTypes.string,
  rootStyles: PropTypes.object,
  queries: PropTypes.array,
  columns: PropTypes.number,
  gap: PropTypes.string
};

export default Columns;