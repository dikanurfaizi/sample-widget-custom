/* eslint-disable no-console */
const env = require('./env.js')('');
const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const AdkDtsBundleWebpackPlugin = require('./adk-dts-bundle-webpack-plugin');
const AdkWidgetsBundleWebpackPlugin = require('./adk-widgets-bundle-webpack-plugin');
const package = require('../package.json');
const generateBuildEntries = require('./generate-build-entries')
const dtsBundleOptions = require('./dts-bundle-options');

const isProd = process.env.NODE_ENV === 'production';
const host = process.env.host || 'localhost';
const port = process.env.PORT || 8080;
const bundleName = 'main';
const outDir = package.outDir || 'build';
const packageName = package.name;
const packageFullName = package.fullName || package.name;
const version = package.version;

const miniCssExtract = new MiniCssExtractPlugin({
  filename: '[name].min.css',
  chunkFilename: '[id].min.css',
  ignoreOrder: false,
  disable: !isProd,
});

const { featureEntries, storeLibraries, webpackEntries } = generateBuildEntries(packageName, packageFullName, version)

const htmlPluginOptions = isProd ? {
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
} : {
    inject: true,
    cache: true,
  };

module.exports = {
  mode: isProd ? 'production' : 'development',
  bail: isProd,
  cache: !isProd,
  devtool: !isProd && 'cheap-module-source-map',
  entry: webpackEntries,
  output: {
    path: path.resolve(outDir),
    library: packageName,
    libraryTarget: 'umd',
    // chunkFilename: 'vendor/[name].js',
    filename: `[name].js`
  },
  externals: {
    'd3': 'd3',
    'react': 'react',
    'react-dom': 'react-dom',
    'react-redux': 'react-redux',
    'react-router-dom': 'react-router-dom',
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
      use: 'ts-loader',
      exclude: '/**/*.test.ts'
    }, {
      test: /\.(css|less)$/,
      use: isProd ? [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader',
      ] : [
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
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            const moduleName = `vendor/${packageName.replace('@', '')}`
            return moduleName;
          },
        },
      },
    },
    minimize: isProd,
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    /** common plugins */
    new HtmlWebpackPlugin(Object.assign({
      filename: 'index.html',
      template: paths.template,
    }, htmlPluginOptions)),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new webpack.DefinePlugin(Object.assign({}, env.stringified, {
      __dirname: '__dirname',
    })),
  ].concat(isProd ? [
    /** production only plugins */
    miniCssExtract,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      filter: (fd) => fd.isInitial || fd.isChunk,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
    }),
    new AdkDtsBundleWebpackPlugin(dtsBundleOptions),
    new AdkWidgetsBundleWebpackPlugin({ featureEntries, defaultEntryJson: storeLibraries })

  ] : [

      /** development only plugins */

      new CaseSensitivePathsPlugin(),
      new WatchMissingNodeModulesPlugin(paths.nodeModules),
      new webpack.HotModuleReplacementPlugin(),

    ]),
};
