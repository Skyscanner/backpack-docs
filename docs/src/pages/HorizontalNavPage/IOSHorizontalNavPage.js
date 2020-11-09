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
import screenshotDefault from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___default_lm.png';
import screenshotDefaultDm from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___default_dm.png';
import screenshotSmall from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___small_lm.png';
import screenshotSmallDm from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___small_dm.png';
import screenshotWithIcons from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___with-icons_lm.png';
import screenshotWithIconsDm from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___with-icons_dm.png';
import screenshotNoUnderline from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___without-underline_lm.png';
import screenshotNoUnderlineDm from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___without-underline_dm.png';
import screenshotBadge from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___badge_lm.png';
import screenshotBadgeDm from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___badge_dm.png';
import screenshotNotification from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___notification_lm.png';
import screenshotNotificationDm from '../../../../backpack-ios/screenshots/iPhone 8-horizontal-navigation___notification_dm.png';
import { IOSComponentPage } from '../../components/ComponentPage';

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
  {
    id: 'badge',
    title: 'With badge',
    screenshots: [
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotBadge}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotBadgeDm}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'notification',
    title: 'With notification dot',
    screenshots: [
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotNotification}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'iOS',
        width: 1080,
        height: 1920,
        src: `/${screenshotNotificationDm}`,
        altText: 'iOS HorizontalNav Component',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSHorizontalNavPage = () => (
  <IOSComponentPage
    screenshots={components}
    readme={readme}
    documentationId="BPKHorizontalNavigation"
    githubPath="HorizontalNavigation"
  />
);

export default IOSHorizontalNavPage;
