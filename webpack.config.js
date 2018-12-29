const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { BannerPlugin } = require('webpack');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');

const package = require('./package.json')
const name = package.name + ' ' + package.version + "\n"
const homepage = package.homepage + '\n\n'
const copyright = 'Copyright 2018 khereddine radhouane\nReleased under the MIT license\n'
const env = process.env.NODE_ENV

module.exports = {
  watch: env == 'develop',
  output: {
    path: path.resolve(__dirname, ""),
    filename: 'dist/cropme.min.js'
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
    }]
  }
}
