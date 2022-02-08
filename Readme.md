# stable-node-version [![Build Status](https://github.com/vadimdemedes/stable-node-version/workflows/test/badge.svg)](https://github.com/vadimdemedes/stable-node-version/actions)

> Fetch stable Node.js version.

## Installation

```
$ npm install stable-node-version
```

## Usage

```js
import stableNodeVersion from 'stable-node-version';

const version = await stableNodeVersion();
//=> 16.0.0
```

## API

### stableNodeVersion

Returns a `Promise` that resolved to a version string.
