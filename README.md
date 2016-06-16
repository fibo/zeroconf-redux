# zeroconf-redux

> is a minimal [redux][redux] dev stack, on top of [browserify] + [budo]

[![NPM version](https://badge.fury.io/js/zeroconf-redux.svg)](http://badge.fury.io/js/zeroconf-redux) [![Dependency Status](https://david-dm.org/fibo/zeroconf-redux.svg)](https://david-dm.org/fibo/zeroconf-redux)

[Installation](#installation) |
[Usage](#usage) |
[Development](#development) |
[License](#license)

This is an empty package, there is no code implementation, only a set of
dependencies:

* [babel-es2015-preset]
* [babel-react-preset]
* [babelify]
* [browserify]
* [budo]
* [react]
* [react-dom]
* [react-redux]
* [redux]

## Installation

With [npm v3](https://npmjs.org/) do

```bash
npm install zeroconf-redux --save-dev
```

## Usage

### Quick start

Assumption: your project folder contains an *index.js* and an *index.html*.

On `postinstall` a *.babelrc* is created, if it does not exists.
It has the following content

```json
{
  "presets": [
    "es2015", "react"
  ]
}
```

If you want to trigger it manually, you can run

```bash
npm explore zeroconf-redux npm run cp_babelrc
```

Add an npm script to your *package.json*, to run [budo] dev server.
For example

```json
  "start": "budo index.js --dir . --live --open -- -t babelify",
```

Now, running `npm start` it will

1. Build your code using *index.js* as entry.
2. Open your *index.html* in your browser.
3. Start watching HTML and CSS files, with livereload on changes.

So, you can focus on your code now!

## Customization

### Babel presets

If you need more babel presets or plugins, other than
[es2015-preset][babel-es2015-preset] and [react-preset][babel-react-preset],
just install and add them to your *.babelrc*.

### Run a single example

Suppose you have a *counter/* folder containing the official
[redux/examples/counter][redux_counter] files.

Add the following npm script

```json
    "example_counter": "budo -l -o -s static/bundle.js -d counter counter/index.js -- -t babelify",
```

Now you can run the example with

```bash
npm run example_counter
```

## Development

Check that all deps are up to date

```bash
npm test
```

Update all deps

```bash
npm run update-deps
```

Release a new minor version

```bash
npm version minor
```

## License

[MIT](http://g14n.info/mit-license/)

[babelify]: https://github.com/babel/babelify "babelify"
[react]: https://facebook.github.io/react/ "React"
[react-dom]: https://www.npmjs.com/package/react-dom "React DOM"
[react-redux]: https://github.com/reactjs/react-redux "React Redux"
[budo]: https://github.com/mattdesl/budo "budo"
[browserify]: http://browserify.org/ "browserify"
[redux]: http://redux.js.org/
[redux_counter]: https://github.com/reactjs/redux/tree/master/examples/counter "Redux example"
[babel-es2015-preset]: https://babeljs.io/docs/plugins/preset-es2015/ "ES2015 preset"
[babel-react-preset]: https://babeljs.io/docs/plugins/preset-react/ "React preset"
