const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we are building a bundle for
  // NodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file to our server app
  entry: './src/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Tell webpack not to bundle any libraries into the output bundle on the server 
  // if the library exists inside the node_modules folder
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);