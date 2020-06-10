const fs = require('fs')
const crypto = require('crypto');
const hash = crypto.randomBytes(7).toString('hex');
fs.writeFile('./src/_data/hash', hash, () => {})