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

import React from 'react';
import PropTypes from 'prop-types';

import STYLES from './ComponentScreenshots.scss';

import BpkText from 'backpack/packages/bpk-component-text';
import BpkPanel from 'backpack/packages/bpk-component-panel';
import { cssModules } from 'backpack/packages/bpk-react-utils';
import BpkImage, {
  withLazyLoading,
  withLoadingBehavior,
} from 'backpack/packages/bpk-component-image';
import {
  BpkDescriptionList,
  BpkDescriptionDetails,
  BpkDescriptionTerm,
} from 'backpack/packages/bpk-component-description-list';

const getClassName = cssModules(STYLES);
const documentIfExists = typeof window !== 'undefined' ? document : null;
const LazyLoadingImage = withLoadingBehavior(
  withLazyLoading(BpkImage, documentIfExists),
);

let counter = 0;
const generateId = (title = '') => {
  counter += 1;
  return `${title.toLowerCase().replace(' ', '-')}-${counter}`;
};

const ComponentScreenshot = ({ subText, title, ...rest }) => {
  const subTextId = generateId(title);

  return (
    <div
      key={title}
      className={getClassName('bpkdocs-component-screenshots__item')}
    >
      <BpkDescriptionTerm
        className={getClassName('bpkdocs-component-screenshots__item-title')}
      >
        {title && (
          <BpkText tagName="h3" textStyle="xs">
            {title}
          </BpkText>
        )}
      </BpkDescriptionTerm>
      <BpkDescriptionDetails
        className={getClassName(
          'bpkdocs-component-screenshots__item-image-container',
        )}
      >
        <BpkPanel>
          <LazyLoadingImage {...rest} aria-describedby={subTextId} />
        </BpkPanel>
        <BpkText id={subTextId} textStyle="xs">
          {subText}
        </BpkText>
      </BpkDescriptionDetails>
    </div>
  );
};

ComponentScreenshot.propTypes = {
  title: PropTypes.string,
  subText: PropTypes.string.isRequired,
};

ComponentScreenshot.defaultProps = {
  title: null,
};

const ComponentScreenshots = ({ screenshots, ...rest }) => (
  <BpkDescriptionList
    className={getClassName('bpkdocs-component-screenshots')}
    {...rest}
  >
    {screenshots.map(ComponentScreenshot)}
  </BpkDescriptionList>
);

ComponentScreenshots.propTypes = {
  screenshots: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      src: PropTypes.string.isRequired,
      aspectRatio: PropTypes.number.isRequired,
      altText: PropTypes.string.isRequired,
      subText: PropTypes.string.isRequired,
    }),
  ),
};

ComponentScreenshots.defaultProps = {
  screenshots: [],
};

export default ComponentScreenshots;
