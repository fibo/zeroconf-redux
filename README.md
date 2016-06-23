# zeroconf-redux

> is a minimal [redux][redux] dev stack, on top of [browserify] + [budo]

[![NPM version](https://badge.fury.io/js/zeroconf-redux.svg)](http://badge.fury.io/js/zeroconf-redux) [![Dependency Status](https://david-dm.org/fibo/zeroconf-redux.svg)](https://david-dm.org/fibo/zeroconf-redux)

[Installation](#installation) |
[Usage](#usage) |
[License](#license)

This is an empty package, there is no code implementation, only a set of
dependencies:

* [babel-es2015-preset]
* [babel-react-preset]
* [babelify]
* [browserify]
* [budo]
* [livereactload]
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

## LiveReactload

You can benefit from awesome **hot reloading** feature by using a *.babelrc* like

```json
{
  "presets": [
    "es2015",
    "react"
  ],
  "env": {
    "development": {
      "plugins": [
        ["react-transform", {
          "transforms": [{
            "transform": "livereactload/babel-transform",
            "imports": ["react"]
          }]
        }]
      ]
    }
  }
}
```

Assuming your *index.js* creates the DOM element where you will mount your
React app, probably you can omit the *index.html*.

Then add the following npm script to your *package.json*

```json
"start": "BABEL_ENV=development NODE_PATH=. budo --open index.js -- -t babelify -p livereactload",
```

Now, launching `npm start` you can edit your code and it will be injected
in your page without losing the state.

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
[livereactload]: https://github.com/milankinen/livereactload "LiveReactload"
