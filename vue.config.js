module.exports = {
  devServer : {
    proxy : {
        '/api' : {
            target : 'http://192.168.31.77:8081',
            changeOrigin : true
        }
    }
  }
}