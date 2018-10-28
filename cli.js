#!/usr/bin/env node

const babelify = require('babelify')
const budo = require('budo')
const fs = require('fs')
const path = require('path')

const indexFile = 'index.js'

const indexPath = path.join(process.cwd(), indexFile)

const indexContent = `
import React from 'react'
import ReactDOM from 'react-dom'

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(
  <div>
    You can start coding <em>index.js</em> file.
  </div>,
  root
)
`

function start () {
  budo(indexFile, {
    live: true,
    open: true,
    pushstate: true,
    stream: process.stdout,
    browserify: { transform: babelify }
  })
}

fs.stat(indexPath, err => {
  if (err && err.code === 'ENOENT') {
    // If file does not exist, create it...
    fs.writeFile(indexPath, indexContent, err => {
      if (err) {
        console.error(err)
      } else {
        // ..then start the server.
        start()
      }
    })
  } else {
    // If index file already exists, start the server.
    start()
  }
})
