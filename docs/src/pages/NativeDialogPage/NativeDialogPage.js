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

import readme from '../../../../backpack-react-native/lib/bpk-component-dialog/README.md';
import iosScreenshotSimple from '../../../../backpack-react-native/lib/bpk-component-dialog/screenshots/ios/simple.png';
import iosScreenshotOption from '../../../../backpack-react-native/lib/bpk-component-dialog/screenshots/ios/option.png';
import iosScreenshotBottom from '../../../../backpack-react-native/lib/bpk-component-dialog/screenshots/ios/bottom.png';
import androidScreenshotSimple from '../../../../backpack-react-native/lib/bpk-component-dialog/screenshots/android/simple.png';
import androidScreenshotOption from '../../../../backpack-react-native/lib/bpk-component-dialog/screenshots/android/option.png';
import androidScreenshotBottom from '../../../../backpack-react-native/lib/bpk-component-dialog/screenshots/android/bottom.png';
import { NativeComponentPage } from '../../components/ComponentPage';

const components = [
  {
    id: 'simple',
    title: 'Simple example',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotSimple}`,
        altText: 'iOS Dialog Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotSimple}`,
        altText: 'Android Dialog Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'options',
    title: 'Multiple CTAs',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotOption}`,
        altText: 'iOS Dialog Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotOption}`,
        altText: 'Android Dialog Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'bottom',
    title: 'Bottom sheet',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotBottom}`,
        altText: 'iOS Dialog Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotBottom}`,
        altText: 'Android Dialog Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeDialogPage = () => (
  <NativeComponentPage screenshots={components} readme={readme} />
);

export default NativeDialogPage;
