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

import React from 'react';
import { cssModules } from 'bpk-react-utils';
import BpkText from 'bpk-component-text';

import Heading from '../Heading';

import STYLES from './HeroSection.scss';

const getClassName = cssModules(STYLES);

type Props = {
  className?: string,
  imageUrl?: string,
  heading: string,
  subHeading: ?string,
};

const HeroSection = (props: Props) => {
  const { className, imageUrl, heading, subHeading } = props;

  const style = imageUrl && {
    backgroundImage: `url(${imageUrl})`,
  };

  const classNames = [getClassName('bpkdocs-hero-section'), className];
  return (
    <div className={classNames.join(' ')} style={style}>
      <Heading
        level="h1"
        className={getClassName('bpkdocs-hero-section__heading')}
      >
        <BpkText textStyle="xxl" bold>
          {heading}
        </BpkText>
      </Heading>
      <section className={getClassName('bpkdocs-hero-section__subheading')}>
        {subHeading}
      </section>
    </div>
  );
};

HeroSection.defaultProps = {
  subHeading: null,
  imageUrl: null,
  className: null,
};

export default HeroSection;
