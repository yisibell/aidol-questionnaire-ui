module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/aidol-questionnaire-ui/' : '/',
  css: {
    extract: true
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
