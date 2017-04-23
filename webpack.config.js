const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.join(__dirname, './dist');
const dependencies = require('./package').dependencies;
const vendorDependencies = Object.keys(dependencies).filter((dependency) => !dependency.includes('express'));

module.exports = function () {
  return {
    entry: {
      app: './scripts/index.js',
      vendor: vendorDependencies
    },
    output: {
      path: distPath,
      filename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'html/index.html',
        inject: false,
        hash: false,
        minify: false
      })
    ],
    devServer: {
      host: '0.0.0.0',
      port: 4321,
      contentBase: distPath,
      publicPath: '/',
      historyApiFallback: true,
      compress: true,
      inline: true,
      noInfo: false,
      quiet: false
    }
  };
};
