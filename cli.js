#!/usr/bin/env node

const budo = require('budo')
const babelify = require('babelify')
const fs = require('fs')
const path = require('path')

const packageJson = path.join(process.cwd(), 'package.json')
const entry = 'index.js'

fs.stat(packageJson, function (err, pathStat) {
  // File package.json is required.
  if (err && err.code === 'ENOENT') {
    console.error(`
Could not find package.json file, try creating one with

  npm init -y

`)
    process.exit(0)
  }

  if (pathStat.isFile()) {
    budo(entry, {
      browserify: { transform: babelify },
      live: true,
      open: true,
      stream: process.stdout
    })
  }
})
