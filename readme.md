# promise-to-task [![Build Status](https://travis-ci.org/hemanth/promise-to-task.svg?branch=master)](https://travis-ci.org/hemanth/promise-to-task)

> Tiny module to convert a Promise into Task.


## Install

```
$ npm install --save promise-to-task
```


## Usage

```js
const promiseToTask = require('promise-to-task');
const promise = new Promise((res, rej) => {}))

promiseToTask(promise)
.rejectedMap(e => 'oops')
.fork(console.warn, console.log);
```


## API

### promiseToTask(input)

#### input

Type: `Promise`

The Promise that you need to convert to a Task.

## License

MIT © [Hemanth.HM](https://h3manth.com)