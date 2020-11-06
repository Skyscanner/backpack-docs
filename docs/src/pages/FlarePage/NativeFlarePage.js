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

import readme from '../../../../backpack-react-native/lib/bpk-component-flare/README.md';
import androidScreenshotDefault from '../../../../backpack-react-native/lib/bpk-component-flare/screenshots/android/default.png';
import androidScreenshotImage from '../../../../backpack-react-native/lib/bpk-component-flare/screenshots/android/image.png';
import androidScreenshotPointerUp from '../../../../backpack-react-native/lib/bpk-component-flare/screenshots/android/pointer-up.png';
import iosScreenshotDefault from '../../../../backpack-react-native/lib/bpk-component-flare/screenshots/ios/default.png';
import iosScreenshotImage from '../../../../backpack-react-native/lib/bpk-component-flare/screenshots/ios/image.png';
import iosScreenshotPointerUp from '../../../../backpack-react-native/lib/bpk-component-flare/screenshots/ios/pointer-up.png';
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
        altText: 'iOS Flare (Default)',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Flare (Default)',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'image',
    title: 'Background image',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotImage}`,
        altText: 'iOS Flare (Background image)',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotImage}`,
        altText: 'Android Flare (Background image)',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'pointer-up',
    title: 'Pointing up',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotPointerUp}`,
        altText: 'iOS Flare (Pointer facing up)',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotPointerUp}`,
        altText: 'Android Flare (Pointer facing up)',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeFlarePage = () => (
  <NativeComponentPage
    screenshots={components}
    readme={readme}
    githubPath="bpk-component-flare"
  />
);

export default NativeFlarePage;
