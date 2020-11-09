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

import readme from '../../../../../backpack-ios/Backpack/TappableLinkLabel/README.md';
import screenshotMultiple from '../../../../../backpack-ios/screenshots/iPhone 8-tappable-link-label___multiple_lm.png';
import screenshotAlternate from '../../../../../backpack-ios/screenshots/iPhone 8-tappable-link-label___alternate-style_lm.png';
import screenshotMultipleDm from '../../../../../backpack-ios/screenshots/iPhone 8-tappable-link-label___multiple_dm.png';
import screenshotAlternateDm from '../../../../../backpack-ios/screenshots/iPhone 8-tappable-link-label___alternate-style_dm.png';
import { IOSComponentPage } from '../../../components/ComponentPage';

const components = [
  {
    id: 'multiple',
    title: 'With multiple links',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotMultiple}`,
        altText: 'iOS Tappable Link Label',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotMultipleDm}`,
        altText: 'iOS Tappable Link Label',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'alternate-style',
    title: 'Alternate style',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotAlternate}`,
        altText: 'iOS Tappable Link Label with Alternate style',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotAlternateDm}`,
        altText: 'iOS Tappable Link Label with Alternate style',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSTappableLinkLabelPage = () => (
  <IOSComponentPage
    screenshots={components}
    readme={readme}
    documentationId="BPKTappableLinkLabel"
    githubPath="TappableLinkLabel"
  />
);

export default IOSTappableLinkLabelPage;
