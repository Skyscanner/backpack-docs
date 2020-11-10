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

import React from 'react';
import PropTypes from 'prop-types';
import BpkText, { WEIGHT_STYLES } from 'bpk-component-text';
import { cssModules } from 'bpk-react-utils';

import STYLES from './type-scale.scss';

const BOOK_OR_BOLD = 'Book or Bold';
const BOOK_OR_BOLD_OR_BLACK = 'Book, Bold or Black';

const intervals = [
  { style: 'caps', sizes: [10], weights: BOOK_OR_BOLD },
  { style: 'xs', sizes: [12, 16], weights: BOOK_OR_BOLD },
  { style: 'sm', sizes: [14, 18], weights: BOOK_OR_BOLD },
  { style: 'base', sizes: [16, 20], weights: BOOK_OR_BOLD },
  { style: 'lg', sizes: [20, 26], weights: BOOK_OR_BOLD },
  { style: 'xl', sizes: [24, 31], weights: BOOK_OR_BOLD_OR_BLACK },
  { style: 'xxl', sizes: [30, 39], weights: BOOK_OR_BOLD_OR_BLACK },
  { style: 'xxxl', sizes: [36, 47], weights: BOOK_OR_BOLD_OR_BLACK },
  { style: 'xxxxl', sizes: [42, 55], weights: BOOK_OR_BOLD_OR_BLACK },
  { style: 'xxxxxl', sizes: [50, 65], weights: BOOK_OR_BOLD_OR_BLACK },
];

const formatSizes = sizes => {
  if (sizes.lenght === 0) {
    return null;
  }
  if (sizes.lenght === 1) {
    return `Type ${sizes[0]}`;
  }
  let result = `Type ${sizes[0]}`;
  sizes.forEach((s, i) => {
    if (i > 0) {
      result += `/${s}`;
    }
  });
  return result;
};

const getClassName = cssModules(STYLES);

const TypeScale = props => {
  const { className, ...rest } = props;

  return (
    <div
      aria-label="Type scale information"
      className={getClassName('bpk-docs-type-scale', className)}
      {...rest}
    >
      <div
        aria-hidden="true"
        className={getClassName('bpk-docs-type-scale__table')}
      >
        {intervals.map(interval => (
          <div className={getClassName('bpk-docs-type-scale__row')}>
            <BpkText
              textStyle="xs"
              className={getClassName(
                'bpk-docs-type-scale__text',
                'bpk-docs-type-scale__text--style',
              )}
            >
              {interval.style && interval.style.toUpperCase()}
            </BpkText>
            <BpkText
              textStyle={interval.style}
              style={{
                fontSize: interval.sizes[0],
                lineHeight: `${interval.sizes[0]}px`,
              }}
              className={getClassName('bpk-docs-type-scale__text')}
            >
              {formatSizes(interval.sizes)}
            </BpkText>
            <BpkText
              weight={WEIGHT_STYLES.bold}
              textStyle={interval.style}
              style={{
                fontSize: interval.sizes[0],
                lineHeight: `${interval.sizes[0]}px`,
              }}
              className={getClassName('bpk-docs-type-scale__text')}
            >
              {formatSizes(interval.sizes)}
            </BpkText>
            {interval.weights === BOOK_OR_BOLD_OR_BLACK && (
              <BpkText
                textStyle={interval.style}
                style={{
                  fontSize: interval.sizes[0],
                  lineHeight: `${interval.sizes[0]}px`,
                }}
                className={getClassName('bpk-docs-type-scale__text')}
                weight={WEIGHT_STYLES.black}
              >
                {formatSizes(interval.sizes)}
              </BpkText>
            )}
            <BpkText
              textStyle="xs"
              className={getClassName(
                'bpk-docs-type-scale__text',
                'bpk-docs-type-scale__text--annotation',
              )}
            >
              {interval.weights}
            </BpkText>
          </div>
        ))}
      </div>
    </div>
  );
};

TypeScale.propTypes = {
  className: PropTypes.string,
};

TypeScale.defaultProps = {
  className: null,
};

export default TypeScale;
