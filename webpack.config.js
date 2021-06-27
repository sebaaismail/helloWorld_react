var webpack = require("webpack");

var path = require("path");

module.exports = {
  target: "web",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: __dirname + "/dist/assets",
    filename: "bundle.js",
    publicPath: "assets",
  },
  mode: "development",
  devServer: {
    open: true,
    contentBase: "./dist",
    publicPath: "/assets/",
    port: 3000,
    hot: false,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
