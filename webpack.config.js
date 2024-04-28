const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve("./src/index.js"),
  output: {
    path: path.resolve("./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve("./public/index.html") }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" }],
  },
  devServer: {
    port: 3000,
  },
};
