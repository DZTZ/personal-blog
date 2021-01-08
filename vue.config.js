module.exports = {
  publicPath: "./",
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.wjjl.cool",
        changeOrigin: true
      }
    }
  },
  transpileDependencies: ["vuetify"],
  outputDir: 'docs'
};
