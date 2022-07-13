const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
const setting = require('./src/setting')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = setting.title
      return args
    })
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  // 代理
  devServer: {
    proxy: {
      // 像本地请求的时候有/api的时候 就会代理我们的请求地址向另外一个服务器发请求匹配
      // 跨域的本质是同源策略 这个ajax不由浏览器发 由脚手架发
      '/heima': {
        target: 'http://ihrm.itheima.net/', // 跨域请求地址
        changeOrigin: true, // 只有这个值为true  才表示开启跨域
        // 路径重写
        pathRewrite: { '^/heima': '' }
      }
    }

  }
})
