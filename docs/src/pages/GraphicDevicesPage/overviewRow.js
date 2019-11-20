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
            'bpk-docs-graphic-devices-page__overview__image',
          )}
          src={`/${imageSetOne.image}`}
          alt="shadows for nature and architecture elements"
        />
        <div
          className={getClassName(
            'bpk-docs-graphic-devices-page__overview__text',
          )}
        >
          <div
            className={getClassName(
              'bpk-docs-graphic-devices-page__overview__content',
            )}
          >
            {imageSetOne.titles[0]}
          </div>
          <div
            className={getClassName(
              'bpk-docs-graphic-devices-page__overview__content',
              'bpk-docs-graphic-devices-page__overview__content-secondary',
            )}
          >
            {imageSetOne.titles[1]}
          </div>
        </div>
      </div>

      <div
        className={getClassName(
          'bpk-docs-graphic-devices-page__overview__group',
        )}
      >
        <img
          className={getClassName(
            'bpk-docs-graphic-devices-page__overview__image',
          )}
          alt="shadows for abstract elements and when using props"
          src={`/${imageSetTwo.image}`}
        />
        <div
          className={getClassName(
            'bpk-docs-graphic-devices-page__overview__text',
          )}
        >
          <div
            className={getClassName(
              'bpk-docs-graphic-devices-page__overview__content',
            )}
          >
            {imageSetTwo.titles[0]}
          </div>
          <div
            className={getClassName(
              'bpk-docs-graphic-devices-page__overview__content',
              'bpk-docs-graphic-devices-page__overview__content-secondary',
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
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  imageSetTwo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default OverviewRow;
