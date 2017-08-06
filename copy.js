const path = require('path')

const copyIfItDoesNotExist = require('./copyIfItDoesNotExist')

const upFolder = path.resolve(path.join(__dirname, '..', '..'), 'node')

const isInstalledLocally = require('module').globalPaths.indexOf(upFolder) === -1
console.log(require('module').globalPaths)
console.log(upFolder)
console.log(isInstalledLocally)

// Do nothing if package is installed globally.
if (isInstalledLocally) {
  // If package is installed locally, read argument and proceed.
  const fileName = process.argv[2]
  const fileNameDest = process.argv[3] || fileName

  copyIfItDoesNotExist(__dirname, fileName, fileNameDest)
}
