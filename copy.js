const path = require('path')

const copyIfItDoesNotExist = require('./copyIfItDoesNotExist.js')

const nodeFolder = path.resolve(path.join(__dirname, '..', '..'), 'node')

const isInstalledLocally = require('module').globalPaths.indexOf(nodeFolder) === -1

// Do nothing if package is installed globally.
if (isInstalledLocally) {
  // If package is installed locally, read arguments and proceed.
  const fileNames = process.argv.slice(2)

  fileNames.forEach((fileName) => {
    const filePath = path.join(__dirname, fileName)
    const filePathDest = path.join(__dirname, '..', '..', fileName)

    copyIfItDoesNotExist(filePath, filePathDest)
  })
}
