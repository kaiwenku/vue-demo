const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}),
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'src': '@/',
        'components': '@/components',
      },
    }
  }
}
