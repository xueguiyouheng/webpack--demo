const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PostCss = require('autoprefixer');
module.exports = {
    entry:{
        app:'./app/index.js',
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname, 'dist'),
    },
    devServer:{
        port:8080,
    },
    module:{
        loaders:[
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader',query:{presets:['env','react']} },
            { test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
            { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000' },  // 限制大小5kb
            { test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000' } // 限制大小小于5k
        ]
    },
    

    plugins:[
        //将处理的js插入'./app/index.html中'
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, './app/index.html')
        }),
        //热加载
        new webpack.HotModuleReplacementPlugin(),

       //可以在业务js代码中使用__DEV__判断是否是dev模式（dev模式下提示错误，测试报告等，production模式不提示）
       new webpack.DefinePlugin({
           __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),
      

    ]
}
