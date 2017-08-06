const fs = require('fs')

function copyIfItDoesNotExist (filePath, filePathDest) {
  fs.stat(filePath, function (err, pathStat) {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    if (pathStat.isFile()) {
      fs.stat(filePathDest, function (errUp, pathStatUp) {
        // If file does not exist, copy it.
        if (errUp && errUp.code === 'ENOENT') {
          fs.createReadStream(filePath)
            .pipe(fs.createWriteStream(filePathDest))
            .on('error', console.error)
        }
      })
    }
  })
}

module.exports = copyIfItDoesNotExist
