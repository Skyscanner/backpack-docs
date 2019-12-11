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

import readme from '../../../../backpack-android/docs/NavBar/README.md';
import screenshotCollapsed from '../../../../backpack-android/docs/NavBar/screenshots/collapsed.png';
import screenshotExpanded from '../../../../backpack-android/docs/NavBar/screenshots/expanded.png';
import screenshotNavigation from '../../../../backpack-android/docs/NavBar/screenshots/navigation.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'expanded',
    title: 'Expanded',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotExpanded}`,
        altText: 'Navigation bar component when expanded',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'collapsed',
    title: 'Collapsed',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotCollapsed}`,
        altText: 'Navigation bar component when collapsed',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'navigation',
    title: 'With Navigation Elements',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotNavigation}`,
        altText: 'Navigation bar component with navigation elements',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const AndroidNavBarPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Navigation Bar"
    components={components}
    readme={readme}
    androidDocId="net.skyscanner.backpack.navbar"
    showMenu
    {...rest}
  />
);

export default AndroidNavBarPage;
