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

import readme from '../../../../backpack-ios/Backpack/HorizontalNavigation/README.md';
import screenshotDefault from '../../../../backpack-ios/screenshots/HorizontalNavigation/default.png';
import screenshotSmall from '../../../../backpack-ios/screenshots/HorizontalNavigation/small.png';
import screenshotWithIcons from '../../../../backpack-ios/screenshots/HorizontalNavigation/with-icons.png';
import screenshotNoUnderline from '../../../../backpack-ios/screenshots/HorizontalNavigation/without-underline.png';
import screenshotDefaultDm from '../../../../backpack-ios/screenshots/HorizontalNavigation/default_dm.png';
import screenshotSmallDm from '../../../../backpack-ios/screenshots/HorizontalNavigation/small_dm.png';
import screenshotWithIconsDm from '../../../../backpack-ios/screenshots/HorizontalNavigation/with-icons_dm.png';
import screenshotNoUnderlineDm from '../../../../backpack-ios/screenshots/HorizontalNavigation/without-underline_dm.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotDefault}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotDefaultDm}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'small',
    title: 'Small',
    screenshots: [
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotSmall}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotSmallDm}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'withIcons',
    title: 'With icons',
    screenshots: [
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotWithIcons}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotWithIconsDm}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'noUnderline',
    title: 'With no line',
    screenshots: [
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotNoUnderline}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotNoUnderlineDm}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSHorizontalNavPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Horizontal navigation"
    components={components}
    readme={readme}
    {...rest}
  />
);

export default IOSHorizontalNavPage;
