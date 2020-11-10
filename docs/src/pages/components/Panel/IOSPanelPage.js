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

import readme from '../../../../../backpack-ios/Backpack/Panel/README.md';
import screenshotDefault from '../../../../../backpack-ios/screenshots/iPhone 8-panel___default_lm.png';
import screenshotWithoutPadding from '../../../../../backpack-ios/screenshots/iPhone 8-panel___without-padding_lm.png';
import screenshotElevated from '../../../../../backpack-ios/screenshots/iPhone 8-panel___elevated_lm.png';
import screenshotDefaultDm from '../../../../../backpack-ios/screenshots/iPhone 8-panel___default_dm.png';
import screenshotWithoutPaddingDm from '../../../../../backpack-ios/screenshots/iPhone 8-panel___without-padding_dm.png';
import screenshotElevatedDm from '../../../../../backpack-ios/screenshots/iPhone 8-panel___elevated_dm.png';
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
        altText: 'Panel for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefaultDm}`,
        altText: 'Panel for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'withoutPadding',
    title: 'Without padding',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithoutPadding}`,
        altText: 'Panel for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithoutPaddingDm}`,
        altText: 'Panel for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'elevated',
    title: 'Elevated',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotElevated}`,
        altText: 'Panel for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotElevatedDm}`,
        altText: 'Panel for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSPanelPage = () => (
  <IOSComponentPage
    screenshots={components}
    readme={readme}
    documentationId="BPKPanel"
    githubPath="Panel"
  />
);

export default IOSPanelPage;
