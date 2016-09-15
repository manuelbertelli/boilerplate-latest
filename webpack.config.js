module.exports = {
  entry: "./src/index",
  output: {
    path: "./",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    host: "0.0.0.0"
  },
  devtool: '#source-map',
  watchOptions: {
    poll: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
