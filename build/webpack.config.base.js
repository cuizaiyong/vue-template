const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: path.join(__dirname, '..', 'src/main.js'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
