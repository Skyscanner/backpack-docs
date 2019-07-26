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

import readme from '../../../../backpack-android/docs/Rating/README.md';
import screenshotDefault from '../../../../backpack-android/docs/Rating/screenshots/default.png';
import screenshotSizes from '../../../../backpack-android/docs/Rating/screenshots/sizes.png';
import screenshotVertical from '../../../../backpack-android/docs/Rating/screenshots/vertical.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotDefault}`,
        altText: 'Android Rating Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'sizes',
    title: 'Sizes',
    screenshots: [
      {
        title: 'Sizes',
        width: 1080,
        height: 1920,
        src: `/${screenshotSizes}`,
        altText: 'Different sizes of the Rating component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'vertical',
    title: 'Vertical',
    screenshots: [
      {
        title: 'Vertical',
        width: 1080,
        height: 1920,
        src: `/${screenshotVertical}`,
        altText: 'Vertical orientation of the Rating component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const AndroidRatingPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Rating"
    components={components}
    readme={readme}
    androidDocId="net.skyscanner.backpack.rating"
    {...rest}
  />
);

export default AndroidRatingPage;
