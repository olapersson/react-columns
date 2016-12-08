'use strict';

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

export default { mediaQuery: mediaQuery, mediaQueryMapper: mediaQueryMapper };