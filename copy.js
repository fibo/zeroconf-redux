const path = require('path')

const copyIfItDoesNotExist = require('./copyIfItDoesNotExist')

const upFolder = path.resolve(path.join(__dirname, '..', '..'), 'node')

const isInstalledLocally = require('module').globalPaths.indexOf(upFolder) === -1

// Do nothing if package is installed globally.
if (isInstalledLocally) {
  // If package is installed locally, read argument and proceed.
  const fileName = process.argv[2]
  const fileNameDest = process.argv[3] || fileName

  const filePath = path.join(__dirname, fileName)
  const filePathDest = path.join(process.cwd(), fileNameDest)

  copyIfItDoesNotExist(filePath, filePathDest)
}
