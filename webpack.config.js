const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    index: [
      path.join(__dirname, 'src/index.js'),
      path.join(__dirname, 'styles/index.less')
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/military/public/',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file?name=images/[name].[ext]'
      },
      {
        test: /\.(woff|ttf|eot)/,
        loader: 'url'
      },
      {
        test: /\.svg/,
        loader: 'url!svgo'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('index.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/components')
    }
  }
};

module.exports = config;
