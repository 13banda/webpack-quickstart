const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main :'./src/index.js',
  //  vendor: [
      // adding here vendor like react and loadesh as 'react',
    //]
  },
  plugins : [
    new HtmlWebpackPlugin({
     }),
    new CleanWebpackPlugin(['dist'],{
      //exclude : ["index.html"],
       verbose:  true,
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new WorkboxPlugin.GenerateSW({
     // these options encourage the ServiceWorkers to get in there fast
     // and not allow any straggling "old" SWs to hang around
     clientsClaim: true,
     skipWaiting: true
   })
  ],
  output: {
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module:{
    rules:[
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use : [
          'file-loader'
        ]
      },
      {
        test : /\.(woff|woff2|eot|ttf|otf)$/,
        use : [
          'file-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all"
            }
        }
    }
  }
};
