# zeroconf-redux

> is a minimal [React]/[Redux] dev stack, on top of [browserify] + [budo]

**UPDATE** 🎉: v2 contains brand new React v16 😎

[Quick start](#quick-start) |
[Usage](#usage) |
[Customization](#customization) |
[License](#license)

<img src="https://rawgit.com/fibo/os-icons8/master/Apple-50.png" width="50" height="50" /> <img src="https://rawgit.com/fibo/os-icons8/master/Linux-50.png" width="50" height="50" /> <img src="https://rawgit.com/fibo/os-icons8/master/Windows8-50.png" width="50" height="50" />

[![NPM version](https://badge.fury.io/js/zeroconf-redux.svg)](http://badge.fury.io/js/zeroconf-redux)
[![Dependency Status](https://david-dm.org/fibo/zeroconf-redux.svg)](https://david-dm.org/fibo/zeroconf-redux/)

## Quick start

One only assumption: your *current working directory* contains
an **index.js** that is your entry file:
`echo "alert('ok')" > index.js` is enough to start.

Now you can run

```bash
npm install zeroconf-redux
npx zeroconf-redux
```

Your browser will open and you can start coding your [React]/[Redux] awesome web app now!

Read below for more details and instructions to improve this quick
process and launch your dev server with a simple `npm start`.

## Usage

If you have no *package.json* yet, create one now! For instance with
`npm init` or even (for the lazy ones like me :^) `npm init -y`.

Then with [npm] do

```bash
npm install zeroconf-redux --save-dev
```

The following dependencies will be installed:

* [babel-preset-es2015]
* [babel-preset-react]
* [babelify]
* [budo]
* [react][React]
* [react-dom]
* [react-redux]
* [redux][Redux]

On `postinstall` a *.babelrc* is created, if it does not exists.
It has the following content

```json
{ "presets": [ "es2015", "react" ] }
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
    "start": "budo index.js --dir . --serve bundle.js --live --open -- -t babelify",
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

### Babel presets

If you need more babel presets or plugins, other than
[babel-preset-es2015] and [babel-preset-react],
just install and add them to your *.babelrc*.

### Async Redux

Probably you need to call an asynchronous API: the standard way is to use
the [Redux Thunk middleware][redux-thunk], so you need to install

```bash
npm install redux-thunk --save
```

But this choice is up to you, since there are few alternatives this
package does not include a middleware to dispatch async actions.
See [Async Actions](http://redux.js.org/docs/advanced/AsyncActions.html) chapter on official Redux documentation for details.

### LiveReactload

You can benefit from awesome **hot reloading** feature using [livereactload].

Install dependencies

```bash
npm install livereactload@next react-hot-loader@next
```

Use a *.babelrc* like the following

```json
{
  "presets": ["es2015", "react"],
  "plugins": ["react-hot-loader/babel"]
}
```

You can create it if you launch

```bash
rm .babelrc
npm explore zeroconf-redux npm run copy_babelrc_livereactload
```

I assume you have an *index.html*, with a `div` having an *app* id. Note
that your code must be idempotent in order to let [livereactload] do its
magic, see [more details here](https://github.com/milankinen/livereactload/pull/153#issuecomment-299560608).

When you create your application you need something like

```javascript
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Component from './components/Component'

const root = document.getElementById('app')

render(
  <AppContainer>
    <Component />
  </AppContainer>,
  root
)
```

Then add the following npm script to your *package.json*

```json
"start": "NODE_PATH=. budo -d . -s bundle.js -o index.js -- -t babelify -p livereactload",
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
[React]: https://reactjs.org/ "React"
[react-dom]: https://www.npmjs.com/package/react-dom "React DOM"
[react-redux]: https://github.com/reactjs/react-redux "React Redux"
[Redux]: http://redux.js.org/ "Redux"
[livereactload]: https://github.com/milankinen/livereactload "LiveReactload"
[redux_counter]: https://github.com/reactjs/redux/tree/master/examples/counter "Redux example"
[redux-thunk]: https://github.com/gaearon/redux-thunk "Thunk middleware for Redux"
[npm]: https://npmjs.org/ "npm"
