var fmt = require('util').format;
var set = require('./');
var tap = require('tap');

function test(from, expect, defaults, overrides) {
  tap.test(fmt('from %j to %j', from, expect), function(t) {
    var got = set(from, defaults, overrides);
    t.equal(got, expect);
    t.end();
  });
}

test(
  'http:',
  'http://localhost:8701',
  {host: 'localhost', port: 8701});
test(
  'http://',
  'http://localhost:8701',
  {host: 'localhost', port: 8701});
test(
  'http://example.com',
  'http://example.com:8701',
  {host: 'localhost', port: 8701});
test(
  'http://:80',
  'http://localhost:80',
  {host: 'localhost', port: 8701});
test(
  'http://example.com:80',
  'http://example.com:80',
  {host: 'localhost', port: 8701});
test(
  'http+ssh:',
  'http+ssh://localhost:8701',
  {host: 'localhost', port: 8701});
test(
  'http+ssh://',
  'http+ssh://localhost:8701',
  {host: 'localhost', port: 8701});
test(
  'http+ssh://example.com',
  'http+ssh://example.com:8701',
  {host: 'localhost', port: 8701});
test(
  'http+ssh://:80',
  'http+ssh://localhost:80',
  {host: 'localhost', port: 8701});
test(
  'http+ssh://example.com:80',
  'http+ssh://example.com:80',
  {host: 'localhost', port: 8701});
test(
  'http:',
  'http://localhost:8701/api',
  {host: 'localhost', port: 8701},
  {path: '/api'});
test(
  'http://',
  'http://localhost:8701/api',
  {host: 'localhost', port: 8701},
  {path: '/api'});
test(
  'http://example.com',
  'http://example.com:8701/api',
  {host: 'localhost', port: 8701},
  {path: '/api'});
test(
  'http://:80',
  'http://localhost:80/api',
  {host: 'localhost', port: 8701},
  {path: '/api'});
test(
  'http://example.com:80',
  'http://example.com:80/api',
  {host: 'localhost', port: 8701},
  {path: '/api'});
