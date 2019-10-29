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

import readme from '../../../../backpack-ios/Backpack/NavigationBar/README.md';
import screenshotLarge from '../../../../backpack-ios/screenshots/NavigationBar/full-height.png';
import screenshotCollapsed from '../../../../backpack-ios/screenshots/NavigationBar/collapsed.png';
import screenshotLargeDm from '../../../../backpack-ios/screenshots/NavigationBar/full-height_dm.png';
import screenshotCollapsedDm from '../../../../backpack-ios/screenshots/NavigationBar/collapsed_dm.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'large',
    title: 'Default',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotLarge}`,
        altText: 'The navigation bar in its full height state.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotLargeDm}`,
        altText: 'The navigation bar in its full height state.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'collapsed',
    title: 'Collapsed',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotCollapsed}`,
        altText: 'The navigation bar in its collapsed state.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotCollapsedDm}`,
        altText: 'The navigation bar in its collapsed state.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSNavigationBarPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Navigation bar"
    components={components}
    readme={readme}
    iosDocId="BPKNavigationBar"
    showMenu
    {...rest}
  />
);

export default IOSNavigationBarPage;
