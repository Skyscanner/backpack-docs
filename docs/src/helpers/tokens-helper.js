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
    size: (value) => (value ? `${value}pt` : value),
    'font-size': (value) => (value ? `${value}pt` : value),
  },
  android: {
    size: (value) => (value ? `${value}dp` : value),
    'font-size': (value) => (value ? `${value}sp` : value),
  },
};

export const getTokenValue = (token: Token, platform: Platform): string => {
  const { type, value } = token || {};
  const formats = TOKEN_FORMAT_MAP[platform] || {};

  if (formats[type]) {
    return formats[type](value);
  }

  return value || '-';
};

const nameIncludes = (name: string, searchTerm: string) =>
  name.toLowerCase().includes(`_${searchTerm}`);

export const tokenNameToSizeNumber = (token: {
  name: string,
  value: string,
}) => {
  if (nameIncludes(token.name, 'caps')) {
    return 0;
  }
  if (nameIncludes(token.name, 'xxs')) {
    return 1;
  }
  if (nameIncludes(token.name, 'xs')) {
    return 2;
  }
  if (nameIncludes(token.name, 'sm')) {
    return 3;
  }
  if (nameIncludes(token.name, 'md')) {
    return 4;
  }
  if (nameIncludes(token.name, 'base')) {
    return 5;
  }
  if (nameIncludes(token.name, 'lg')) {
    return 6;
  }
  if (nameIncludes(token.name, 'xl')) {
    return 7;
  }
  if (nameIncludes(token.name, 'xxl')) {
    return 8;
  }
  if (nameIncludes(token.name, 'xxxl')) {
    return 9;
  }
  if (nameIncludes(token.name, 'xxxxl')) {
    return 10;
  }
  if (nameIncludes(token.name, 'xxxxxl')) {
    return 11;
  }

  return parseInt(token.value, 10);
};
