/* eslint-disable no-console */
const env = require('./env.js')('');
const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

const isProd = process.env.NODE_ENV === 'production';
const host = process.env.host || 'localhost';
const port = process.env.PORT || 8080;

const miniCssExtract = new MiniCssExtractPlugin({
  filename: '[name].min.css',
  chunkFilename: '[id].min.css',
  ignoreOrder: false,
  disable: !isProd,
});

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
  entry: [
    paths.appModule,
  ].concat(isProd ? [] : [
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://${host}:${port}`,
  ]),
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      use: ['tslint-loader'],
      enforce: 'pre',
    }, {
      exclude: [
        /\.html$/,
        /\.(js|jsx)(\?.*)?$/,
        /\.(ts|tsx)(\?.*)?$/,
        /\.css$/,
        /\.less$/,
        /\.json$/,
        /\.svg$/,
      ],
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
          esModule: false
        }
      }]
    }, {
      test: /.tsx?$/,
      use: ['awesome-typescript-loader']
    }, {
      test: /\.(css|less)$/,
      use: isProd ? [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: !isProd,
          },
        },
        'css-loader',
        'less-loader',
      ] : [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
          esModule: false
        }
      }]
    }],
  },
  devServer: {
    contentBase: './src',
    compress: true,
    port: 9000,
  },
  target: 'web',
  optimization: {
    minimize: isProd
  },
  plugins: [

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
    new webpack.optimize.OccurrenceOrderPlugin(),
    miniCssExtract,
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

  ] : [

      /** development only plugins */
      new CaseSensitivePathsPlugin(),
      new WatchMissingNodeModulesPlugin(paths.nodeModules),
      new webpack.HotModuleReplacementPlugin(),

    ]),
};