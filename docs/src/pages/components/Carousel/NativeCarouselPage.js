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

import iosScreenshotDefault from '../../../../../backpack-react-native/lib/bpk-component-carousel/screenshots/ios/default.png';
import androidScreenshotDefault from '../../../../../backpack-react-native/lib/bpk-component-carousel/screenshots/android/default.png';
import readme from '../../../../../backpack-react-native/lib/bpk-component-carousel/README.md';
import Paragraph from '../../../components/Paragraph';
import { NativeComponentPage } from '../../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: (
      <Paragraph>
        Whilst this example shows images, any content can be inserted here.
      </Paragraph>
    ),
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS default carousel component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android default carousel component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeCarouselPage = () => (
  <NativeComponentPage
    screenshots={components}
    readme={readme}
    githubPath="bpk-component-carousel"
  />
);

export default NativeCarouselPage;
