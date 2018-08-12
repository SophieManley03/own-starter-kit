const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const tsconfig = path.resolve(__dirname, '../tsconfig.json')
const tslintConfig = path.resolve(__dirname, '../tslint.json')

const tsLinter    = { test: /\.tsx?$/, enforce: 'pre', loader: 'tslint-loader', options: { configFile: tslintConfig } }
const tsLoader    = { test: /\.tsx?$/, loader: 'ts-loader', options: { configFile: tsconfig } }


const output = {
  path: path.resolve(__dirname, '../public'),
  filename: 'app.js'
}

const resolve = {
  extensions: ['.webpack.js', '.ts', '.tsx', '.js', '.less'],
  alias: {
    '~': path.resolve(__dirname, '../src')
  },
  modules: [
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, '../node_modules')
  ]
}


module.exports = {
    context: path.resolve(__dirname, '..'),
    entry: ['./src/index.tsx'],
    output,
    resolve,
    plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['./'] }
      })
    ],
    module: {
      rules: [
        tsLinter,
        tsLoader,
      ]
    },

    devtool: 'source-map'
  };