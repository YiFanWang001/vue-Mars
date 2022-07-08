const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        open: false,
        port: 3333,
        https: false,
        host: 'localhost',
        proxy: {
            '/dev-api': {
                target: 'http://oa.9yuecloud.com:3333/api',
            },
        },
    },
    lintOnSave: false,
})