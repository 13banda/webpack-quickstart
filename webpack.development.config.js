const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js')

module.exports = merge(common,{
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase : './dist',
    hot: true,
  },
  plugins : [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
});
