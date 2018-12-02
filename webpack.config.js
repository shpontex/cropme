const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  cache: false,
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "cropme.css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        // 'postcss-loader',
        'sass-loader',
      ],
    }]
  }
}