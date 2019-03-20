
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const WebpaclShellPlugin  = require('webpack-shell-plugin');

const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
      rules:[
           {
               test:/\.(ts|tsx)$/,
               use:[
                   'ts-loader',
               ]
           }
      ],
      
  },
  externals: [nodeExternals()],
  watch: NODE_ENV === 'development',
  plugins: [
      new WebpaclShellPlugin({
          onBuildEnd: ['yarn runDev']
      })
  ]
}