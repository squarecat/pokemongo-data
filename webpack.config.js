var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://127.0.0.1:8080/',
    // 'webpack/hot/only-dev-server',
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src/js'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  presets: [
    'es2015', 'stage-0', 'react'
  ],
  devtool: 'inline-source-map'
};