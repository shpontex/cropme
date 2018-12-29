const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { BannerPlugin } = require('webpack');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const package = require('./package.json')
const name = package.name + ' ' + package.version + "\n"
const homepage = package.homepage + '\n\n'
const copyright = 'Copyright 2018 khereddine radhouane\nReleased under the MIT license\n'

module.exports = {
  output: {
    filename: 'cropme.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "cropme.css",
      chunkFilename: "[id].css"
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
