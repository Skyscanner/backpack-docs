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
import BpkRating from 'bpk-component-rating';
import ratingReadme from 'bpk-component-rating/README.md';
import { cssModules } from 'bpk-react-utils';

import DocsPageBuilder from '../../components/DocsPageBuilder';
import Paragraph from '../../components/Paragraph';

import STYLES from './Rating.scss';

const getClassName = cssModules(STYLES);

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        The rating component&apos;s appearance changes based on the value
        provided.
      </Paragraph>,
    ],
    examples: [
      <div className={getClassName('bpk-docs-rating')}>
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="9 Excellent would recommend"
          title="Excellent"
          subtitle="This place was amazing"
          value={9}
        />
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="6.7 Average might recommend"
          title="Average"
          subtitle="Might recommend"
          value={6.7}
        />
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="2.3 Bad avoid here"
          title="Bad"
          subtitle="Avoid here"
          value={2.3}
        />
      </div>,
    ],
  },
];

const WebImagesPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Ratings"
    components={components}
    readme={ratingReadme}
    {...rest}
  />
);

export default WebImagesPage;
