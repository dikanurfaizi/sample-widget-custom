/* eslint-disable no-console */
const fs = require('fs-extra')
const env = require('./env.js')('');
const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const AdkWidgetsBundleWebpackPlugin = require('./adk-widgets-bundle-webpack-plugin');
const package = require('../package.json');
const generateFilesList = require('./generate-file-list')

const isProd = false
const host = process.env.host || 'localhost';
const port = process.env.PORT || 8080;
const bundleName = 'main';
const outDir = package.outDir || 'build';
const packageName = package.name;
const packageFullName = package.fullName || package.name;
const version = package.version;

var widgetList = fs.readFileSync("react-ts/pack-selection.js", 'utf8').toString().split('\n')
const { storeLibraries, featureEntries, webpackEntries } = generateFilesList(packageName, packageFullName, version, widgetList)
const featureBundle = { featureEntries: featureEntries, defaultEntryJson: storeLibraries }
const htmlPluginOptions = {
  inject: true,
  cache: true
};
module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: webpackEntries,
  output: {
    path: path.resolve(outDir),
    library: packageName,
    libraryTarget: 'umd',
    filename: `[name].js`
  },
  externals: {
    'd3': 'd3',
    'react': 'react',
    'react-dom': 'react-dom',
    'react-redux': 'react-redux',
    'react-router-dom': 'react-router-dom',
    'recharts': 'recharts',
    'redux': 'redux',
    'redux-saga': 'redux-saga',
    'redux-saga/effects': 'redux-saga/effects',
    'rxjs': 'rxjs',
    'rxjs/Observer': 'rxjs/Observer',
    'rxjs/Observable': 'rxjs/Observable',
    'typesafe-actions': 'typesafe-actions',
    'webpack': 'webpack',
    'adk-api': 'adk-api'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      use: 'tslint-loader',
      enforce: 'pre',
      exclude: '/**/*.test.ts'
    }, {
      exclude: [
        /\.html$/,
        /\.(js|jsx)(\?.*)?$/,
        /\.(ts|tsx)(\?.*)?$/,
        /\.css$/,
        /\.less$/,
        /\.json$/,
        /\.svg$/,
        /\.jpg$/,
        /\.png$/,
      ],
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
          esModule: false
        }
      }
    }, {
      test: /.tsx?$/,
      use: [{ loader: 'ts-loader', options: { onlyCompileBundledFiles: true } }],
      exclude: ['/**/*.test.ts']
    }, {
      test: /\.(css|less)$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.(svg|jpg|png)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: 'static/media/[name].[hash:8].[ext]',
          esModule: false
        }
      }
    }],
  },
  devServer: {
    contentBase: './src',
    compress: true,
    port: 9000,
  },
  target: 'web',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            const moduleName = `vendor/${packageName.replace('@', '')}`
            return moduleName;
          },
        },
      },
    }
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin(Object.assign({
      filename: 'index.html',
      template: paths.template,
    }, htmlPluginOptions)),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new webpack.DefinePlugin(Object.assign({}, env.stringified, {
      __dirname: '__dirname',
    })),
  ].concat([
    new AdkWidgetsBundleWebpackPlugin({ featureBundle })
  ]),
};