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

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading';

import STYLES from './IconSearchResults.scss';
import customPropTypes from './propTypes';
import IconSearchResult from './IconSearchResult';

import { BpkDescriptionList } from 'backpack/packages/bpk-component-description-list';
import { cssModules } from 'backpack/packages/bpk-react-utils';

const getClassName = cssModules(STYLES);

const IconSearchResults = props => {
  const { icons, searchQuery } = props;

  const categories = _.groupBy(icons, 'categoryName');
  let heading = searchQuery ? `Icons matching "${searchQuery}"` : 'All icons';
  if (icons.length === 0) {
    heading = `There are no icons matching "${searchQuery}"`;
  }

  return (
    <div>
      <Heading
        level="h3"
        className={getClassName('bpkdocs-icon-search-results__heading')}
      >
        {heading}
      </Heading>
      {icons.length > 0 && (
        <BpkDescriptionList
          className={getClassName('bpkdocs-icon-search-results__list')}
        >
          <IconSearchResult
            key="Large"
            categoryName="Large"
            icons={categories.Large}
            searchQuery={searchQuery}
          />
          <IconSearchResult
            key="Small"
            categoryName="Small"
            icons={categories.Small}
            searchQuery={searchQuery}
          />
        </BpkDescriptionList>
      )}
    </div>
  );
};

IconSearchResults.propTypes = {
  icons: customPropTypes.icons.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default IconSearchResults;
