module.exports = (pluginOptions) => {
  return poi => {
    poi.extendWebpack('production', config => {
      
      pluginOptions = poi.merge({
        sourceMap: true,
        uglifyOptions: {
          compressor: {
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
            negate_iife: false
          },
          output: {
            comments: false
          }
        }
      }, pluginOptions)

      // Say goodbye to uglify plugin
      const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

      // do not use if `minimize` is off
      if (config.plugins.has('minimize')) {
        config.plugin('minimize')
          .use(UglifyJsPlugin, [pluginOptions])
      }
    })
  }
}