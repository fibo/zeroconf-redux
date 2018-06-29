# zeroconf-redux

> is a minimal [React]/[Redux] dev stack, on top of [browserify] + [budo]

**UPDATES**:
  - v3 brings super exciting [babel-preset-env] and [Redux] v4
  - v2 contains brand new [React] v16

[Quick start](#quick-start) |
[Usage](#usage) |
[Production build](#production-build) |
[Customization](#customization) |
[License](#license)

[![Whatchers](http://g14n.info/svg/github/watchers/zeroconf-redux.svg)](https://github.com/fibo/zeroconf-redux/watchers) [![Stargazers](http://g14n.info/svg/github/stars/zeroconf-redux.svg)](https://github.com/fibo/zeroconf-redux/stargazers) [![Forks](http://g14n.info/svg/github/forks/zeroconf-redux.svg)](https://github.com/fibo/zeroconf-redux/network/members)

[![NPM version](https://badge.fury.io/js/zeroconf-redux.svg)](http://badge.fury.io/js/zeroconf-redux)
[![Dependency Status](https://david-dm.org/fibo/zeroconf-redux.svg)](https://david-dm.org/fibo/zeroconf-redux/)

<img src="https://rawgit.com/fibo/os-icons8/master/Apple-50.png" width="50" height="50" /> <img src="https://rawgit.com/fibo/os-icons8/master/Linux-50.png" width="50" height="50" /> <img src="https://rawgit.com/fibo/os-icons8/master/Windows8-50.png" width="50" height="50" />

## Quick start

Just run

```bash
npm install zeroconf-redux
npx zeroconf-redux
# Yay!
```

Your browser will open and you can start coding your awesome [React]/[Redux] web app now!

If it does not exists, a basic *index.js* file will be created to be used
as the entry for your [budo] dev server.

Read below for more details and instructions about how to create a package
and launch your dev server with an `npm start`.

## Usage

If you have no *package.json* yet, create one now! For instance with
`npm init` or even (for the lazy ones like me :^)

```bash
npm init -y
```

**Tip**: If it is not a package you want to add to the npm registry, you
should add the following attribute to your *package.json* file.

```json
  "private": true,
```


Then with [npm] do

```bash
npm install zeroconf-redux --save-dev
```

The following dependencies will be installed:

* [babel-core]
* [babel-preset-env]
* [babel-preset-es2015]
* [babel-preset-react]
* [babelify]
* [budo]
* [envify]
* [react][React]
* [react-dom]
* [react-redux]
* [redux][Redux]
* [UglifyJS]
* [uglifyify]

On `postinstall` a *.babelrc* is created, if it does not exists.
It has the following content

```json
{ "presets": [ "env", "es2015", "react" ] }
```

If you want to trigger it manually, you can run

```bash
npm explore zeroconf-redux npm run copy_babelrc
```

Assuming there is an *index.html* in the same folder as the *package.json*
with a content like the following...

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

... add an npm script to your *package.json*, to run [budo] dev server,
something like

```json
    "start": "budo index.js --dir . --serve bundle.js --open -- -t babelify",
```

Your *index.js* looks something like

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    You can start coding <em>index.js</em> file.
  </div>,
  document.getElementById('root')
)
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

## Production build

Following instructions from [official React documentation](https://reactjs.org/docs/optimizing-performance.html#browserify), suppose
your package main attribute points to your entry file, for instance *src/index.js*,
and your bundle file is *dist/NAME.min.js*, where *NAME* is
your package name, you could add an npm script like the following

```json
    "browserify": "browserify ${npm_package_name} -t babelify -g [ envify --NODE_ENV production ] -g uglifyify | uglifyjs --compress --mangle > dist/${npm_package_name}.min.js",
```

## Customization

### Babel preset env

> By targeting specific browsers, Babel can do less work so you can ship native ES2015+ 😎!

For example, you may edit your *.babelrc* to target specific chrome version

```json
{
  "presets": [
    ["env", { "targets": { "chrome": "60" } }],
    "react"
  ]
}
```

For more details see [babel-preset-env].

### Async Redux

Probably you need to call an asynchronous API: the standard way is to use
the [Redux Thunk middleware][redux-thunk], so you need to install

```bash
npm install redux-thunk --save
```

This choice is up to you. For example you could prefer [redux-saga].
Since there are few alternatives this package does not include a middleware to dispatch async actions. See [Async Actions chapter on official Redux documentation][AsyncActions] for details.

## License

[MIT](http://g14n.info/mit-license/)

<sub>OS icons provided by <a href="https://icons8.com/">icons8</a>.</sub>

[AsyncActions]: http://redux.js.org/docs/advanced/AsyncActions.html "Async Actions Redux documentation"
[babelify]: https://github.com/babel/babelify "babelify"
[babel-core]: https://www.npmjs.com/package/babel-core "babel-core"
[babel-preset-env]: http://babeljs.io/env "Babel env preset"
[babel-preset-es2015]: https://babeljs.io/docs/plugins/preset-es2015/ "Babel ES2015 preset"
[babel-preset-react]: https://babeljs.io/docs/plugins/preset-react/ "Babel React preset"
[budo]: https://github.com/mattdesl/budo "budo"
[browserify]: http://browserify.org/ "browserify"
[counter_example]: https://github.com/fibo/zeroconf-redux/tree/master/examples/counter "counter example"
[envify]: https://github.com/hughsk/envify "envify"
[redux-saga]: https://redux-saga.js.org/ "Redux-Saga"
[React]: https://reactjs.org/ "React"
[react-dom]: https://www.npmjs.com/package/react-dom "React DOM"
[react-redux]: https://github.com/reactjs/react-redux "React Redux"
[Redux]: http://redux.js.org/ "Redux"
[redux_counter]: https://github.com/reactjs/redux/tree/master/examples/counter "Redux example"
[redux-thunk]: https://github.com/gaearon/redux-thunk "Thunk middleware for Redux"
[npm]: https://npmjs.org/ "npm"
[uglifyify]: https://github.com/hughsk/uglifyify "uglifyify"
[UglifyJS]:  https://github.com/mishoo/UglifyJS

