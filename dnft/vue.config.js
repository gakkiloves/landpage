const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/landpage/dnft/dist/'
        : '/',
    devServer: {
        port: 8081,
        open: true
    },
    css: {},
    configureWebpack: config => {
        //  ddl
        config.plugins.push(
            new webpack.DllReferencePlugin({
                context: process.cwd(),
                manifest: require('./public/vendor/vendor-manifest.json')
            }),
            // 将 dll 注入到 生成的 html 模板中
            new AddAssetHtmlPlugin({
                // dll文件位置
                filepath: path.resolve(__dirname, './public/vendor/*.js'),
                // dll 引用路径
                publicPath: './vendor',
                // dll最终输出的目录
                outputPath: './vendor'
            })
        )

    },
    pluginOptions: {
        quasar: {
            importStrategy: 'kebab',
            rtlSupport: true
        }
    },
    transpileDependencies: ['quasar']
}
