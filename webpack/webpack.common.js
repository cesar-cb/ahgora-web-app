const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin')

const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, '../'),
    }),
    new WebappWebpackPlugin({
      logo: path.resolve(__dirname, '../src/favicon.png'),
      favicons: {
        appName: 'ahgora-web-app',
        appDescription: 'Ahgora punch pointer wrapper',
        developerName: 'Cesar Boaventura',
        developerURL: 'https://cesarboaventura.dev',
        background: '#242F3F',
        theme_color: '#242F3F',
      }
    }),
  ],
};
