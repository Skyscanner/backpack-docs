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

import readme from '../../../../backpack-ios/Backpack/Rating/README.md';
import screenshotDefault from '../../../../backpack-ios/screenshots/Rating/default.png';
import screenshotSubtitle from '../../../../backpack-ios/screenshots/Rating/subtitles.png';
import screenshotSizes from '../../../../backpack-ios/screenshots/Rating/sizes.png';
import screenshotDefaultDm from '../../../../backpack-ios/screenshots/Rating/default_dm.png';
import screenshotSubtitleDm from '../../../../backpack-ios/screenshots/Rating/subtitles_dm.png';
import screenshotSizesDm from '../../../../backpack-ios/screenshots/Rating/sizes_dm.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefault}`,
        altText: 'iOS default rating.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefaultDm}`,
        altText: 'iOS default rating.',
        subText: '(iPhone 8 simulator)',
      },
    ],
  },
  {
    id: 'subtitle',
    title: 'Subtitle',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSubtitle}`,
        altText: 'iOS default rating.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSubtitleDm}`,
        altText: 'iOS default rating.',
        subText: '(iPhone 8 simulator)',
      },
    ],
  },
  {
    id: 'sizes',
    title: 'Sizes',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSizes}`,
        altText: 'iOS default rating.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSizesDm}`,
        altText: 'iOS default rating.',
        subText: '(iPhone 8 simulator)',
      },
    ],
  },
];

const IOSRatingPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Rating"
    components={components}
    readme={readme}
    iosDocId="BPKRating"
    showMenu
    {...rest}
  />
);

export default IOSRatingPage;
