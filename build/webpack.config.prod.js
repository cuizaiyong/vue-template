const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const base = require('./webpack.config.base');
const { handleEnv } = require('./utils');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = merge(base, {
  mode: 'production',
  stats: {
    modules: false,
    children: false,
    chunks: false,
  },
  devtool: '#@cheap-source-map',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'js/[name].[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vue: {
          test: /[\\/]node_modules[\\/]vue/,
          priority: -1,
        },
        vendor: {
          minChunks: 2,
          priority: -2,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
    runtimeChunk: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': handleEnv(path.join(__dirname, '..', '.env.production')),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'index.html'),
    }),
  ],
});
