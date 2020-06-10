
const global = require('./src/_data/global.js')

module.exports = function(config) {
  config.addShortcode("link", function(file) {
    return `<link href="/assets/css/${file}.${global.hash}.css" rel="stylesheet">`
  });
  
  config.addShortcode("script", function(file) {
    return `<script src="/assets/js/${file}.${global.hash}.js"></script>`
  });
  
  config.addShortcode("img", function(file, alt = '', classes = '') {
    const parts = file.split('.')
    return `<img src="/assets/images/${parts[0]}.${global.hash}.${parts[1]}" alt="${alt}" class="${classes}"  />`
  });

  return {
    dir: {
      input: './src',
      output: './dist',
      includes: '_includes',
      layouts: '_layouts'
    }

  }
}