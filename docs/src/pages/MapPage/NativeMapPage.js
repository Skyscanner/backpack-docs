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

import iosDefaultScreenshot from '../../../../backpack-react-native/lib/bpk-component-map/screenshots/ios/default.png';
import androidDefaultScreenshot from '../../../../backpack-react-native/lib/bpk-component-map/screenshots/android/default.png';
import iosPriceMarkerScreenshot from '../../../../backpack-react-native/lib/bpk-component-map/screenshots/ios/price-markers.png';
import androidPriceMarkerScreenshot from '../../../../backpack-react-native/lib/bpk-component-map/screenshots/android/price-markers.png';
import iosIconMarkerScreenshot from '../../../../backpack-react-native/lib/bpk-component-map/screenshots/ios/map-markers.png';
import androidIconMarkerScreenshot from '../../../../backpack-react-native/lib/bpk-component-map/screenshots/android/map-markers.png';
import readme from '../../../../backpack-react-native/lib/bpk-component-map/README.md';
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
        src: `/${iosDefaultScreenshot}`,
        altText: 'iOS Map Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidDefaultScreenshot}`,
        altText: 'Android Map Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'price-markers',
    title: 'Price Markers',
    blurb:
      'Use price markers to display a collection of prices on a map. By default, they appear in sky blue. When focused, they grow in size and turn white, and when viewed they turn light blue.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosPriceMarkerScreenshot}`,
        altText: 'iOS Map Price Marker Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidPriceMarkerScreenshot}`,
        altText: 'Android Map Price Marker Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'icon-markers',
    title: 'Icon Markers',
    blurb:
      'Use icon markers to display points of interest on a map. By default, they appear in Monteverde. When focused, they grow in size and turn white with a Monteverde border.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosIconMarkerScreenshot}`,
        altText: 'iOS Map Icon Marker Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidIconMarkerScreenshot}`,
        altText: 'Android Map Icon Marker Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeMapSubpage = () => (
  <NativeComponentPage
    screenshots={components}
    readme={readme}
    githubPath="bpk-component-map"
  />
);

export default NativeMapSubpage;
