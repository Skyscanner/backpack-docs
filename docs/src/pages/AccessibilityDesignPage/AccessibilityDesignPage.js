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

import React, { Fragment } from 'react';
import { cssModules } from 'bpk-react-utils';

import InfoPageBuilder from '../../components/InfoPageBuilder';

import DesignColorContrast from './DesignColorContrast';
import DesignColorAlone from './DesignColorAlone';
import STYLES from './accessibility-design-page.scss';

const getClassName = cssModules(STYLES);

const sections = [
  {
    id: 'colour',
    title: 'Colour',
    content: (
      <Fragment>
        <DesignColorContrast
          className={getClassName(
            'bpk-docs-accessibility-design-page__section',
          )}
        />
        <DesignColorAlone
          className={getClassName(
            'bpk-docs-accessibility-design-page__section',
          )}
        />
      </Fragment>
    ),
  },
];

const AccessibilityDesignPage = ({ ...rest }) => (
  <InfoPageBuilder
    title="Designing for accessibility"
    sections={sections}
    {...rest}
  />
);

export default AccessibilityDesignPage;
