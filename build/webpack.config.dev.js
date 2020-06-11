const path = require('path');

const webpack = require('webpack');

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const base = require('./webpack.config.base');
const { handleEnv } = require('./utils');
/**
 * @type {import('webpack').Configuration}
 */

module.exports = merge(base, {
  mode: 'none',
  stats: 'none',
  devtool: '#@cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: false,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': handleEnv(path.join(__dirname, '..', '.env.development')),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'index.html'),
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
});
