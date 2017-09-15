var webpack = require('webpack')
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
console.log(__dirname);

module.exports = {
    entry: path.resolve(`${process.cwd()}/src/index/index.js`),
    output:{
        path:path.resolve(`${process.cwd()}/static`),
        chunkFilename: '[name].js',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        enforceExtension:false,
    },
    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=stage-0',
                exclude: /node_modules/
            },
            {
                test:/\.scss$/,
                loader:'style!css!sass?sourceMap'
            },
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                query: {
                    limit: 30,
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        //自动生成index.html
        // new HtmlWebpackPlugin({
        //     filename:'./index.html',
        //     template: path.resolve(__dirname,'index.html'),
        //     inject: true
        // }),
        //清空static目录
        new CleanWebpackPlugin(['static']),
        //按需加载css
        new ExtractTextPlugin('./css/[name].min.css'),

        new webpack.optimize.CommonsChunkPlugin('common'),
        new webpack.ProvidePlugin({$:'jquery'})
    ]
}