var webpack = require('webpack');
var path = require('path');


var config = {
    iconPath: 'node_modules/react-icons'
};

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src/js', 'assets'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.js$/,
      exclude: /(node_modules(?!\/react-icons)|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  presets: [
    'es2015', 'stage-0', 'react'
  ],
  devtool: 'source-map'
};
