import test from 'ava';
import stableNodeVersion from './dist/index.js';

test('fetch stable version', async t => {
	const version = await stableNodeVersion();
	const parts = version.split('.');
	t.is(parts.length, 3);
	t.is(parts[0] % 2, 0);
});
