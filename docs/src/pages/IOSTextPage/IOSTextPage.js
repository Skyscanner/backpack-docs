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

import readme from '../../../../backpack-ios/Backpack/Label/README.md';
import screenshotDefault from '../../../../backpack-ios/screenshots/Label/default.png';
import screenshotEmphasized from '../../../../backpack-ios/screenshots/Label/emphasized.png';
import screenshotHeavy from '../../../../backpack-ios/screenshots/Label/heavy.png';
import screenshotMultipleFontStyles from '../../../../backpack-ios/screenshots/Label/multiple-font-styles.png';
import screenshotDefaultDm from '../../../../backpack-ios/screenshots/Label/default_dm.png';
import screenshotEmphasizedDm from '../../../../backpack-ios/screenshots/Label/emphasized_dm.png';
import screenshotHeavyDm from '../../../../backpack-ios/screenshots/Label/heavy_dm.png';
import screenshotMultipleFontStylesDm from '../../../../backpack-ios/screenshots/Label/multiple-font-styles_dm.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefault}`,
        altText: 'iOS default text',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefaultDm}`,
        altText: 'iOS default text',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'emphasized',
    title: 'Emphasized',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotEmphasized}`,
        altText: 'iOS emphasized text',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotEmphasizedDm}`,
        altText: 'iOS emphasized text',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'heavy',
    title: 'Heavy',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotHeavy}`,
        altText: 'iOS heavy text',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotHeavyDm}`,
        altText: 'iOS heavy text',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'multiple-font-styles',
    title: 'Multiple font styles',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotMultipleFontStyles}`,
        altText: 'iOS text with multiple font styles',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotMultipleFontStylesDm}`,
        altText: 'iOS text with multiple font styles',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSTextPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Label"
    components={components}
    readme={readme}
    iosDocId="BPKLabel"
    showMenu
    {...rest}
  />
);

export default IOSTextPage;
