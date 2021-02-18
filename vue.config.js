const isProd = process.env.NODE_ENV === "production";
let targetUrl = isProd ? "http://www.wjjl.cool:5050" : "http://localhost:5050";

module.exports = {
  publicPath: "./",
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: targetUrl, // 测试
        ws: false,
        changeOrigin: true
        // pathRewrite: {
        //   "^/api": ""
        // }
      }
    }
  },
  transpileDependencies: ["vuetify"],
  outputDir: 'docs'
};
