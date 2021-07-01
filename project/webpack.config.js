const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
    //开发环境配置：production：生产环境(线上) development：开发环境(开发)
    mode:'development',
    //入口文件配置
    entry: {
        index:'./src/index.js',
        index2:'./src/main.js'
    },
    // 出口文件配置
    output:{
        // 绝对路径
        path:path.resolve(__dirname,'dist'),
        filename: '[name].js',
        // 配置图片路径
        publicPath: 'http://localhost:8087/',
    },
    /* 配置插件，根据你的需要配置不同功能的插件 */
    plugins:[
        /* 处理html文件的打包 */
        new HtmlPlugin({
            /* 是对html文件进行压缩，去掉属性的双引号 */
            minify:{
                removeAttributeQuotes:true,
            },
            /* 为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS */
            hash:true,
            /* 是要打包的html模版路径和文件名称 */
            template:'./src/index.html',
            
        }),
        /* 每次构建重新删除dist再重新打包dist文件 */
        // new CleanWebpackPlugin(),

        /* 将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap */
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        })
    ],
    /* 配置开发服务功能 */
    devServer:{
        // 设置基本目录结构
        contentBase: path.resolve(__dirname,'dist'),
        // 服务器的IP地址
        host: 'localhost',
        // 配置服务端口号
        port:8087,
        // 是否自动打开网页
        open: true,
    },
    /* 配置loader */
    module:{
        rules:[
        {
            /* 针对css处理规则 */
            test:/\.css$/,

            /* style-loader：用来处理css文件中的url()等，url挂在到js中   css-loader：用来将css插入到页面的style标签 */
            // use:['style-loader','css-loader'],
            use:[
                /* 代替style-loader */
                MiniCssExtractPlugin.loader,
                {
                    loader:'css-loader',
                    // 在css-loader 之后指定1个数量的loader（即 postcss-loader）来处理import进来的资源
                    options:{ importLoaders:1},
                },
                'postcss-loader',
            ]
        },{
            /* 针对图片文件的处理规则 */
            test:/\.png|jpg|gif$/,
            // use:['style-loader','css-loader'],

            // use：是指定使用的loader和loader的配置参数
            use:[{
                // url-loader会将引入的图片编码，生成dataURl
                loader:'url-loader',
                options:{
                    // limit：是把小于500B的文件打成Base64的格式，写入css
                    limit:500,
                    outputPath:'images/',
                    esModule:false
                }
            }]
        },{
            /* 对html文件的处理 */
            test:/\.htm|html$/,
            loader:'html-withimg-loader',
        },{
            /* 针对sass文件的处理 */
            test:/\.scss$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader','sass-loader'
            ]
        },{
            /* 针对js文件的处理  （es6 => es5） */
            test:/\.js$/,
            use:[{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }],
            // 不把node_modules中的文件进行转换
            exclude:/node_modules/,
        }
    ]
    }       
}
