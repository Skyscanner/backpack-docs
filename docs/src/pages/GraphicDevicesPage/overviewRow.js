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
import { cssModules } from 'bpk-react-utils';

import STYLES from './devices-page.scss';

const getClassName = cssModules(STYLES);

const OverviewRow = props => {
  const { imageSetOne, imageSetTwo } = props;

  return (
    <div
      className={getClassName('bpk-docs-graphic-devices-page__overview-row')}
    >
      <div>
        <img
          className={getClassName(
            'bpk-docs-graphic-devices-page__overview-image',
          )}
          src={`/${imageSetOne.image}`}
          alt={`${imageSetOne.imageSetAlt}`}
        />
        <div
          className={getClassName(
            'bpk-docs-graphic-devices-page__overview-text',
          )}
        >
          <div
            className={getClassName(
              'bpk-docs-graphic-devices-page__overview-content',
            )}
          >
            {imageSetOne.titles[0]}
          </div>
          <div
            className={getClassName(
              'bpk-docs-graphic-devices-page__overview-content',
              'bpk-docs-graphic-devices-page__overview-content-secondary',
            )}
          >
            {imageSetOne.titles[1]}
          </div>
        </div>
      </div>

      <div
        className={getClassName(
          'bpk-docs-graphic-devices-page__overview-group',
        )}
      >
        <img
          className={getClassName(
            'bpk-docs-graphic-devices-page__overview-image',
          )}
          alt={`${imageSetTwo.imageSetAlt}`}
          src={`/${imageSetTwo.image}`}
        />
        <div
          className={getClassName(
            'bpk-docs-graphic-devices-page__overview-text',
          )}
        >
          <div
            className={getClassName(
              'bpk-docs-graphic-devices-page__overview-content',
            )}
          >
            {imageSetTwo.titles[0]}
          </div>
          <div
            className={getClassName(
              'bpk-docs-graphic-devices-page__overview-content',
              'bpk-docs-graphic-devices-page__overview-content-secondary',
            )}
          >
            {imageSetTwo.titles[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

OverviewRow.propTypes = {
  imageSetOne: PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageSetAlt: PropTypes.string.isRequired,
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  imageSetTwo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageSetAlt: PropTypes.string.isRequired,
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default OverviewRow;
