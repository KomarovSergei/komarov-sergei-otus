const path = require('path');
const fs = require('fs');
const async = require('async');

const outObject = { files: [], dirs: [] };

function getFiles(dirPath, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) return callback(err);

    async.eachSeries(files, (fileName, eachCallback) => {
      const filePath = path.join(dirPath, fileName);

      fs.stat(filePath, (err, stat) => {
        if (err) return eachCallback(err);

        if (stat.isDirectory()) {
          getFiles(filePath, (err, subDirFiles) => {
            if (err) return eachCallback(err);

            outObject.dirs.push(filePath);
            eachCallback(null);
          });
        } else {
          if (stat.isFile()) outObject.files.push(filePath);

          eachCallback(null);
        }
      });
    }, err => callback(err, outObject));
  });
}

module.exports = getFiles;