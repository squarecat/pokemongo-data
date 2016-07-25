var webpack = require('webpack');
var path = require('path');

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
    },{
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
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: true }
    })
  ],
  presets: [
    'es2015', 'stage-0', 'react'
  ]
};