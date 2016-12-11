import test from 'ava'
import fn from './'

test('Will throw if the input is not a promise', t => {
  const error = t.throws(() => {
    fn('meow');
  }, TypeError)
  t.is(error.message, 'Expected a Promise, got string')
});

test('Should return a Task given a Promise', t => {
	t.deepEqual(Object.keys(fn(new Promise((res, rej) => {}))),[ 'fork', 'cleanup' ])
});