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

import readme from '../../../../backpack-react-native/lib/bpk-component-chip/README.md';
import iosScreenshotDefault from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/ios/default.png';
import iosScreenshotDefaultWithIcon from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/ios/defaultWithIcon.png';
import iosScreenshotDefaultWithTrailingIcon from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/ios/defaultWithTrailingIcon.png';
import iosScreenshotDismissible from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/ios/dismissible.png';
import iosScreenshotOutline from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/ios/outline.png';
import iosScreenshotOutlineDismissible from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/ios/outlineDismissible.png';
import androidScreenshotDefaultWithIcon from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/android/defaultWithIcon.png';
import androidScreenshotDefaultWithTrailingIcon from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/android/defaultWithTrailingIcon.png';
import androidScreenshotDefault from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/android/default.png';
import androidScreenshotDismissible from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/android/dismissible.png';
import androidScreenshotOutline from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/android/outline.png';
import androidScreenshotOutlineDismissible from '../../../../backpack-react-native/lib/bpk-component-chip/screenshots/android/outlineDismissible.png';
import { NativeComponentPage } from '../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: 'Chips can be pressed to function as on/off toggles.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Default Chip Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default Chip Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'with-icons',
    title: 'With icons',
    blurb: 'Icons can be placed on either side of the text.',
    screenshots: [
      {
        title: 'iOS — Leading icon',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefaultWithIcon}`,
        altText: 'iOS Default Chip Component With Leading Icon',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'iOS — Trailing icon',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefaultWithTrailingIcon}`,
        altText: 'iOS Default Chip Component With Trailing Icon',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android — Leading icon',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefaultWithIcon}`,
        altText: 'Android Default Chip Component With Leading Icon',
        subText: '(Google Pixel emulator)',
      },
      {
        title: 'Android - Trailing icon',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefaultWithTrailingIcon}`,
        altText: 'Android Default Chip Component With Trailing Icon',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'dismissible',
    title: 'Dismissible',
    blurb: 'Dismissible chips have a close button to remove them.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDismissible}`,
        altText: 'iOS Dismissible Chip Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDismissible}`,
        altText: 'Android Dismissible Chip Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'outline',
    title: 'Outline',
    blurb: 'Outline Chips can be pressed to function as on/off toggles.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotOutline}`,
        altText: 'iOS Outline Chip Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotOutline}`,
        altText: 'Android Outline Chip Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'outline-dismissible',
    title: 'Outline Dismissible',
    blurb: 'Outline Dismissible chips have a close button to remove them.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotOutlineDismissible}`,
        altText: 'iOS Outline Dismissible Chip Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotOutlineDismissible}`,
        altText: 'Android Outline Dismissible Chip Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeChipsPage = () => (
  <NativeComponentPage
    screenshots={components}
    readme={readme}
    githubPath="bpk-component-chip"
  />
);

export default NativeChipsPage;
