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

import readme from '../../../../backpack-android/docs/StarRating/README.md';
import screenshotDefault from '../../../../backpack-android/docs/StarRating/screenshots/default.png';
import screenshotDefaultDm from '../../../../backpack-android/docs/StarRating/screenshots/default_dm.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb:
      'By default, star ratings are shown in a static form. These can be set at half star intervals. ', // eslint-disable-line max-len
    screenshots: [
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotDefault}`,
        altText: 'Android Star Rating Component',
        subText: '(Google Pixel emulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotDefaultDm}`,
        altText: 'Android Star Rating Component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
];

const AndroidStarRatingPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Star rating"
    components={components}
    readme={readme}
    {...rest}
  />
);

export default AndroidStarRatingPage;
