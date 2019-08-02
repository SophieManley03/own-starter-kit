const path = require('path')
const tsconfig = path.resolve(__dirname, '../tsconfig.json')
const tslintConfig = path.resolve(__dirname, '../.eslintrc.js')
const esLinter    = { test: /\.tsx?$/, enforce: 'pre', loader: 'eslint-loader', options: { configFile: tslintConfig } }
const tsLoader    = { test: /\.tsx?$/, loader: 'ts-loader', options: { configFile: tsconfig } }
const output = {
  path: path.resolve(__dirname, '../public'),
  filename: '[name].js'
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

const env = process.env.NODE_ENV

module.exports = {
  mode: env || 'development',
  context: path.resolve(__dirname, '..'),
  entry: ['./src/index.tsx'],
  output,
  resolve,
  module: {
    rules: [
      esLinter,
      tsLoader,
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '..'),
    compress: true,
    port: 9000
  },

  devtool: 'source-map'
};