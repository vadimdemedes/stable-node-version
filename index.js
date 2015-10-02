'use strict';

/**
 * Dependencies
 */

var semver = require('semver');
var got = require('got');


/**
 * Expose `stable-node-version`
 */

module.exports = stableNodeVersion;


/**
 * Fetch stable Node.js version
 */

function stableNodeVersion () {
  // thanks to github.com/tj/n
  var versionRegex = /[0-9]+\.[0-9]*[02468]\.[0-9]+/;

  return got('https://nodejs.org/dist/')
    .then(function (res) {
      var response = res.body
        .split('\n')
        .filter(function (line) {
          return /\<\/a\>/.test(line);
        })
        .filter(function (line) {
          return versionRegex.test(line);
        })
        .map(function (line) {
          return versionRegex.exec(line)[0];
        });

      response.sort(function (a, b) {
        return semver.gt(a, b);
      });

      response.reverse();

      var version = response[0];

      return version;
    });
}
