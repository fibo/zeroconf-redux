# zeroconf-redux

> is a minimal [redux][redux] dev stack, on top of browserify+budo

[![NPM version](https://badge.fury.io/js/zeroconf-redux.svg)](http://badge.fury.io/js/zeroconf-redux) [![Dependency Status](https://gemnasium.com/fibo/zeroconf-redux.svg)](https://gemnasium.com/fibo/zeroconf-redux)

**Table Of Contents:**

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation

With [npm v3](https://npmjs.org/) do

```bash
npm install zeroconf-redux --save-dev
```

## Usage

### Quick start

Assumption: your project folder contains an *index.js* and an *index.html*.

Create a *.babelrc* with the following content

```json
{
  "presets": [
    "es2015", "react"
  ]
}
```

Instead of creating it manually, you can run

```bash
npm explore zeroconf-redux npm run cp_babelrc
```

Add an npm script to your *package.json*, to run [budo][budo] dev server. For example

```json
  "start": "budo index.js --dir . --live --example -- -t babelify",
```

Now, running `npm start` it will

1. Build your code using *index.js* as entry.
2. Open your *index.html* in your browser.
3. Start watching HTML and CSS files, with livereload on changes.

So, you can focus on your code now!

## Customization

Of course you can use any budo or browserify feature. In particular, if you need more
babel presets or plugins, other than *es2015* and *react*, just install and add them
to your *.babelrc*.

For example, suppose you have a *counter/* folder containing the official [redux/examples/counter][redux_counter] files.

Add the following npm script

```json
    "example_counter": "budo -l -o -s static/bundle.js -d counter counter/index.js -- -t babelify",
```

Now you can run the example with

```bash
npm run example_counter
```

## Bonus tip

To complete the picture, it is recommended to add *standardjs* linter and *pre-commit* git hook.

```bash
npm install standard pre-commit --save-dev
```

Then add to your *package.json*

```json
...
  "scripts": {
...
    "check-deps": "npm outdated",
    "lint": "standard",
...
  },
  "pre-commit": [
    "check-deps",
    "lint"
  ],
...
```

## License

[MIT](http://g14n.info/mit-license/)

[budo]: https://github.com/mattdesl/budo
[redux]: http://redux.js.org/
[redux_counter]: https://github.com/reactjs/redux/tree/master/examples/counter
