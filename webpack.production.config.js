const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode : 'production',
    devtool: 'source-map',
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
     }),
     new webpack.HashedModuleIdsPlugin(),

     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
     }),
     new OptimizeCSSAssetsPlugin({})
   ],

 });
