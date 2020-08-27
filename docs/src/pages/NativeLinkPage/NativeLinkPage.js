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

import readme from '../../../../backpack-react-native/lib/bpk-component-text-link/README.md';
import iosScreenshotDefault from '../../../../backpack-react-native/lib/bpk-component-text-link/screenshots/ios/default.png';
import androidScreenshotDefault from '../../../../backpack-react-native/lib/bpk-component-text-link/screenshots/android/default.png';
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
        altText: 'iOS Default Text Link Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default Text Link Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeLinkPage = () => (
  <NativeComponentPage screenshots={components} readme={readme} />
);

export default NativeLinkPage;
