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

import readme from '../../../../backpack-react-native/src/js/bpk-component-rating/README.md';
import androidScreenshotDefault from '../../../../backpack-react-native/src/js/bpk-component-rating/screenshots/android/default.png';
import androidScreenshotSizes from '../../../../backpack-react-native/src/js/bpk-component-rating/screenshots/android/sizes.png';
import androidScreenshotVertical from '../../../../backpack-react-native/src/js/bpk-component-rating/screenshots/android/vertical.png';
import iosScreenshotDefault from '../../../../backpack-react-native/src/js/bpk-component-rating/screenshots/ios/default.png';
import iosScreenshotSizes from '../../../../backpack-react-native/src/js/bpk-component-rating/screenshots/ios/sizes.png';
import iosScreenshotVertical from '../../../../backpack-react-native/src/js/bpk-component-rating/screenshots/ios/vertical.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb:
      "The rating component's colour changes based on the score passed in.",
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS rating component.',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android rating component.',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'sizes',
    title: 'Sizes',
    blurb:
      'The rating component is available in a range of sizes to meet your every need.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotSizes}`,
        altText: 'iOS rating component in different sizes',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotSizes}`,
        altText: 'Android rating component in different sizes.',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'vertical',
    title: 'Vertical',
    blurb: 'You can even make it use a vertical layout.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotVertical}`,
        altText: 'iOS rating component in different sizes.',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotVertical}`,
        altText: 'Android rating component in different sizes.',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeRatingPage = ({ ...rest }: { [string]: any }) => (
  <DocsPageBuilder
    title="Rating"
    components={components}
    readme={readme}
    showMenu
    showBetaWarning
    {...rest}
  />
);

export default NativeRatingPage;
