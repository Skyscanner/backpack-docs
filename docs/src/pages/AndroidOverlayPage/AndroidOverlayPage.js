/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
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

import readme from '../../../../backpack-android/docs/Overlay/README.md';
import screenshotDefault from '../../../../backpack-android/docs/Overlay/screenshots/all.png';
import { AndroidComponentPage } from '../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotDefault}`,
        altText: 'Android Overlay Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const AndroidOverlayPage = () => (
  <AndroidComponentPage
    screenshots={components}
    readme={readme}
    documentationId="net.skyscanner.backpack.overlay"
    githubPath="overlay"
  />
);

export default AndroidOverlayPage;
