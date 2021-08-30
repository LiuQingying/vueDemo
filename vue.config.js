module.exports = {
  // Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/user': {
        target: 'http://127.0.0.1:8088',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/user': ''
        }
      }
    }
  }
}
