#!/usr/bin/env node

const budo = require('budo')
const babelify = require('babelify')

const entry = process.argv[0] || 'index.js'

budo(entry, {
  browserify: { transform: babelify },
  live: true,
  open: true,
  stream: process.stdout
})
