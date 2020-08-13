const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack =require('webpack');
module.exports = {
    mode:'development',
    entry:{
        index: './src/index.js',
        main: './src/main.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8081/',
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:8081,
        // open:true
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html',
            minify:{
                removeAttributeQuotes:true,
                // collapseWhitespace:true,
            },
            hash:true
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].css',
        }),
        // new CleanWebpackPlugin(),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html')),
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader'],
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{importLoaders:1}
                    },
                    'postcss-loader',
                    
                ]
            },{
                test:/\.png|jpg|gif$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/',
                        esModule:false,
                    }
                }]
            },{
                test:/\.htm|html$/i,
                loader:'html-withimg-loader',

            },{
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]

            },{
                test:/\.js$/,
                use:[{
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }],
                    exclude:/node_modules/,
            }           
        ]
    }
}