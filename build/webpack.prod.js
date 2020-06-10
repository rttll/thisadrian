const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: [ '/' ]
    })
  ]  
})