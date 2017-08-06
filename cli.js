#!/usr/bin/env node

const budo = require('budo')
const babelify = require('babelify')

budo('index.js', {
  live: true,
  open: true,
  stream: process.stdout,
  browserify: { transform: babelify }
})
