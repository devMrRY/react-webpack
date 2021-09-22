const path = require("path");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { main: path.resolve("./src/index.js") },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, "dist"),
    writeToDisk: false,
    compress: true,
    hot: true,
    watchContentBase: true,
  },
  //loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["css-loader", "style-loader"],
      },
    ],
  },
  //plugins
  plugins: [
    new htmlPlugin({
      title: "WEBPACK-BASE-CONFIG",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
