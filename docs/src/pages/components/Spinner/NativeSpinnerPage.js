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

import readme from '../../../../../backpack-react-native/lib/bpk-component-spinner/README.md';
import iosScreenshotDefault from '../../../../../backpack-react-native/lib/bpk-component-spinner/screenshots/ios/default.png';
import iosScreenshotSmall from '../../../../../backpack-react-native/lib/bpk-component-spinner/screenshots/ios/small.png';
import androidScreenshotDefault from '../../../../../backpack-react-native/lib/bpk-component-spinner/screenshots/android/default.png';
import androidScreenshotSmall from '../../../../../backpack-react-native/lib/bpk-component-spinner/screenshots/android/small.png';
import { NativeComponentPage } from '../../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb:
      'By default, spinners come in a large size and are available in three types: primary, dark and light.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Default Spinner Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default Spinner Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'small',
    title: 'Small',
    blurb:
      'Spinners can also appear in a smaller size in the same types as mentioned above.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotSmall}`,
        altText: 'iOS Small Spinner Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotSmall}`,
        altText: 'Android Small Spinner Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeSpinnerPage = () => (
  <NativeComponentPage
    screenshots={components}
    readme={readme}
    githubPath="bpk-component-spinner"
  />
);

export default NativeSpinnerPage;
