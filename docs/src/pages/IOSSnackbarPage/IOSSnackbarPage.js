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

import readme from '../../../../backpack-ios/Backpack/Snackbar/README.md';
import screenshotWithText from '../../../../backpack-ios/screenshots/iPhone 8-snack-bar___with-text_lm.png';
import screenshotWithTextDm from '../../../../backpack-ios/screenshots/iPhone 8-snack-bar___with-text_dm.png';
import screenshotWithTextAndButton from '../../../../backpack-ios/screenshots/iPhone 8-snack-bar___with-text-and-button_lm.png';
import screenshotWithTextAndButtonDm from '../../../../backpack-ios/screenshots/iPhone 8-snack-bar___with-text-and-button_dm.png';
import screenshotWithTextAndIconButton from '../../../../backpack-ios/screenshots/iPhone 8-snack-bar___with-text-and-icon-only-button_lm.png';
import screenshotWithTextAndIconButtonDm from '../../../../backpack-ios/screenshots/iPhone 8-snack-bar___with-text-and-icon-only-button_dm.png';
import { IOSComponentPage } from '../../components/ComponentPage';

const components = [
  {
    id: 'withText',
    title: 'With text',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithText}`,
        altText: 'Snackbar for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithTextDm}`,
        altText: 'Snackbar for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'withButton',
    title: 'With text and button',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithTextAndButton}`,
        altText: 'Snackbar for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithTextAndButtonDm}`,
        altText: 'Snackbar for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'withTextIconButton',
    title: 'With text and icon-only button',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithTextAndIconButton}`,
        altText: 'Snackbar for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotWithTextAndIconButtonDm}`,
        altText: 'Snackbar for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSSnackbarPage = () => (
  <IOSComponentPage
    screenshots={components}
    readme={readme}
    documentationId="BPKSnackbar"
  />
);

export default IOSSnackbarPage;
