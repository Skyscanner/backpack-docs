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

import readme from '../../../../../backpack-ios/Backpack/OverlayView/README.md';
import screenshotDefault from '../../../../../backpack-ios/screenshots/iPhone 8-overlay-view___default_lm.png';
import screenshotDefaultDm from '../../../../../backpack-ios/screenshots/iPhone 8-overlay-view___default_dm.png';
import screenshotNoOverlay from '../../../../../backpack-ios/screenshots/iPhone 8-overlay-view___overlay-type-none_lm.png';
import screenshotNoOverlayDm from '../../../../../backpack-ios/screenshots/iPhone 8-overlay-view___overlay-type-none_dm.png';
import screenshotContent from '../../../../../backpack-ios/screenshots/iPhone 8-overlay-view___foreground-content_lm.png';
import screenshotContentDm from '../../../../../backpack-ios/screenshots/iPhone 8-overlay-view___foreground-content_dm.png';
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
        altText: 'iOS default overlay-view.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefaultDm}`,
        altText: 'iOS default overlay-view.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'no-tint',
    title: 'Disabled tint',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotNoOverlay}`,
        altText: 'iOS overlay-view with tint disabled.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotNoOverlayDm}`,
        altText: 'iOS overlay-view with tint disabled.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'foreground-content',
    title: 'Foreground content',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotContent}`,
        altText: 'iOS overlay-view with foreground content.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotContentDm}`,
        altText: 'iOS overlay-view with foreground content.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSOverlayPage = () => (
  <IOSComponentPage
    screenshots={components}
    readme={readme}
    documentationId="BPKOverlayView"
    githubPath="OverlayView"
  />
);

export default IOSOverlayPage;
