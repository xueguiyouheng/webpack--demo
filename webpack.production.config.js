const pgk = require('./package.json');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:{
    app:path.resolve(__dirname, './index.js'),
    // vendor: Object.assign(pgk.dependencies)
    vendor: [
      'react',
      'react-dom',
      // 'react-redux',
      // 'react-router',
      // 'redux',
      // 'es6-promise',
      // 'whatwg-fetch',
      // 'immutable'
    ]
  },
    
  output: {
    path: path.resolve(__dirname, './build'),
    filename: './js/[name].[chunkhash:8].js',
    chunkFilename: './js/[name].js',
  },
  resolve:{
    // alias:{
    //     components: './src/components/'
    // },
    extensions: ['.jsx', '.js', '.json', '.less']
  },

  module:{
    loaders: [
      {
        test: /\.jsx?/,
        // Don't use .babelrc in `yarn link`-ed dependency's directory and use in current direction instead
        loader: 'babel-loader?babelrc=false&extends=' + path.resolve(__dirname, '.babelrc')
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {
              minimize: true, 
            },
          }, {
            loader: "less-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]' },
      { test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]' }
    ]
  },

  plugins:[
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by fjl."),

    //模板插件
    new HtmlWebpackPlugin({
        template:path.resolve(__dirname, './index.html')
    }),

    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),

    //去除警告部分
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        }
    }),

    // 分离CSS和JS文件
    new ExtractTextPlugin("./css/[name].[chunkhash:8].css"),
      
    new webpack.optimize.CommonsChunkPlugin({
        // 提供公共代码
        name: 'vendor',
        filename: './js/[name].js'
    }),

    //获取环境变量
    new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
}