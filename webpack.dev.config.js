/* eslint-disable */

const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const config = {
  ...baseConfig,
  devtool: 'source-map',
  plugins: [
    ...baseConfig.plugins,
    new CopyPlugin({
      patterns: [
        { from: 'static', to: '' },
        { from: 'configs/dev', to: '' },
      ],
    }),
  ]
};

module.exports = config;
