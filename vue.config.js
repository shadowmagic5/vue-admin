module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/styles/main.scss";'
      }
    }
  }
};
