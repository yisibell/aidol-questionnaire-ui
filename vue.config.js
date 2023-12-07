module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/aidol-questionnaire-ui/' : '/',
  css: {
    extract: true
  },
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    // raw Loader
    const rawRule = config.module
      .rule('raw')
      .test(/\.txt$/)

    rawRule.use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}
