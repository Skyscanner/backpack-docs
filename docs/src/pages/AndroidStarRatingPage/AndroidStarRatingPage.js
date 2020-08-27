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

import starRatingReadme from '../../../../backpack-android/docs/StarRating/README.md';
import starRatingInteractiveReadme from '../../../../backpack-android/docs/InteractiveStarRating/README.md';
import screenshotStarRating from '../../../../backpack-android/docs/StarRating/screenshots/default.png';
import screenshotStarRatingDm from '../../../../backpack-android/docs/StarRating/screenshots/default_dm.png';
import screenshotInteractive from '../../../../backpack-android/docs/InteractiveStarRating/screenshots/default.png';
import screenshotInteractiveDm from '../../../../backpack-android/docs/InteractiveStarRating/screenshots/default_dm.png';
import { AndroidComponentPage } from '../../components/ComponentPage';
import Paragraph from '../../components/Paragraph';

const components = [
  {
    id: 'default',
    title: 'Star Rating',
    blurb:
      'By default, star ratings are shown in a static form. These can be set at half star intervals. ',
    screenshots: [
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotStarRating}`,
        altText: 'Android Star Rating Component',
        subText: '(Google Pixel emulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotStarRatingDm}`,
        altText: 'Android Star Rating Component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'interactive',
    title: 'Interactive Star Rating',
    blurb: [
      <Paragraph>
        This version allows users to leave feedback on a given feature or area
        by setting a rating. These can be set at half star intervals.
      </Paragraph>,
    ],
    screenshots: [
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotInteractive}`,
        altText: 'Android Interactive Star Rating Component',
        subText: '(Google Pixel emulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotInteractiveDm}`,
        altText: 'Android Interactive Star Rating Component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
];

const AndroidStarRatingPage = () => (
  <AndroidComponentPage
    screenshots={components}
    readme={starRatingReadme + starRatingInteractiveReadme}
    documentationId="net.skyscanner.backpack.starrating"
  />
);

export default AndroidStarRatingPage;
