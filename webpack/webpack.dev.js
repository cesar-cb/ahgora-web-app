const merge = require('webpack-merge');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [new AsyncChunkNames()]
});
