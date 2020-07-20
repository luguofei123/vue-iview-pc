// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const path = require('path')
// const resolve = dir => path.resolve(__dirname, dir)
// const merge = require('webpack-merge')
// 测试环境的cdn可以用其他标志去区分
// const cdn = {
//   css: [],
//   js: [
//     'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
//     'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js',
//     'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
//     'https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js'
//   ]
// }
// const externals = {
//   vue: 'Vue',
//   'vue-router': 'VueRouter',
//   vuex: 'Vuex',
//   axios: 'axios'
// }
module.exports = {
  // 选项...
  // 这个值和路由中的base:baseUrl是一个值process.env.NODE_ENV === 'production'? '/production-sub-path/': '/'
  // 如果是部署到服务器的根路径 publicPath：'/'
  // 如果是部署到服务器的根路径下的dist目录 那么publicPath：'dist/'
  // 如果是部署到服务器的根路径下的vue-elementUI-pc/dist目录 那么publicPath：'vue-elementUI-pc/dist/'
  // 根本用不到相对路径
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',
  filenameHashing: true,
  pages: undefined,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  devServer: {// 代理
    port: process.env.VUE_APP_BASE_PORT,
    proxy: {
      '/usermanager': {
        target: 'http://' + process.env.VUE_APP_PROXY_IP + ':' + process.env.VUE_APP_PROXY_PORT,
        ws: true,
        changeOrigin: true,
        // pathRewrite 作用是将usermanager换成了api
        // 合起来解释就是 我们原来的请求是http://127.0.0.1:8086/usermanager/echo.php
        // 实际上我们的请求已经代理成 http://127.0.0.1:4885/api/echo.php
        pathRewrite: { '^/usermanager': 'api' }
      }
      // '/pdf': {
      //   target: 'http://127.0.0.1:4885',
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: { '^/pdf': '' }
      // }
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: !!(process.env.NODE_ENV === 'production'),
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 链式配置/修改插件或loader
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    // 抽取公共js和css 可能目前页面比较少，感觉效果不明显
    // ============抽取公共js和css start ============
    config.optimization.minimize(true)
    config.optimization.splitChunks({
      chunks: 'all', // 表示从哪些chunks里面抽取代码，除了三个可选字符串值 initial、async、all 之外，还可以通过函数来过滤所需的 chunks
      maxInitialRequests: 5, // 最大的按需(异步)加载次数，默认为 5
      minSize: 300000, // 依赖包超过300000bit将被单独打包
      automaticNameDelimiter: '-', // 抽取出来的文件的自动生成名字的分割符，默认为 ~
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: /node_modules/,
          name: 'vendor'
        },
        styles: {
          name: 'styles',
          test: /\.(sa|sc|c)ss$/,
          chunks: 'all',
          enforce: true
        }
      }
    })
  }
}
