# poi-preset-uglify-es

Use [uglify-es](https://github.com/mishoo/UglifyJS2/tree/harmony) to minimize JavaScript.

## Install

```bash
yarn add poi-preset-uglify-es --dev
```

## Usage

This preset will replace UglifyjsPlugin with the latest [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) for you:

```js
// poi.config.js
module.exports = {
  presets: [
    require('poi-preset-uglify-es')()
  ]
}
```

Then it will compress JS code when you run `poi build`.

It accepts the same options as which in [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin#options):

```js
require('poi-preset-uglify-es')({ parallel: true, uglifyOptions: { warnings: false }})
```

## License

MIT &copy; [EGOIST](https://github.com/morrislaptop)