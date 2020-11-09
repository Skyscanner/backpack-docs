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

import readme from '../../../../../backpack-android/docs/Button/README.md';
import linkReadme from '../../../../../backpack-android/docs/ButtonLink/README.md';
import screenshotPrimary from '../../../../../backpack-android/docs/Button/screenshots/primary.png';
import screenshotPrimaryDm from '../../../../../backpack-android/docs/Button/screenshots/primary_dm.png';
import screenshotSecondary from '../../../../../backpack-android/docs/Button/screenshots/secondary.png';
import screenshotSecondaryDm from '../../../../../backpack-android/docs/Button/screenshots/secondary_dm.png';
import screenshotDestructive from '../../../../../backpack-android/docs/Button/screenshots/destructive.png';
import screenshotDestructiveDm from '../../../../../backpack-android/docs/Button/screenshots/destructive_dm.png';
import screenshotOutline from '../../../../../backpack-android/docs/Button/screenshots/outline.png';
import screenshotOutlineDm from '../../../../../backpack-android/docs/Button/screenshots/outline_dm.png';
import screenshotFeatured from '../../../../../backpack-android/docs/Button/screenshots/featured.png';
import screenshotFeaturedDm from '../../../../../backpack-android/docs/Button/screenshots/featured_dm.png';
import screenshotLink from '../../../../../backpack-android/docs/ButtonLink/screenshots/default.png';
import screenshotLinkDm from '../../../../../backpack-android/docs/ButtonLink/screenshots/default_dm.png';
import { AndroidComponentPage } from '../../../components/ComponentPage';

const components = [
  {
    id: 'primary',
    title: 'Primary',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotPrimary}`,
        altText: 'Android primary button',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotPrimaryDm}`,
        altText: 'Android primary button',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'secondary',
    title: 'Secondary',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotSecondary}`,
        altText: 'Android secondary button',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotSecondaryDm}`,
        altText: 'Android secondary button',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'destructive',
    title: 'Destructive',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotDestructive}`,
        altText: 'Android destructive button',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotDestructiveDm}`,
        altText: 'Android destructive button',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'featured',
    title: 'Featured',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotFeatured}`,
        altText: 'Android featured button',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotFeaturedDm}`,
        altText: 'Android featured button',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'outline',
    title: 'Outline',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotOutline}`,
        altText: 'Android outline button',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotOutlineDm}`,
        altText: 'Android outline button',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'link',
    title: 'Link',
    screenshots: [
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotLink}`,
        altText: 'Android Button link Component',
        subText: '(Google Pixel emulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotLinkDm}`,
        altText: 'Android Button link Component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
];

const AndroidButtonPage = () => (
  <AndroidComponentPage
    screenshots={components}
    readme={readme + linkReadme}
    androidDocId="net.skyscanner.backpack.button"
    githubPath="button"
  />
);

export default AndroidButtonPage;
