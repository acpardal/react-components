var path = require('path');

module.exports = {
	devtool: "inline-source-map",
	entry: path.resolve(__dirname, "src/main.jsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
    publicPath: "/dist"
	},
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      { test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
