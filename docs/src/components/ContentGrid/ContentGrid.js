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

/* @flow strict */

import React, { type Node } from 'react';
import { cssModules } from 'bpk-react-utils';

import STYLES from './content-grid.scss';

const getClassName = (() => {
  const get = cssModules(STYLES);
  return (...classes) => classes.map(className => get(className)).join(' ');
})();

type Props = {
  className?: string,
  children: Node,
};

type CardProps = {
  children: Node,
  className?: string,
  cardStyle: 'normal' | 'bold-title' | 'primary-title',
  padding?: boolean,
};

const ContentGrid = ({ className, children }: Props) => (
  <div className={getClassName('bpk-docs-content-grid', className)}>
    {children}
  </div>
);

const ContentGridCard = ({
  children,
  className,
  cardStyle,
  padding,
}: CardProps) => (
  <span
    className={getClassName(
      'bpk-docs-content-grid__card',
      `bpk-docs-content-grid__card--${cardStyle}`,
      !padding && 'bpk-docs-content-grid__card--no-padding',
      className,
    )}
  >
    {children}
  </span>
);

ContentGrid.defaultProps = {
  className: null,
};

ContentGridCard.defaultProps = {
  className: null,
  cardStyle: 'normal',
  padding: true,
};

export default ContentGrid;
export { ContentGridCard };
