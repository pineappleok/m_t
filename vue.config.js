// 配置文件
const path = require('path')

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    baseUrl: process.env.baseUrl,
    outputDir: process.env.outputDir,
    assetsDir: process.env.assetsDir,
    lintOnSave: true,

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('components', resolve('src/components'))
            .set('assets', resolve('src/assets'))
            .set('router', resolve('src/router'))
            .set('store', resolve('src/store'))
            .set('utils', resolve('src/utils'))
            .set('filter', resolve('src/filter'))

        config.resolve.extensions
            .add('.js')
            .add('.vue')
            .add('.styl')
            .add('.css')

        config.module.rule('svg').uses.clear()
        config.module
            .rule('svg')
            .use('raw-loader')
            .loader('raw-loader')
        // config.module.rule('url')
        //   .test(/\.(eot|svg|ttf|woff|woff2?)(\?.*)?$/)
        //   .use('url')
        //     .loader('url-loader')
        //     .end()

        //config.when(process.env.NODE_ENV === 'production', config =>
        //  config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
        //)
    },
    // 打包为生产环境时不生成map.js文件
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    css: {
        sourceMap: false
    },

    devServer: {
        // open:true,
        host: "localhost",
        port: 8089,
        https: false,
        hotOnly: false,
        // 当没有需要代理的内容时 需将其注释
        // proxy:{

        // }
    },
}
