const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        host: 'localhost',
        port: 1234,
        open: true,
        https: false,
        proxy: {
            '/dev-api': {
                target: 'http://oa.9yuecloud.com:3333/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/dev-api': '',
                },
            },
        },
    },
})