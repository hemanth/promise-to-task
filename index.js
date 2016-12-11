'use strict';
const Task = require('data.task');
const isPromise = require('is-promise');

module.exports = promise => {
	if (!isPromise(promise)) {
		throw new TypeError(`Expected a Promise, got ${typeof promise}`);
	}
	return new Task((rej, res) => promise.then(res).catch(rej))
};
