# README 读我

This repo is intended to demo the usage/advantage/learning cost of learning karma and mocha as a test runner. And if applicable, jasmine and chai as a front-end assertion library will be used to write tests and compared.

## What will be demoed?

* Front-end framework
	* [x] Angular
* Front-end build tools
	* [x] npm(install dependencies)
	* [x] bower(will actually not be used in this demo)
	* [x] grunt(run build/copy/minify/watch/test tasks)
	* [x] babelify(to transpile ES6 code)
	* [x] browserify
* Front-end TESTING FRAMEWORK(runner&assertion library)
	* [x] mocha
	* [x] karma
	* [x] chai
	* [x] jasmine

## How can I start this demo locally?

For starting the server, the easiest way to do is using npm's http-server module. Please make sure you have `http-server` installed globally in your machine by running:

```
npm install -g http-server
```

Make sure you have run `npm install` at least once after you pulled the code and then simply run:

```
npm install
http-server -p 3939
```

and visit `localhost:3939`

## How can I run tests using mocha/karma?

Try the following commands to run tests using mocha/karma in the project root after you checked in the code and have all the dependencies installed:

```
grunt mocha
grunt karma
```

## How Mocha works/ From where can I dive into Mocha if I want/ ...etc
