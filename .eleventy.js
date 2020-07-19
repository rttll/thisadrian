
const global = require('./src/_data/global.js')

module.exports = function(config) {
  // config.setLiquidOptions({
  //   dynamicPartials: true
  // })
  
  config.addShortcode("link", function(file) {
    return `<link href="/assets/css/${file}.${global.hash}.css" rel="stylesheet">`
  });
  
  config.addShortcode("script", function(file) {
    return `<script src="/assets/js/${file}.${global.hash}.js"></script>`
  });
  
  config.addShortcode("img", function(file, classes = '', attrs = '') {
    const parts = file.split('.')
    return `<img 
      src="/assets/images/${parts[0].trim()}.${global.hash}.${parts[1]}" 
      alt="" 
      class="${classes}"
      ${attrs} />`
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