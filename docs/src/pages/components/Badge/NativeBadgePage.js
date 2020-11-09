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

/* @flow strict */

import React from 'react';

import readme from '../../../../backpack-react-native/lib/bpk-component-badge/README.md';
import iosScreenshotDefault from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/ios/default.png';
import iosScreenshotDockedStart from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/ios/docked-start.png';
import iosScreenshotDockedEnd from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/ios/docked-end.png';
import iosScreenshotWithIcon from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/ios/with-icon.png';
import iosScreenshotWithTrailingIcon from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/ios/with-trailing-icon.png';
import iosScreenshotWithMultipleIcons from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/ios/with-multiple-icons.png';
import androidScreenshotDefault from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/android/default.png';
import androidScreenshotDockedStart from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/android/docked-start.png';
import androidScreenshotDockedEnd from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/android/docked-end.png';
import androidScreenshotWithIcon from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/android/with-icon.png';
import androidScreenshotWithTrailingIcon from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/android/with-trailing-icon.png';
import androidScreenshotWithMultipleIcons from '../../../../backpack-react-native/lib/bpk-component-badge/screenshots/android/with-multiple-icons.png';
import { NativeComponentPage } from '../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Default Badge Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default Badge Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'with-icon',
    title: 'With an icon',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotWithIcon}`,
        altText: 'iOS Badge Component with a single icon',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotWithIcon}`,
        altText: 'Android Badge Component with a single icon',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'with-trailing-icon',
    title: 'With a trailing icon',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotWithTrailingIcon}`,
        altText: 'iOS Badge Component with a trailing icon',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotWithTrailingIcon}`,
        altText: 'Android Badge Component with a trailing icon',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'with-icons',
    title: 'With multiple icons and an icon separator',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotWithMultipleIcons}`,
        altText: 'iOS Badge Component with multiple icons',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotWithMultipleIcons}`,
        altText: 'Android Badge Component with multiple icons',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'docked-start',
    title: 'Docked (start)',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDockedStart}`,
        altText: 'iOS Docked (start) Badge Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDockedStart}`,
        altText: 'Android Docked (start) Badge Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'docked-end',
    title: 'Docked (end)',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDockedEnd}`,
        altText: 'iOS Docked (end) Badge Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDockedEnd}`,
        altText: 'Android Docked (end) Badge Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeBadgePage = () => (
  <NativeComponentPage
    screenshots={components}
    readme={readme}
    githubPath="bpk-component-badge"
  />
);

export default NativeBadgePage;
