/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from 'fs';
import path from 'path';

import webpack from 'webpack';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import toc from 'remark-toc';

import postCssPlugins from './scripts/webpack/postCssPlugins';
import sassFunctions from './node_modules/bpk-mixins/sass-functions';
import * as ROUTES from './docs/src/constants/routes';
import redirects from './docs/src/constants/redirect-routes';

const {
  NODE_ENV,
  BPK_TOKENS,
  ENABLE_CSS_MODULES,
  BPK_BUILT_AT,
  GOOGLE_MAPS_API_KEY,
  BASE_PATH,
} = process.env;
const useCssModules = ENABLE_CSS_MODULES !== 'false';
const isProduction = NODE_ENV === 'production';

// Strings passed from environment variables must
// be stringified or JS won't interpret them correctly.
const getSafeString = input => JSON.stringify(input);

const staticSiteGeneratorConfig = {
  paths: [
    ...Object.keys(ROUTES).map(key => ROUTES[key]),
    ...Object.keys(redirects),
    '/404.html',
  ],
};

const sassOptions = {
  prependData: BPK_TOKENS
    ? fs.readFileSync(
        `node_modules/@skyscanner/bpk-foundations-web/tokens/${BPK_TOKENS}.scss`,
      )
    : '',
  sassOptions: {
    functions: sassFunctions,
  },
};

const config = {
  entry: {
    docs: './docs/src/index.js',
  },

  mode: isProduction ? 'production' : 'development',

  output: {
    filename: `[name]${isProduction ? '_[chunkhash]' : ''}.js`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: BASE_PATH ? `${BASE_PATH}/` : '',
    libraryTarget: 'umd',
    globalObject: 'this',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/?(!bpk-|!@skyscanner\/).*/,
        use: {
          loader: 'babel-loader',
          // Added due to an error being thrown by d3-scale/numbers.js with
          // regeneratorRuntime error not being defined due to polyfills being required
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: 'current',
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /base\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: postCssPlugins,
            },
          },
          {
            loader: 'sass-loader',
            options: sassOptions,
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /base\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: useCssModules
                ? {
                    localIdentName: '[local]-[hash:base64:5]',
                  }
                : null,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: postCssPlugins,
            },
          },
          {
            loader: 'sass-loader',
            options: sassOptions,
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: postCssPlugins,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg|mp4)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false, // Loading images in markdown files doesn't work without this line.
              name: '[name]_[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /favicon\.ico|social-preview\.png|apple-touch-icon\.png$/,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(md|mdx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@mdx-js/loader',
            // More information on the options can be found here: https://github.com/remarkjs/remark-toc#options
            options: { remarkPlugins: [[toc, { tight: true, maxDepth: 2 }]] },
          },
          {
            loader: path.resolve('./scripts/webpack/removeFrontMatter.js'),
          },
          {
            loader: path.resolve(
              './scripts/webpack/replaceImagesWithRequires.js',
            ),
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]${isProduction ? '_[contenthash]' : ''}.css`,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()],
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      BPK_BUILT_AT,
      BASE_PATH: getSafeString(BASE_PATH),
      GOOGLE_MAPS_API_KEY: getSafeString(GOOGLE_MAPS_API_KEY),
      NODE_ENV: getSafeString(NODE_ENV),
    },
  }),
);

if (isProduction) {
  config.plugins.push(
    new StaticSiteGeneratorPlugin({
      entry: 'docs',
      paths: staticSiteGeneratorConfig.paths,
      locals: staticSiteGeneratorConfig,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'docs/src/README.md', to: 'README.md' }],
    }),
  );
}

export default config;
