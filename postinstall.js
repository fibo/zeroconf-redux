const fs = require('fs')
const path = require('path')

const upFolder = path.resolve(path.join(__dirname, '..', '..'))

// Do nothing if package is installed globally.
if (require('module').globalPaths.indexOf(upFolder) === -1) {
  // If package is installed locally, read arguments and proceed.
  const action = process.argv[2]

  if (action === 'copy') {
    const fileName = process.argv[3]

    copyIfItDoesNotExist(fileName)
  }
}

function copyIfItDoesNotExist (fileName) {
  const filePath = path.join(__dirname, fileName)
  const filePathUp = path.join(__dirname, '..', '..', fileName)

  fs.stat(filePath, function (err, pathStat) {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    if (pathStat.isFile()) {
      fs.stat(filePathUp, function (errUp, pathStatUp) {
        // If file does not exist, copy it.
        if (errUp && errUp.code === 'ENOENT') {
          fs.createReadStream(filePath)
            .pipe(fs.createWriteStream(filePathUp))
            .on('error', console.error)
        }
      })
    }
  })
}
