let { smart } = require('webpack-merge')
let base = require('./webpack.base.js')
let Webpack = require("webpack")

module.exports = smart(base,{
    mode: 'development',
    //实时打包
    watch: true,
    watchOptions: { //监控属性
        poll: 1000, //每秒 问我 1000次
        aggregateTimeout: 500, //防抖 我一直输入代码
        ignored: /node-modules/ //不需要监控那个文件
    },
    //必须安装webpack-dev-serve
    devServer: { //开发服务的配置
        before: require('../mock/index.js'),//引入mock/index.js
        port: 8080, //端口
        progress: true, //进度条
        // contentBase: '../client', //找到对应的文件夹开启服务
        compress: true, //启动压缩
        proxy: { 
        }
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [ 
        //判断生产还是开发环境
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("mock")
            }
        }), 
    ]
})
