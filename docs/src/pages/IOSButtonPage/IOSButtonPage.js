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

import readme from '../../../../backpack-ios/Backpack/Button/README.md';
import screenshotPrimary from '../../../../backpack-ios/screenshots/iPhone 8-button___primary_lm.png';
import screenshotSecondary from '../../../../backpack-ios/screenshots/iPhone 8-button___secondary_lm.png';
import screenshotDestructive from '../../../../backpack-ios/screenshots/iPhone 8-button___destructive_lm.png';
import screenshotFeatured from '../../../../backpack-ios/screenshots/iPhone 8-button___featured_lm.png';
import screenshotLink from '../../../../backpack-ios/screenshots/iPhone 8-button___link_lm.png';
import screenshotOutline from '../../../../backpack-ios/screenshots/iPhone 8-button___outline_lm.png';
import screenshotPrimaryDm from '../../../../backpack-ios/screenshots/iPhone 8-button___primary_dm.png';
import screenshotSecondaryDm from '../../../../backpack-ios/screenshots/iPhone 8-button___secondary_dm.png';
import screenshotDestructiveDm from '../../../../backpack-ios/screenshots/iPhone 8-button___destructive_dm.png';
import screenshotFeaturedDm from '../../../../backpack-ios/screenshots/iPhone 8-button___featured_dm.png';
import screenshotLinkDm from '../../../../backpack-ios/screenshots/iPhone 8-button___link_dm.png';
import screenshotOutlineDm from '../../../../backpack-ios/screenshots/iPhone 8-button___outline_dm.png';
import { IOSComponentPage } from '../../components/ComponentPage';

const components = [
  {
    id: 'primary',
    title: 'Primary',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotPrimary}`,
        altText: 'iOS primary button.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotPrimaryDm}`,
        altText: 'iOS primary button.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'secondary',
    title: 'Secondary',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSecondary}`,
        altText: 'iOS secondary button.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotSecondaryDm}`,
        altText: 'iOS secondary button.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'destructive',
    title: 'Destructive',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDestructive}`,
        altText: 'iOS destructive button.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDestructiveDm}`,
        altText: 'iOS destructive button.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'featured',
    title: 'Featured',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotFeatured}`,
        altText: 'iOS featured button.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotFeaturedDm}`,
        altText: 'iOS featured button.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'outline',
    title: 'Outline',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotOutline}`,
        altText: 'iOS outline button.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotOutlineDm}`,
        altText: 'iOS outline button.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'link',
    title: 'Link',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotLink}`,
        altText: 'iOS link button.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotLinkDm}`,
        altText: 'iOS link button.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSButtonPage = () => (
  <IOSComponentPage
    screenshots={components}
    readme={readme}
    documentationId="BPKButton"
  />
);

export default IOSButtonPage;
