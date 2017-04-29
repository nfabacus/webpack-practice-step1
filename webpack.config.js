const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/   //with the rejex, this will specifically look for js file to apply the loader.
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        // use: ['style-loader', 'css-loader'], //these loaders are applied from right to left. so, css-loader, then style-loader is applied.
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
