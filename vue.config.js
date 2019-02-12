// vue.config.js
module.exports = {
  // 选项...
  assetsDir: 'assets',
  devServer: {
    https: true,
    disableHostCheck: true,
    proxy: 'https://artminitest.fantuan.cn'
  }
}
