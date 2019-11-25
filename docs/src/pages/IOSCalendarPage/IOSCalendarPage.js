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

import readme from '../../../../backpack-ios/Backpack/Calendar/README.md';
import screenshotSingle from '../../../../backpack-ios/screenshots/Calendar/single.png';
import screenshotRange from '../../../../backpack-ios/screenshots/Calendar/range.png';
import screenshotMultiple from '../../../../backpack-ios/screenshots/Calendar/multiple.png';
import screenshotPill from '../../../../backpack-ios/screenshots/Calendar/pill.png';
import screenshotSingleDm from '../../../../backpack-ios/screenshots/Calendar/single_dm.png';
import screenshotRangeDm from '../../../../backpack-ios/screenshots/Calendar/range_dm.png';
import screenshotMultipleDm from '../../../../backpack-ios/screenshots/Calendar/multiple_dm.png';
import screenshotPillDm from '../../../../backpack-ios/screenshots/Calendar/pill_dm.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'single',
    title: 'Single date',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSingle}`,
        altText: 'Calendar for iOS with a single date selected.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSingleDm}`,
        altText: 'Calendar for iOS with a single date selected.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'range',
    title: 'Date range',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotRange}`,
        altText: 'Calendar for iOS with a date range selected.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotRangeDm}`,
        altText: 'Calendar for iOS with a date range selected.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'multiple',
    title: 'Multiple dates',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotMultiple}`,
        altText: 'Calendar for iOS with multiple dates selected.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotMultipleDm}`,
        altText: 'Calendar for iOS with multiple dates selected.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'pill',
    title: 'Showing year pill',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotPill}`,
        altText: 'Calendar for iOS with year pill shown.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotPillDm}`,
        altText: 'Calendar for iOS with year pill shown.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSCalendarPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Calendar"
    components={components}
    readme={readme}
    iosDocId="BPKCalendar"
    showMenu
    {...rest}
  />
);

export default IOSCalendarPage;
