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

    // markdown loader
    const mdLoader = config.module
      .rule('markdown')
      .test(/\.md$/)

    mdLoader.use('vue-loader')
      .loader('vue-loader')
      .end()

      .use('vue-md-loader')
      .loader('vue-md-loader')
      .end()
  }
}
