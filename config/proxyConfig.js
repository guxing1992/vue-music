module.exports = {
    proxy: {
        '/api': {    
            target: 'https://c.y.qq.com',  // 接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/api': ''   // 因为在 ajax 的 url 中加了前缀 '/api'，而原本的接口是没有这个前缀的,所以需要通过 pathRewrite 来重写地址，将前缀 '/api' 转为 '/'
            }
        }
    }
}