const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')



const extractLess = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', query: { modules: true, localIdentName: '[local]-[hash:base64:5]' } },
      { loader: 'less-loader' }
    ]
  })
  
const tsconfig = path.resolve(__dirname, '../tsconfig.json')
const tslintConfig = path.resolve(__dirname, '../tslint.json')

const tsLinter    = { test: /\.tsx?$/, enforce: 'pre', loader: 'tslint-loader', options: { configFile: tslintConfig } }
const tsLoader    = { test: /\.tsx?$/, loader: 'ts-loader', options: { configFile: tsconfig } }
const styleLoader = { test: /\.less$/, loader: extractLess }

const output = {
  path: path.resolve(__dirname, '../public'),
  filename: 'app.js'
}

const resolve = {
  extensions: ['.webpack.js', '.ts', '.tsx', '.js', '.less'],
  modules: [
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, '../node_modules')
  ]
}

const tsTypeCheck = new ForkTsCheckerWebpackPlugin()



module.exports = {

    context: path.resolve(__dirname, '..'),
    entry: ['./src/index.tsx'],
    output,
    resolve,
    plugins: [new ExtractTextPlugin('app.css', false)],
    module: {

      rules: [
        tsLinter,
        tsLoader,
        styleLoader
      ]
    },

    devtool: 'source-map'
  };