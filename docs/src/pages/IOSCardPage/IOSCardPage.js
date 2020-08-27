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

import readme from '../../../../backpack-ios/Backpack/Card/README.md';
import screenshotDefault from '../../../../backpack-ios/screenshots/iPhone 8-card___default_lm.png';
import screenshotSelected from '../../../../backpack-ios/screenshots/iPhone 8-card___selected_lm.png';
import screenshotCornerStyleLarge from '../../../../backpack-ios/screenshots/iPhone 8-card___corner-style-large_lm.png';
import screenshotWithoutPadding from '../../../../backpack-ios/screenshots/iPhone 8-card___without-padding_lm.png';
import screenshotWithDivider from '../../../../backpack-ios/screenshots/iPhone 8-card___with-divider_lm.png';
import screenshotWithDividerWithoutPadding from '../../../../backpack-ios/screenshots/iPhone 8-card___with-divider-without-padding_lm.png';
import screenshotWithDividerCornerStyleLarge from '../../../../backpack-ios/screenshots/iPhone 8-card___with-divider-and-corner-style-large_lm.png';
import screenshotWithDividerArrangedVertically from '../../../../backpack-ios/screenshots/iPhone 8-card___with-divider-arranged-vertically_lm.png';
import screenshotDefaultDm from '../../../../backpack-ios/screenshots/iPhone 8-card___default_dm.png';
import screenshotSelectedDm from '../../../../backpack-ios/screenshots/iPhone 8-card___selected_dm.png';
import screenshotCornerStyleLargeDm from '../../../../backpack-ios/screenshots/iPhone 8-card___corner-style-large_dm.png';
import screenshotWithoutPaddingDm from '../../../../backpack-ios/screenshots/iPhone 8-card___without-padding_dm.png';
import screenshotWithDividerDm from '../../../../backpack-ios/screenshots/iPhone 8-card___with-divider_dm.png';
import screenshotWithDividerWithoutPaddingDm from '../../../../backpack-ios/screenshots/iPhone 8-card___with-divider-without-padding_dm.png';
import screenshotWithDividerCornerStyleLargeDm from '../../../../backpack-ios/screenshots/iPhone 8-card___with-divider-and-corner-style-large_dm.png';
import screenshotWithDividerArrangedVerticallyDm from '../../../../backpack-ios/screenshots/iPhone 8-card___with-divider-arranged-vertically_dm.png';
import { IOSComponentPage } from '../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefault}`,
        altText: 'iOS default card.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefaultDm}`,
        altText: 'iOS default card.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'selected',
    title: 'Selected',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSelected}`,
        altText: 'iOS selected card.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSelectedDm}`,
        altText: 'iOS selected card.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'corner-style-large',
    title: 'Large corner style',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotCornerStyleLarge}`,
        altText: 'iOS card with large corner style.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotCornerStyleLargeDm}`,
        altText: 'iOS card with large corner style.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'without-padding',
    title: 'Without padding',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithoutPadding}`,
        altText: 'iOS card without padding.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithoutPaddingDm}`,
        altText: 'iOS card without padding.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'with-divider',
    title: 'With divider',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithDivider}`,
        altText: 'iOS card with divider.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithDividerDm}`,
        altText: 'iOS card with divider.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'with-divider-arranged-vertically',
    title: 'With divider arranged vertically',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithDividerArrangedVertically}`,
        altText: 'iOS card with divider arranged vertically.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithDividerArrangedVerticallyDm}`,
        altText: 'iOS card with divider arranged vertically.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'with-divider-without-padding',
    title: 'With divider and without padding',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithDividerWithoutPadding}`,
        altText: 'iOS card with divider and without padding.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithDividerWithoutPaddingDm}`,
        altText: 'iOS card with divider and without padding.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'with-divider-corner-style-large',
    title: 'With divider and with large corner style',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithDividerCornerStyleLarge}`,
        altText: 'iOS card with divider and large corner style.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithDividerCornerStyleLargeDm}`,
        altText: 'iOS card with divider and large corner style.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSCardPage = () => (
  <IOSComponentPage
    screenshots={components}
    readme={readme}
    documentationId="BPKCard"
  />
);

export default IOSCardPage;
