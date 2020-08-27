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
import BpkRating, { RATING_SIZES, RATING_TYPES } from 'bpk-component-rating';
import ratingReadme from 'bpk-component-rating/README.md';
import { cssModules } from 'bpk-react-utils';

import { WebComponentPage } from '../../components/ComponentPage';
import Paragraph from '../../components/Paragraph';

import STYLES from './Rating.scss';

const getClassName = cssModules(STYLES);

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        The rating components appearance changes based on the value provided.
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
  {
    id: 'small',
    title: 'Small rating',
    blurb: [],
    examples: [
      <div className={getClassName('bpk-docs-rating')}>
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="9 Excellent would recommend"
          title="Excellent"
          subtitle="This place was amazing"
          value={9}
          size={RATING_SIZES.sm}
        />
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="6.7 Average might recommend"
          title="Average"
          subtitle="Might recommend"
          value={6.7}
          size={RATING_SIZES.sm}
        />
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="2.3 Bad avoid here"
          title="Bad"
          subtitle="Avoid here"
          value={2.3}
          size={RATING_SIZES.sm}
        />
      </div>,
    ],
  },
  {
    id: 'large',
    title: 'Large rating',
    blurb: [],
    examples: [
      <div className={getClassName('bpk-docs-rating')}>
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="9 Excellent would recommend"
          title="Excellent"
          subtitle="This place was amazing"
          value={9}
          size={RATING_SIZES.lg}
        />
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="6.7 Average might recommend"
          title="Average"
          subtitle="Might recommend"
          value={6.7}
          size={RATING_SIZES.lg}
        />
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="2.3 Bad avoid here"
          title="Bad"
          subtitle="Avoid here"
          value={2.3}
          size={RATING_SIZES.lg}
        />
      </div>,
    ],
  },
  {
    id: 'vertical',
    title: 'Vertical ratings',
    blurb: [
      <Paragraph>
        The rating components can also be displayed in a vertical layout.
      </Paragraph>,
    ],
    examples: [
      <div>
        <BpkRating
          className={getClassName('bpk-docs-rating--vertical')}
          ariaLabel="9 Excellent would recommend"
          title="Excellent"
          subtitle="This place was amazing"
          value={9}
          size={RATING_SIZES.sm}
          vertical
        />
        <BpkRating
          className={getClassName('bpk-docs-rating--vertical')}
          ariaLabel="6.7 Average might recommend"
          title="Average"
          subtitle="Might recommend"
          value={6.7}
          vertical
        />
        <BpkRating
          className={getClassName('bpk-docs-rating--vertical')}
          ariaLabel="2.3 Bad avoid here"
          title="Bad"
          subtitle="Avoid here"
          value={2.3}
          size={RATING_SIZES.lg}
          vertical
        />
      </div>,
    ],
  },
  {
    id: 'title',
    title: 'Title-only ratings',
    blurb: [
      <Paragraph>
        The rating component can have just a title with no subtitle.
      </Paragraph>,
    ],
    examples: [
      <div>
        <BpkRating
          ariaLabel="9 Excellent would recommend"
          title="Excellent"
          value={9}
        />
      </div>,
    ],
  },
  {
    id: 'pill',
    title: 'Pill style ratings',
    blurb: [<Paragraph>The rating components have a pill style.</Paragraph>],
    examples: [
      <div className={getClassName('bpk-docs-rating')}>
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="9 Excellent would recommend"
          title="Excellent"
          subtitle="This place was amazing"
          value={9}
          type={RATING_TYPES.pill}
        />
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="6.7 Average might recommend"
          title="Average"
          subtitle="Might recommend"
          value={6.7}
          type={RATING_TYPES.pill}
        />
        <BpkRating
          className={getClassName('bpk-docs-rating--margin')}
          ariaLabel="2.3 Bad avoid here"
          title="Bad"
          subtitle="Avoid here"
          value={2.3}
          type={RATING_TYPES.pill}
        />
      </div>,
    ],
  },
];

const WebRatingPage = () => (
  <WebComponentPage examples={components} readme={ratingReadme} />
);

export default WebRatingPage;
