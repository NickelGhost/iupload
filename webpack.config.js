const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'public/main.css'
})

const uglifyJs = new UglifyJsPlugin()

function sassRules() {
  return [
    {
      test: /\.(sass|scss)$/,
      loader: extractSass.extract(['css-loader', 'sass-loader'])
    }
  ]
}

function scriptRules() {
  return [
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: { presets: ['env', 'react'] }
    }
  ]
}

module.exports = {
  entry: [
    './resources/sass/main.scss',
    './resources/js/main.js'
  ],
  output: {
    filename: 'public/main.js'
  },
  module: {
    rules: sassRules().concat(scriptRules())
  },
  plugins: [
    extractSass, uglifyJs
  ]
}