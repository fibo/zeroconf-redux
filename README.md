# zeroconf-redux

> is a minimal [React]/[Redux] dev stack, on top of [browserify] + [budo]

<img class="apple icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD20lEQVRoQ+2ajZENQRSFz0aACBABIkAEiAARIAJEgAgQASJABIgAESAC6nvVR92d7Z7unt6ZQemqrX373uuee+7Puae790j7jRuSbkq6nH6uS3q31JyjpRMH5l2T9FzShckajyU9Wrru1kCeSLqfjP0h6bUkgJ2X9NcAIQp3EgiMfirpe0qnq5IepPcWBWWriBgEUSACH4O1P9PrK5P3uwBtAYSCfiUpB4IIAZLPznZZPvnyFkA+p8LOpc7bFKGh+gDT2kBiNGApasIjRmP6WXdw1gbyQtJtSS9DoWMkvYNokE5DRW7EawP5kIy+lagWw++FfjEF2B2J0wJCStADGJ8mqcN7ZiQaHSBIJxe1QfD3pbTG+6VIlkQEaYFB0OiUab6kvkCjexOARPtgKFiMQQ3l2IqU9BpN2HqAlKQFXoyRaXpw+BLA3FdojHHgmLstGqwVyFRa0JXxGg+KgyImWnjaKZcDRhra69M1cArzkTJeg+dBCsXRAiRKi2dBK9U8DyirW9IH6sXzpEzs7KV1mAOYh+kLACc62VEDEqUFnsaIrQfOAMSZ9DsLZg6IGxaGD+0VTgF5zIqsJisBIaxIC37jATyy14ggis2zBATeJzdhJNhqr0GR00AhBzKkWFslIN9SNIak9SB6HIiMgZ4hjim7HVs+B8RCDy+wwF7DqtnyZtaOHBCHc1haD3ig25k5IJxk0GGbPDFg7NxUq+ZmoskB+RPqw6q5uUZzQKxYa81ypWAclu224T+QNcORdBmS5GKNdm1HLiKIOxbZU5Z0E84ca+0JxMqieSs8B6SZ+lZIM/YkNERGU3rlgNgbPXuPFbAchConMGwd6Gndnd0aB4EGj+81iAo2zO5D5oo98vi5zMnIlsDQehS+wSDj4yHfb1tKTQ9PcESzZ53YSDKE9AIMINj+QgLHRgmId4d4A/bae7DBo2Y4imKc2GDN7RDR/11NaWW0cdd6ojXM6Smzxt7sZf+YTbP7pDkgFBoqlLyEvWZ3aBtGI1u3NYVbOk1f2e4Ty1fPEGpAIpc37w1OGWXs8kXZVAOCTfbGXg3Sm6zZWm0BAlsAYvgKeUGk7MSv6SAk2wxZtwUI33Ph83orVewDiKZntgKJKYZXANNyEL0gCIcp3VdzPUB4gFmsBoYCRbkiL3jty07A84PEKDmCOVwEkdJD+5GaFw3GwChCjOLB8Tartg5zOEPjZgvHEAWOR/3fEc0gempkapSLsGSs/8/EdyE0U4D6zqR2EdR9ONibWtFw0gUlSirEy0yMJ2pFhkmL+GaL+Wg6mAmRipO6VcQIkFrqbPr5PwPkFyi46TOiaV8mAAAAAElFTkSuQmCC" width="50" height="50" /> <img class="linux icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAE8klEQVRoQ93aj83cRBAF8EkFhAqACgIVABUAFRAqACoAKgAqgFQAVABUEKgAqACoAPST/KSRY5/Xvv0UKSOdcp/P3p03b/6u86heEXn0iuCohwDyZlV9XFXvLR+2+qeqfquqH6vq2fL3VBvOBvJhVX1XVY9vaAnU51X1/UwkM4G8XVXPF+VY/ZuFBZcAwxCg2CIfLQxNwTMTCBDAfFVVX97Q7rOq+npxr9enoKiaFiOs/XNV/VVVYuRIxMuTqvpklovNYgQDX7Qg5kpcCzus/3RBJi7Eh79d/2lxtyPgh7/PAvJLVb27sdufGwxhQ3z8MdO9ZgGhFJf6vVlYquU+W9ewgsXXquqtqgL4LpkF5L+NTCRD/bDKTrmGlX8XFqdkr9lArJegFwcA5hqs7y/XfBc/4uooyw0x9RBAwk4U4GKYIPbzOza4loBXc5IMhpTeumk2EFnpllIB9esCBHvc7J3LCJqF7l3D82sWuIv0Kw0D5vNG2yj1I8/dHfCzGaHrXpFL0YyL+RdDHyy1BfDL8hBA+D5GukjN4kGsSMdaGYIpTaY6JBFclhlAuM/fKw3ECmb89umq98KClEv8roaoJ4AAdElmAEl7ot3gJnsiO2GE0r125Pm7gv5eIL11V625j9TKyqo6AZD/s3bvyQS42YS4XzK4XFPuAcIttO78/9tFERb3Xau+J+l8e1x0g1xysXuAxLqCl+JqAjYAi6W3wPgdGC6GxWSrrIcddeXWGi+sexUIZTSKhAVlHtdGXaMPV5RO0xi2jlidBkRWMrIKYJuLjdGhKkqk9e8tytpAw1nsCiN9M9bkUuLlrG/3AmnkjSt1F5MQhuQKkGzEklxCB6t3othZ2avsyWLDo/AVIBmiMGDeuMJGAPf5pDeOqfgADbFyFkjSpHgQsICcjY01a1xKBuvu1WvL0OB1FkiyDbciAr6n0LOu5f4E/Vrh7sKH88pZIPFpvmtxBw5ng3wNNgqvU3eSwVD8nQUS61FetiJn11gD2VO4N6OHexzesNo1gc6f0/HeOxTdsnwGr0M9D29oQLqFFEF/n6nme/GTurSVoaYDoTRXykDUlZJ1uBpwZ8W66tC6yRSL1hM/fRDbXX+EkQ5CU8gVbJxTdYvbVAI4CyatzpEBDhPKHhDK658onUPpgIhbCfzMHFGEBTV8o52rOMu7FM+IvT4e2FONOTwj3gPCjXrLIQWqwl3BPkOgP6D4upowwk5iwLoAqO5GY6kdCHvS5bDC7wHJBkeU9jE157lqy+jYmn26IcJu+qxU/psVfg/ImWOaPqaaGD07Wl/6uZYBC8vW8z3r+I4lsuu6e0DSzI1U1d6Ox5ojg9GZgtfBbB4d7QE51R60gzZARqdEU6VYGDGWddPnbbK9B6RPgIcN2+p8Kmdat1JqQLjniL312dhmBtsDkrR4pv3oLhY/Z+1kL2ncuRfL9veMt4KYiysDuR9ocfJCet8DkgDmjyxMoZG3SuvD7KNC5/f1HOIaFrCW1xE5vd+d4feAyB4eUowirOCaD3rXwLaOTkeArHWwd84B8h7l8ID7VotCMRbx4TYdFAWlRx+gSM54D6vwcn+Ofvpgpu3J6wgsiM8RTzg1S/DT/O+FW2e8R0U0LCXFb7F2+i3WSNO4tVFe4FAmr6VVZ4GYQjbiVp73TNqbK2sMV98RhV76PVcZeemKrxX4H/0KT0KomTCbAAAAAElFTkSuQmCC" width="50" height="50" /> <img class="windows icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABL0lEQVRoQ+2ZYQ6DIAyF8WTb0baTzZ1Ms4QmSMBXRhEkzz/GYEq/vrapsrhJrmUSDkeQ0ZSkIhco8vB7PDP3gwg9FUGOolhdBlLr6NeTrNH945/NQFo5Ko7nFNlKQSwcFRtv51wcWZQ61SBCjDbKSR9GNBk9ZBisqxWRFzWOIp+GALHoaAQ5kbo4tahIEE2mFlOrUTowtZhaTK3zIYU1YlkjaCDsvQ4/rLRj/G1AOGs16oBiltNvTS2w/Vq2XxY7i11Xjexaujil32LXYtdKdJr4p7M8y69UTcoNkVrIUQ1oVxAByB15yVGBBlRsvIJjhRJFU3uo2y9y0BL0ZytWFoGagyBgC0VToAIOvxCRg1brtaDDgKCAINDbgCDQw7rFqF60YauXCdIqsv/anUaRHdBigjN/EiNKAAAAAElFTkSuQmCC" width="50" height="50" />

[![NPM version](https://badge.fury.io/js/zeroconf-redux.svg)](http://badge.fury.io/js/zeroconf-redux) [![Dependency Status](https://david-dm.org/fibo/zeroconf-redux.svg)](https://david-dm.org/fibo/zeroconf-redux/)

[Installation](#installation) |
[Usage](#usage) |
[License](#license)

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

Assumption: your project folder contains just two files: *index.js* and *index.html*.

Just install

```bash
npm install zeroconf-redux
```

and launch the dev server with

```bash
node_modules/.bin/budo index.js --dir . --live --open -- -t babelify
```

Your browser will open and you can start coding now!


### Use a package.json

If you have no *package.json* yet, I highly recommend to create one, for instance with

```bash
npm init
```

or even, for the lazy ones like me :), `npm init -y`.

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

**NOTA BENE** the instructions below work, but, they will be changed and
updated when next HMR will be released.

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
