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

import readme from '../../../../backpack-android/docs/Flare/README.md';
import screenshotDefault from '../../../../backpack-android/docs/Flare/screenshots/default.png';
import screenshotDefaultDm from '../../../../backpack-android/docs/Flare/screenshots/default_dm.png';
import screenshotRounded from '../../../../backpack-android/docs/Flare/screenshots/rounded.png';
import screenshotRoundedDm from '../../../../backpack-android/docs/Flare/screenshots/rounded_dm.png';
import screenshotPointerOffset from '../../../../backpack-android/docs/Flare/screenshots/pointer-offset.png';
import screenshotPointerOffsetDm from '../../../../backpack-android/docs/Flare/screenshots/pointer-offset_dm.png';
import screenshotInsetPadding from '../../../../backpack-android/docs/Flare/screenshots/inset-padding.png';
import screenshotInsetPaddingDm from '../../../../backpack-android/docs/Flare/screenshots/inset-padding_dm.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotDefault}`,
        altText: 'Flare component',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotDefaultDm}`,
        altText: 'Flare component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'rounded',
    title: 'Rounded',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotRounded}`,
        altText: 'Flare component with rounded corners',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotRoundedDm}`,
        altText: 'Flare component with rounded corners',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'offset-pointer',
    title: 'With the pointer offset',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotPointerOffset}`,
        altText: 'Flare component with offset pointer',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotPointerOffsetDm}`,
        altText: 'Flare component with offset pointer',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'with-padding',
    title: 'With padding',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotInsetPadding}`,
        altText: 'Flare component with padding',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotInsetPaddingDm}`,
        altText: 'Flare component with padding',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
];

const AndroidFlarePage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Toggle"
    components={components}
    readme={readme}
    androidDocId="net.skyscanner.backpack.flare"
    showMenu
    {...rest}
  />
);

export default AndroidFlarePage;
