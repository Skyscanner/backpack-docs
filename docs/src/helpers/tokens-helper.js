/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
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
/* @flow */

import _ from 'lodash';
// We don't set the root font size in the backpack base stylesheet, which means that the root font size falls back to
// the browser default - typically 16px;
const ROOT_FONT_SIZE = 16;

export type Platform = 'ios' | 'android' | 'web';

export type Token = {
  name: string,
  type: string,
  category: string,
  value: string,
  originalValue: string,
  darkValue?: string,
  originalDarkValue?: string,
  deprecated?: boolean,
};

type TokenList = { [string]: Token };

export type RawTokens = {
  propKeys: Array<string>,
  props: TokenList,
};

export const formatTokenName = (name: string): string => _.kebabCase(name);

export const toPx = (value: string | number): ?string => {
  const parsed = parseFloat(value) * ROOT_FONT_SIZE;
  return parsed ? `${parsed}px` : null;
};

const TOKEN_FORMAT_MAP = {
  web: {
    size: (value: string): ?string => {
      if (/rem$/.test(value)) {
        const pixelValue = toPx(value);

        if (!pixelValue) {
          return null;
        }

        return `${value} (${pixelValue})`;
      }
      return value;
    },
    'font-size': (value: string): ?string => {
      if (/rem$/.test(value)) {
        const pixelValue = toPx(value);

        if (!pixelValue) {
          return null;
        }

        return `${value} (${pixelValue})`;
      }

      if (/%$/.test(value)) {
        const pixelValue = toPx(parseFloat(value) / 100);

        if (!pixelValue) {
          return null;
        }

        return `${value} (${pixelValue})`;
      }
      return value;
    },
  },
  ios: {
    size: value => (value ? `${value}pt` : value),
    'font-size': value => (value ? `${value}pt` : value),
  },
  android: {
    size: value => (value ? `${value}dp` : value),
    'font-size': value => (value ? `${value}sp` : value),
  },
};

export const getTokenValue = (token: Token, platform: Platform): string => {
  const { value, type } = token || {};
  const formats = TOKEN_FORMAT_MAP[platform] || {};

  if (formats[type]) {
    return formats[type](value);
  }

  return value || '-';
};

export const tokenNameToSizeNumber = (token: {
  name: string,
  value: string,
}) => {
  const nameIncludes = searchTerm =>
    token.name.toLowerCase().includes(`_${searchTerm}`);

  if (nameIncludes('caps')) {
    return 0;
  }
  if (nameIncludes('xxs')) {
    return 1;
  }
  if (nameIncludes('xs')) {
    return 2;
  }
  if (nameIncludes('sm')) {
    return 3;
  }
  if (nameIncludes('md')) {
    return 4;
  }
  if (nameIncludes('base')) {
    return 5;
  }
  if (nameIncludes('lg')) {
    return 6;
  }
  if (nameIncludes('xl')) {
    return 7;
  }
  if (nameIncludes('xxl')) {
    return 8;
  }
  if (nameIncludes('xxxl')) {
    return 9;
  }
  if (nameIncludes('xxxxl')) {
    return 10;
  }
  if (nameIncludes('xxxxxl')) {
    return 11;
  }

  return parseInt(token.value, 10);
};

export const getTokens = (tokens: TokenList, keys: ?Array<string> = null) =>
  _.chain(keys || Object.keys(tokens))
    .reduce((acc, key) => {
      if (!tokens[key] || tokens[key].deprecated) return acc;
      acc[key] = tokens[key];
      return acc;
    }, {})
    .sortBy(tokenNameToSizeNumber)
    .keyBy('name')
    .value();

type Predicate = (?Token) => boolean;

const extractTokenKeys = (
  rawTokens: ?RawTokens,
  predicate: Predicate,
): Array<string> => {
  if (!rawTokens) {
    return [];
  }

  return rawTokens.propKeys.filter(key => predicate(rawTokens.props[key]));
};

export const getPlatformTokens = (
  webTokens: RawTokens,
  iosTokens: ?RawTokens,
  androidTokens: ?RawTokens,
  predicate: (?Token) => boolean,
): { web: TokenList, ios?: TokenList, android?: TokenList } => {
  const safePredicate = (token: ?Token): boolean =>
    Boolean(token) && predicate(token);

  const keys = _.union([
    ...webTokens.propKeys.filter(key => safePredicate(webTokens.props[key])),
    ...extractTokenKeys(iosTokens, safePredicate),
    ...extractTokenKeys(androidTokens, safePredicate),
  ]);

  const result: { web: TokenList, ios?: TokenList, android?: TokenList } = {
    web: getTokens(webTokens.props, keys),
  };

  if (iosTokens) {
    result.ios = getTokens(iosTokens.props, keys);
  }

  if (androidTokens) {
    result.android = getTokens(androidTokens.props, keys);
  }

  return result;
};
