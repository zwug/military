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
    publicPath: '', // for local
    // publicPath: '/military/public/', // for github pages
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file?name=images/[name]--[hash:2].[ext]'
      },
      {
        test: /\.(woff|ttf|eot)/,
        loader: 'url'
      },
      {
        test: /\.mp4/,
        loader: 'file?name=videos/[name].[ext]'
      },
      {
        test: /\.pdf/,
        loader: 'file?name=docs/[name].[ext]'
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
    })
  ],
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/components')
    }
  }
};

module.exports = config;
