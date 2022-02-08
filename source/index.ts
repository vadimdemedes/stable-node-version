import semver from 'semver';
import fetch from 'node-fetch';

const versionRegex = /\d*[02468]\.\d+\.\d+/;

const stableNodeVersion = async () => {
	const response = await fetch('https://nodejs.org/dist');
	const body = await response.text();

	const versions = body
		.split('\n')
		.filter(line => line.includes('</a>'))
		.filter(line => versionRegex.test(line))
		.map(line => versionRegex.exec(line)![0]) as string[];

	versions.sort((a, b) => {
		return semver.gt(a, b) ? 1 : -1;
	});

	versions.reverse();

	return versions[0];
};

export default stableNodeVersion;
