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

import readme from '../../../../backpack-android/docs/Card/README.md';
import screenshotDefault from '../../../../backpack-android/docs/Card/screenshots/default.png';
import screenshotDefaultDm from '../../../../backpack-android/docs/Card/screenshots/default_dm.png';
import screenshotCornerStyleLarge from '../../../../backpack-android/docs/Card/screenshots/corner-style-large.png';
import screenshotCornerStyleLargeDm from '../../../../backpack-android/docs/Card/screenshots/corner-style-large_dm.png';
import screenshotSelected from '../../../../backpack-android/docs/Card/screenshots/selected.png';
import screenshotSelectedDm from '../../../../backpack-android/docs/Card/screenshots/selected_dm.png';
import screenshotWithoutPadding from '../../../../backpack-android/docs/Card/screenshots/without-padding.png';
import screenshotWithoutPaddingDm from '../../../../backpack-android/docs/Card/screenshots/without-padding_dm.png';
import screenshotWithDivider from '../../../../backpack-android/docs/Card/screenshots/with-divider.png';
import screenshotWithDividerDm from '../../../../backpack-android/docs/Card/screenshots/with-divider_dm.png';
import screenshotWithDividerArrangedVertically from '../../../../backpack-android/docs/Card/screenshots/with-divider-arranged-vertically.png';
import screenshotWithDividerArrangedVerticallyDm from '../../../../backpack-android/docs/Card/screenshots/with-divider-arranged-vertically_dm.png';
import screenshotWithDividerCornerStyleLarge from '../../../../backpack-android/docs/Card/screenshots/with-divider-and-corner-style-large.png';
import screenshotWithDividerCornerStyleLargeDm from '../../../../backpack-android/docs/Card/screenshots/with-divider-and-corner-style-large_dm.png';
import screenshotWithDividerWithoutPadding from '../../../../backpack-android/docs/Card/screenshots/with-divider-without-padding.png';
import screenshotWithDividerWithoutPaddingDm from '../../../../backpack-android/docs/Card/screenshots/with-divider-without-padding_dm.png';
import { AndroidComponentPage } from '../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotDefault}`,
        altText: 'Default card component',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotDefaultDm}`,
        altText: 'Default card component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'selected',
    title: 'Selected',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotSelected}`,
        altText: 'Selected card component',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotSelectedDm}`,
        altText: 'Selected card component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'large-corner-style',
    title: 'Large corner style',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotCornerStyleLarge}`,
        altText: 'Card component with large corner style',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotCornerStyleLargeDm}`,
        altText: 'Card component with large corner style',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'without-padding',
    title: 'Without padding',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotWithoutPadding}`,
        altText: 'Card component without padding',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotWithoutPaddingDm}`,
        altText: 'Card component without padding',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'with-divider',
    title: 'Default',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotWithDivider}`,
        altText: 'Card component with divider',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotWithDividerDm}`,
        altText: 'Card component with divider',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'with-divider-arranged-vertically',
    title: 'With divider arranged vertically',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotWithDividerArrangedVertically}`,
        altText: 'Card component with divider arranged vertically',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotWithDividerArrangedVerticallyDm}`,
        altText: 'Card component with divider arranged vertically',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'with-divider-without-padding',
    title: 'With divider and without padding',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotWithDividerWithoutPadding}`,
        altText: 'Card component with divider and without padding',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotWithDividerWithoutPaddingDm}`,
        altText: 'Card component with divider and without padding',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'with-divider-large-corner-style',
    title: 'With divider and with large corner style',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotWithDividerCornerStyleLarge}`,
        altText: 'Card component with divider and large corner style',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotWithDividerCornerStyleLargeDm}`,
        altText: 'Card component with divider and large corner style',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
];

const AndroidCardPage = () => (
  <AndroidComponentPage
    screenshots={components}
    readme={readme}
    documentationId="net.skyscanner.backpack.card"
    githubPath="card"
  />
);

export default AndroidCardPage;
