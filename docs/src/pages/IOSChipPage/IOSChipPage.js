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

import readme from '../../../../backpack-ios/Backpack/Chip/README.md';
import screenshotDefault from '../../../../backpack-ios/screenshots/iPhone 8-chip___default_lm.png';
import screenshotWithIcons from '../../../../backpack-ios/screenshots/iPhone 8-chip___with-icons_lm.png';
import screenshotWithoutShadow from '../../../../backpack-ios/screenshots/iPhone 8-chip___without-shadow_lm.png';
import screenshotWithBackgroundColor from '../../../../backpack-ios/screenshots/iPhone 8-chip___background-color_lm.png';
import screenshotDefaultDm from '../../../../backpack-ios/screenshots/iPhone 8-chip___default_dm.png';
import screenshotWithIconsDm from '../../../../backpack-ios/screenshots/iPhone 8-chip___with-icons_dm.png';
import screenshotWithoutShadowDm from '../../../../backpack-ios/screenshots/iPhone 8-chip___without-shadow_dm.png';
import screenshotWithBackgroundColorDm from '../../../../backpack-ios/screenshots/iPhone 8-chip___background-color_dm.png';
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
        altText: 'Chips for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefaultDm}`,
        altText: 'Chips for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'withIcons',
    title: 'With icons',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithIcons}`,
        altText: 'Chips for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithIconsDm}`,
        altText: 'Chips for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'withoutShadow',
    title: 'Without shadow',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithoutShadow}`,
        altText: 'Chips for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithoutShadowDm}`,
        altText: 'Chips for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'withCustomBackgroundColor',
    title: 'With custom background color',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithBackgroundColor}`,
        altText: 'Chips for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithBackgroundColorDm}`,
        altText: 'Chips for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSChipPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Chip"
    components={components}
    readme={readme}
    iosDocId="BPKChip"
    showMenu
    {...rest}
  />
);

export default IOSChipPage;
