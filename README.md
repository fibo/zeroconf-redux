# zeroconf-redux

> is a minimal [React]/[Redux] dev stack, on top of [browserify] + [budo]

[Installation](#installation) |
[Usage](#usage) |
[License](#license)

<img src="https://rawgit.com/fibo/os-icons8/master/Apple-50.png" width="50" height="50" /> <img src="https://rawgit.com/fibo/os-icons8/master/Linux-50.png" width="50" height="50" /> <img src="https://rawgit.com/fibo/os-icons8/master/Windows8-50.png" width="50" height="50" />

[![NPM version](https://badge.fury.io/js/zeroconf-redux.svg)](http://badge.fury.io/js/zeroconf-redux)
[![Dependency Status](https://david-dm.org/fibo/zeroconf-redux.svg)](https://david-dm.org/fibo/zeroconf-redux/)

[![NPM downloads](https://nodei.co/npm-dl/zeroconf-redux.png)](https://nodei.co/npm-dl/zeroconf-redux/)

This is an empty package, there is almost no code implemented, only a set of dependencies:

* [babel-preset-es2015]
* [babel-preset-react]
* [babelify]
* [budo]
* [react][React]
* [react-dom]
* [react-redux]
* [redux][Redux]

I am using [greenkeeper.io](https://greenkeeper.io) to keep dependencies up to date,
then publish them as *patch* versions.

## Installation

With [npm v3](https://npmjs.org/) do

```bash
npm install zeroconf-redux --save-dev
```

## Usage

### Quick start

Assumption: your project folder contains files  *index.js* and *index.html*.

Just install

```bash
npm i zeroconf-redux
```

and launch the dev server with

```bash
node_modules/.bin/budo index.js --dir . --live --open -- -t babelify
```

Your browser will open and you can start coding now!

Read below for more details and instructions to improve this quick process and
launch your dev server with a simple `npm start`.

### Use a package.json

If you have no *package.json* yet, I highly recommend to create one, for instance with

```bash
npm init
```

or even (for the lazy ones like me :^) `npm init -y`.

Install and save it as a development dependency.

```bash
npm install zeroconf-redux --save-dev
```

On `postinstall` a *.babelrc* is created, if it does not exists.
It has the following content

```json
{ "presets": [ "es2015", "react" ] }
```

If you want to trigger it manually, you can run

```bash
npm explore zeroconf-redux npm run copy_babelrc
```

Add an npm script to your *package.json*, to run [budo] dev server.
For example

```json
  "start": "budo index.js --dir . --live --open -- -t babelify",
```

Now, running `npm start` it will

1. Build your code using *index.js* as entry.
2. Open your *index.html* in your browser.
3. Start watching HTML, JS and CSS files, with livereload on changes.

In the [examples/counter folder][counter_example] there is a copy of the [classic Redux counter example][redux_counter].
You can run it with this command

```bash
npm explore zeroconf-redux npm run example_counter
```

## Customization

#### Babel presets

If you need more babel presets or plugins, other than
[babel-preset-es2015] and [babel-preset-react],
just install and add them to your *.babelrc*.

#### LiveReactload

> **NOTA BENE** the instructions below work, but, they will be changed and updated when next HMR will be released.

You can benefit from awesome **hot reloading** feature using [livereactload].

Install dependencies

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

<sub>OS icons provided by <a href="https://icons8.com/">icons8</a>.</sub>

[babelify]: https://github.com/babel/babelify "babelify"
[babel-preset-es2015]: https://babeljs.io/docs/plugins/preset-es2015/ "Babel ES2015 preset"
[babel-preset-react]: https://babeljs.io/docs/plugins/preset-react/ "Babel React preset"
[budo]: https://github.com/mattdesl/budo "budo"
[browserify]: http://browserify.org/ "browserify"
[counter_example]: https://github.com/fibo/zeroconf-redux/tree/master/examples/counter "counter example"
[React]: https://facebook.github.io/react/ "React"
[react-dom]: https://www.npmjs.com/package/react-dom "React DOM"
[react-redux]: https://github.com/reactjs/react-redux "React Redux"
[Redux]: http://redux.js.org/ "Redux"
[livereactload]: https://github.com/milankinen/livereactload "LiveReactload"
[redux_counter]: https://github.com/reactjs/redux/tree/master/examples/counter "Redux example"
