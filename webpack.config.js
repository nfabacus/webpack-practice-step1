const path = require('path');

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
      }
    ]
  }
};

module.exports = config;
