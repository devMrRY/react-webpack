const path = require('path');
const webpack= require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: false,
    compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlPlugin({
      template: './src/index.html',
    })
  ]
}