const pkg = require('./package')
import createBanner from 'create-banner'
const babel = require('rollup-plugin-babel')
var sass = require('node-sass');
const fs = require('fs')
const banner = createBanner()

sass.render({
  file: 'src/cropme.sass',
}, function (err, result) {
  if (!err) {
    fs.writeFile('dist/cropme.css', banner + result.css, function (err) {});
  }
});

module.exports = {
  input: 'src/index.js',
  output: {
    banner,
    name: "Cropme",
    file: `dist/${pkg.name}.js`,
    format: 'umd',
  },
  plugins: [
    babel(),
  ],
};
