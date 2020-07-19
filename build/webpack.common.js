const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require("babel-polyfill");

const hash = fs.readFileSync('./src/_data/hash', 'utf8')


module.exports = {
  entry: [
    'babel-polyfill', 
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: `assets/js/[name].${hash}.js`
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `assets/css/[name].${hash}.css`
    }),
    new CopyPlugin({
      patterns: [
        { from: './vendor/**/*', to: '' }
      ],
    }),    
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['**/*', '!**/*.html', '!*.png', '!*.jpg'],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `assets/images/[name].${hash}.[ext]`
            }
          }
        ],
      },        
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'dist',
              hmr: process.env.NODE_ENV === 'development',
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer')
              ]
            }
          },
        ]
      }
    ],
  }
}