'use strict';

var parse = require('url').parse;
var format = require('url').format;

module.exports = normalize;

function normalize(url, defaults, overrides) {
  var _ = parse(url);

  overrides = overrides || {};

  function set(from, to) {
    if (overrides[from])
      _[to] = overrides[from];
    else
      _[to] = _[to] || defaults[from];
  }

  set('path', 'pathname');
  set('host', 'hostname');
  set('port', 'port');

  _.slashes = true; // So we always get them

  if (_.pathname === '/')
    delete _.pathname; // So we don't get trailing '/' on URLs

  delete _.host; // So .hostname and .port are used to format the URL

  return format(_);
}
