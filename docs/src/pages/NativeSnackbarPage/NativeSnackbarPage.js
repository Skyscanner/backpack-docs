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

import readme from '../../../../backpack-react-native/lib/bpk-component-snackbar/README.md';
import androidScreenshotDefault from '../../../../backpack-react-native/lib/bpk-component-snackbar/screenshots/android/default.png';
import androidScreenshotTitleIcon from '../../../../backpack-react-native/lib/bpk-component-snackbar/screenshots/android/title-and-icon.png';
import androidScreenshotAction from '../../../../backpack-react-native/lib/bpk-component-snackbar/screenshots/android/action.png';
import androidScreenshotIconAction from '../../../../backpack-react-native/lib/bpk-component-snackbar/screenshots/android/icon-action.png';
import iosScreenshotEmpty from '../../static/ios_empty.svg';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotEmpty}`,
        altText: 'iOS snackbar component.',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android snackbar component.',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'title-and-icon',
    title: 'Title and icon',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotEmpty}`,
        altText: 'iOS snackbar with title and icon.',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotTitleIcon}`,
        altText: 'Android snackbar with title and icon.',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'action',
    title: 'Action',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotEmpty}`,
        altText: 'iOS snackbar with text action.',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotAction}`,
        altText: 'Android snackbar with text action.',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'icon-action',
    title: 'Icon only action',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotEmpty}`,
        altText: 'iOS snackbar with icon only action.',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotIconAction}`,
        altText: 'Android snackbar with icon only action.',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeSnackbarPage = ({ ...rest }: { [string]: any }) => (
  <DocsPageBuilder
    title="Snackbar"
    components={components}
    readme={readme}
    showMenu
    {...rest}
  />
);

export default NativeSnackbarPage;
