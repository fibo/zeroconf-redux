const fs = require('fs')
const path = require('path')

function copyIfItDoesNotExist (fileName, fileNameDest) {
  const filePath = path.join(__dirname, fileName)
  const filePathUp = path.join(__dirname, '..', '..', fileNameDest)

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

module.exports = copyIfItDoesNotExist
