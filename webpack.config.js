const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {
  BannerPlugin
} = require('webpack');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');

const package = require('./package.json')
const name = package.name + ' ' + package.version + "\n"
const homepage = package.homepage + '\n\n'
const copyright = 'Copyright 2018 khereddine radhouane\nReleased under the MIT license\n'
const env = process.env.NODE_ENV
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    // minimize: false,
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        // compress: false,
        // mangle: false,
        output: {
          // comments: false,
         beautify: true,
        },
      },
    })],
  },
  output: {
    path: path.resolve(__dirname, ""),
    filename: 'dist/cropme.min.js',
    library: 'Cropme',
    libraryTarget: 'umd'
  },
  devServer: {
    filename: 'cropme.min.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "dist/cropme.min.css"
    }),
    new BannerPlugin({
      banner: name + homepage + copyright
    }),
    new OptimizeCSSAssetsPlugin()
  ],
  module: {
    rules: [{
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ["@babel/preset-es2015"]
      //   }
      // }
    ]
  }
}
