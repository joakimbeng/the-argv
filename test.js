'use strict';
var test = require('tape');

var argv = require('./');

test('the-argv removes the first two elements from process.argv', function (assert) {
  process.argv = process.argv.slice(0, 2);
  process.argv.push('--flag');
  assert.same(argv(), ['--flag'], 'Only --flag should be left');
  assert.end();
});
