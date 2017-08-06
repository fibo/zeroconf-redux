#!/usr/bin/env node

const budo = require('budo')
const babelify = require('babelify')
const fs = require('fs')
const path = require('path')

const babelrc = path.join(__dirname, '.babelrc')
const babelrcDest = path.join(process.cwd(), '.babelrc')

function launchBudo () {
  const entry = 'index.js'

  budo(entry, {
    browserify: { transform: babelify },
    live: true,
    open: true,
    stream: process.stdout
  })
}

fs.stat(babelrcDest, function (err, pathStat) {
  // Create .babelrc file.
  if (err && err.code === 'ENOENT') {
    fs.createReadStream(babelrc)
      .pipe(fs.createWriteStream(babelrcDest))
      .on('error', console.error)
      .on('clone', launchBudo)
  } else if (pathStat.isFile()) {
    launchBudo()
  }
})
