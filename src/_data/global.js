const fs = require('fs')

module.exports = {
  hash: fs.readFileSync('./src/_data/hash', 'utf8')
};