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

import readme from '../../../../../backpack-ios/Backpack/Rating/README.md';
import screenshotDefault from '../../../../../backpack-ios/screenshots/iPhone 8-rating___default_lm.png';
import screenshotDefaultDm from '../../../../../backpack-ios/screenshots/iPhone 8-rating___default_dm.png';
import screenshotSubtitle from '../../../../../backpack-ios/screenshots/iPhone 8-rating___subtitles_lm.png';
import screenshotSubtitleDm from '../../../../../backpack-ios/screenshots/iPhone 8-rating___subtitles_dm.png';
import screenshotVertical from '../../../../../backpack-ios/screenshots/iPhone 8-rating___vertical_lm.png';
import screenshotVerticalDm from '../../../../../backpack-ios/screenshots/iPhone 8-rating___vertical_dm.png';
import screenshotSizes from '../../../../../backpack-ios/screenshots/iPhone 8-rating___sizes_lm.png';
import screenshotSizesDm from '../../../../../backpack-ios/screenshots/iPhone 8-rating___sizes_dm.png';
import screenshotPill from '../../../../../backpack-ios/screenshots/iPhone 8-rating___pill_lm.png';
import screenshotPillDm from '../../../../../backpack-ios/screenshots/iPhone 8-rating___pill_dm.png';
import { IOSComponentPage } from '../../../components/ComponentPage';

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
        subText: '(iPhone 8 simulator - dark mode)',
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
        altText: 'iOS rating with subtitle.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSubtitleDm}`,
        altText: 'iOS rating with subtitle.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'vertical',
    title: 'Vertical layout',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotVertical}`,
        altText: 'iOS vertical rating.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotVerticalDm}`,
        altText: 'iOS vertical rating.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'pill',
    title: 'Pill layout',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotPill}`,
        altText: 'iOS pill rating.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotPillDm}`,
        altText: 'iOS pill rating.',
        subText: '(iPhone 8 simulator - dark mode)',
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
        altText: 'iOS rating at different sizes.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSizesDm}`,
        altText: 'iOS rating at different sizes.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSRatingPage = () => (
  <IOSComponentPage
    screenshots={components}
    readme={readme}
    documentationId="BPKRating"
    githubPath="Rating"
  />
);

export default IOSRatingPage;
