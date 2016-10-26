# zeroconf-redux

> is a minimal [Redux][redux] dev stack, on top of [browserify] + [budo]

[![NPM version](https://badge.fury.io/js/zeroconf-redux.svg)](http://badge.fury.io/js/zeroconf-redux) [![Dependency Status](https://david-dm.org/fibo/zeroconf-redux.svg)](https://david-dm.org/fibo/zeroconf-redux/)

[Installation](#installation) |
[Usage](#usage) |
[License](#license)

This is an empty package, there is no code implementation, only a set of
dependencies:

* [babel-cli]
* [babel-preset-es2015]
* [babel-preset-react]
* [babelify]
* [browserify]
* [budo]
* [react]
* [react-dom]
* [react-redux]
* [redux]

I am using [greenkeeper.io](https://greenkeeper.io) to keep dependencies up to date,
then publish them as *patch* versions.

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

### Customization

#### Babel presets

If you need more babel presets or plugins, other than
[babel-preset-es2015] and [babel-preset-react],
just install and add them to your *.babelrc*.

#### Run a single example

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

#### LiveReactload

You can benefit from awesome **hot reloading** feature using [livereactload].

Install depen

```bash
npm i --save-dev livereactload react-proxy@1.x babel-plugin-react-transform
```

Use a *.babelrc* like

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

## License

[MIT](http://g14n.info/mit-license/)

[babelify]: https://github.com/babel/babelify "babelify"
[babel-cli]: https://www.npmjs.com/package/babel-cli "babel-cli"
[babel-preset-es2015]: https://babeljs.io/docs/plugins/preset-es2015/ "Babel ES2015 preset"
[babel-preset-react]: https://babeljs.io/docs/plugins/preset-react/ "Babel React preset"
[budo]: https://github.com/mattdesl/budo "budo"
[browserify]: http://browserify.org/ "browserify"
[react]: https://facebook.github.io/react/ "React"
[react-dom]: https://www.npmjs.com/package/react-dom "React DOM"
[react-redux]: https://github.com/reactjs/react-redux "React Redux"
[redux]: http://redux.js.org/
[livereactload]: https://github.com/milankinen/livereactload "LiveReactload"
[redux_counter]: https://github.com/reactjs/redux/tree/master/examples/counter "Redux example"
