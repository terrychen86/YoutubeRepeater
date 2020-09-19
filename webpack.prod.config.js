/* eslint-disable */

const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const config = {
  ...baseConfig,
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin()
    ],
  },
  plugins: [
    ...baseConfig.plugins,
    new CopyPlugin({
      patterns: [
        { from: 'static', to: '' },
        { from: 'configs/prod', to: '' },
      ],
    }),
  ],
};

module.exports = config;
