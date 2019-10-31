const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

const { PORT } = dotenv.parse(fs.readFileSync(path.join(__dirname, '.env')));

module.exports = {
  mode: 'development',

  devServer: {
    historyApiFallback: true,
    inline: true,
    port: PORT || 3000,
    hot: true,
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
};
