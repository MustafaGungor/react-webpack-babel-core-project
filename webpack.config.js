const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './assets/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './app/index.js',
  output: {
    path: './dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ],
    rules: [
          {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              use: 'babel-loader'
          },
          {
              test: /\.s?css$/,
              use: ["style-loader", "css-loader"]
          },
          {
              test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
              use: "file-loader",
              include: /fonts/
          }
      ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
