# zeroconf-redux

> is a [React]/[Redux] dev stack, on top of [browserify] + [budo]

[![NPM version](https://badge.fury.io/js/zeroconf-redux.svg)](http://badge.fury.io/js/zeroconf-redux)

[Quick start](#quick-start) |
[Usage](#usage) |
[Production build](#production-build) |
[Customization](#customization)

**UPDATE** latest version 5 replaces UglifyJS with [TerserJS].

## Quick start

Just run

```bash
npm install zeroconf-redux --save-dev
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

* [@babel/core]
* [@babel/plugin-proposal-class-properties]
* [@babel/plugin-proposal-object-rest-spread]
* [@babel/preset-env]
* [@babel/preset-react]
* [@reduxjs/toolkit][redux-toolkit]
* [babelify]
* [browserslist]
* [budo]
* [core-js]
* [cross-env]
* [envify]
* [eslint-plugin-react-hooks]
* [react][React]
* [react-dom]
* [react-redux]
* [TerserJS]
* [uglifyify]

On `postinstall` the following files are created, if they do not exist:

* *.babelrc*
* *.browserslistrc*
* *.editorconfig*

If you run `npx zeroconf-redux` commmand, a file *index.js* is created if it does not exists and development server will start in watch mode, with a default *index.html* (in memory).

Let's assume there is an *index.html* in the same folder as the *package.json* with a content like the following

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

Then, adding an npm script to your *package.json*, to run [budo] dev server, something like

```json
    "start": "budo ${npm_package_main} --dir . --serve bundle.js --open --live --pushstate -- -t babelify",
```

where:

* `--dir .`: serves current folder content statically.
* `--serve bundle.js`: set the name of JS bundle produced by browserify.
* `--open`: opens default browser on start.
* `--live`: enables livereload.
* `--pushstate`: needed if you added [react-router].

<sub>See [budo cli docs](https://github.com/mattdesl/budo/blob/master/docs/command-line-usage.md) for more details.</sub>

Your *index.js* should look something like

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
your package main attribute points to your entry file, for instance *index.js*,
and your bundle file is *dist/NAME.min.js*, where *NAME* is
your package name, you could add an npm script like the following

```json
    "browserify": "cross-env NODE_ENV=production browserify ${npm_package_main} -t babelify -g [ envify --NODE_ENV production ] -g uglifyify | terser --compress --mangle > dist/${npm_package_name}.min.js",
```

Unfortunately at the time of this writing, this may not work on *Windows*: the environment variables `npm_package_main` and `npm_package_name` could be undefined if you launch some npm script from an *MSDOS prompt*, 'cause *npm* expects it is running in a *bash* environment.
Hence you need to hardcode file paths if you need cross platform compatibility.

## Customization

### src folder

You may want to organize your code into a *src/* folder, if so, do

```bash
mkdir src
mv index.js src/
```

Then edit your *package.json*

```json
  "main": "src/index.js"
```

For sure it is also a good idea to create a *src/components/* folder and a *Root.js* implementing your `<Root />` component.
By the way, I like to start almost from scratch with the structure I feel more inspiring for that project.
For example; if hosted on *Heroku* I create a *public/* folder; if hosted on *AWS* I like more a *bucket/* or (in some cases) *buckets/* folder.
Programming is a creative process, **you know**.

### Babel preset env

Default *.babelrc* created on *postinstall* is the following.
```json
{
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "corejs": 3,
        "useBuiltIns": "entry"
      }
    ],
    "@babel/preset-react"
  ]
}
```

You may want to customize it, for more details see [@babel/preset-env].

### Browserslist

Default *.browserslistrc* created on *postinstall* is the following.

```
> 0.5%
last 2 versions
Firefox ESR
not dead
```

You may want to edit target browsers, for more details see [browserslist].

### Linter

It is strongly recommended to lint your code. Do not think it too much, just launch

```bash
npm install babel-eslint pre-commit standard --save-dev
```

and add the following to your *package.json*

```json
  "scripts": {
    "lint": "standard"
  },
  "pre-commit": [
    "lint"
  ],
  "standard": {
    "parser": "babel-eslint"
  },
```

Now on every commit, you will check the code with [standard] linter. If you like semicolons you can go for [semistandard].

If you are using *React hooks* you will need also [eslint-plugin-react-hooks], so you need to use [standardx] linter.
Same instructions as above, but substitute *standard* with *standardx*, then for example add the following to your *package.json*

```json
  "eslintConfig": {
    "plugins": [
      "react-hooks"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  },
```

### TypeScript

You can use Babel and TypeScript together, I could achieve it in my side project [GoSeven](https://github.com/go-seven/go-seven.com). It was tricky but it is worth to use typings and browserslist queries together.

Install additional dependencies

```bash
npm install typescript tsify @babel/preset-typescript @types/react @types/react-dom
```

and edit your `.babelrc` presets

```diff
{
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "corejs": 3,
        "useBuiltIns": "entry"
      }
    ],
+   "@babel/preset-typescript",
    "@babel/preset-react"
  ]
}
```

Then modify your *package.json*, notice that `-p tsify` and `-t babelify` options order matters.

```diff
-    "start": "budo ${npm_package_main} --dir . --serve bundle.js --open --live --pushstate -- -t babelify",
+    "start": "budo ${npm_package_main} --dir . --serve bundle.js --open --live --pushstate -- -p tsify -t babelify",
```

## License

[MIT](http://g14n.info/mit-license/)

[AsyncActions]: http://redux.js.org/docs/advanced/AsyncActions.html "Async Actions Redux documentation"
[browserslist]: https://github.com/browserslist/browserslist "Browserslist"
[babelify]: https://github.com/babel/babelify "babelify"
[@babel/core]: https://www.npmjs.com/package/@babel/core "babel-core"
[@babel/plugin-proposal-class-properties]: https://babeljs.io/docs/en/babel-plugin-proposal-class-properties "Babel plugin-proposal-class-properties"
[@babel/plugin-proposal-object-rest-spread]: https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread "Babel plugin-proposal-object-rest-spread"
[@babel/preset-env]: http://babeljs.io/env "Babel env preset"
[@babel/preset-react]: https://babeljs.io/docs/plugins/preset-react/ "Babel React preset"
[budo]: https://github.com/mattdesl/budo "budo"
[browserify]: http://browserify.org/ "browserify"
[core-js]: https://github.com/zloirock/core-js "core-js"
[counter_example]: https://github.com/fibo/zeroconf-redux/tree/master/examples/counter "counter example"
[cross-env]: https://github.com/kentcdodds/cross-env#readme "cross-env"
[envify]: https://github.com/hughsk/envify "envify"
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks "React hooks Eslint plugin"
[redux-toolkit]: https://github.com/reduxjs/redux-toolkit
[react]: https://reactjs.org/ "react"
[react-dom]: https://www.npmjs.com/package/react-dom "react dom"
[react-redux]: https://github.com/reactjs/react-redux "React Redux"
[react-router]: https://reacttraining.com/react-router/ "React Router"
[Redux]: http://redux.js.org/ "Redux"
[redux_counter]: https://github.com/reactjs/redux/tree/master/examples/counter "Redux example"
[redux-thunk]: https://github.com/gaearon/redux-thunk "Thunk middleware for Redux"
[semistandard]: https://github.com/Flet/semistandard "Semi-Standard JS"
[standard]: https://standardjs.com/ "Standard JS"
[standardx]: https://github.com/standard/standardx "Standardx linter"
[npm]: https://npmjs.org/ "npm"
[uglifyify]: https://github.com/hughsk/uglifyify "uglifyify"
[TerserJS]: https://github.com/terser-js/terser "Terser JS"

