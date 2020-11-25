/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
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

module.exports = function config(api) {
  api.cache(true);

  return {
    presets: ['@babel/env', '@babel/react', '@babel/preset-flow'],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            helpers: './docs/src/helpers',
            components: './docs/src/components',
            static: './docs/src/static',
            backpack: './backpack',
            'backpack-ios': './backpack-ios',
            'backpack-android': './backpack-android',
            'backpack-react-native': './backpack-react-native',
          },
        },
      ],
    ],
  };
};
