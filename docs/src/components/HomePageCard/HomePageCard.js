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
/* @flow strict */
import React from 'react';
import PropTypes from 'prop-types';

import STYLES from './HomePageCard.scss';

import BpkCard from 'backpack/packages/bpk-component-card';
import BpkText from 'backpack/packages/bpk-component-text';
import { cssModules } from 'backpack/packages/bpk-react-utils';

const getClassName = cssModules(STYLES);

export type Props = {
  title: string,
  href: ?string,
  image: string,
  icon: string,
  blank: boolean,
  centerIcon: boolean,
  iconWidth: ?string,
  className: ?string,
};

const HomePageCard = (props: Props) => {
  const {
    blank,
    centerIcon,
    className,
    href,
    icon,
    iconWidth,
    image,
    title,
    ...rest
  } = props;

  const classNames = getClassName('bpkdocs-home-page-card', className);

  const iconClassNames = getClassName(
    'bpkdocs-home-page-card__icon',
    centerIcon && 'bpkdocs-home-page-card__icon--centered',
  );

  return (
    // $FlowFixMe[cannot-spread-inexact] - inexact rest. See 'https://github.com/Skyscanner/backpack/blob/main/decisions/flowfixme.md'.
    <BpkCard
      key={title}
      href={href}
      padded={false}
      blank={blank}
      className={classNames}
      {...rest}
    >
      <div className={getClassName('bpkdocs-home-page-card__inner')}>
        <div
          className={getClassName('bpkdocs-home-page-card__image-container')}
        >
          <div
            className={getClassName('bpkdocs-home-page-card__image')}
            style={{ backgroundImage: `url(/${image})` }}
            alt={title}
          />
          {icon && (
            <img
              src={`/${icon}`}
              alt=""
              className={iconClassNames}
              style={{ width: iconWidth }}
            />
          )}
        </div>
        <BpkText
          tagName="h2"
          textStyle="lg"
          className={getClassName('bpkdocs-home-page-card__caption')}
        >
          {title}
        </BpkText>
      </div>
    </BpkCard>
  );
};

HomePageCard.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  image: PropTypes.string.isRequired,
  icon: PropTypes.string,
  blank: PropTypes.bool,
  centerIcon: PropTypes.bool,
  iconWidth: PropTypes.string,
  className: PropTypes.string,
};

HomePageCard.defaultProps = {
  centerIcon: false,
  icon: null,
  blank: false,
  href: null,
  iconWidth: null,
  className: null,
};

export default HomePageCard;
