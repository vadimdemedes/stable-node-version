# stable-node-version [![Build Status](https://travis-ci.org/vdemedes/stable-node-version.svg)](https://travis-ci.org/vdemedes/stable-node-version)

Fetch stable Node.js version.


### Installation

```
$ npm install stable-node-version --save
```


### Usage

```js
const fetchStableVersion = require('stable-node-version');

fetchStableVersion().then(function (stableVersion) {
  stableVersion === '4.0.0'; // true
});
```


### Tests

[![Build Status](https://travis-ci.org/vdemedes/stable-node-version.svg)](https://travis-ci.org/vdemedes/stable-node-version)

```
$ make test
```


### License

MIT © [vdemedes](https://github.com/vdemedes)
