module.exports = {
    devServer: {
        host: 'localhost', //本地域名
        port: 8080,//本地端口号
        // 配置不同的后台API地址
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}