'use strict';

/**
 * Dependencies
 */

const stableNodeVersion = require('./');
const test = require('ava');


/**
 * Tests
 */

test ('fetch stable version', t => {
  return stableNodeVersion()
    .then(function (version) {
      t.is(version, '4.0.0');
    });
});
