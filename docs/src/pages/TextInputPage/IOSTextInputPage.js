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

import readme from '../../../../backpack-ios/Backpack/TextField/README.md';
import textViewReadme from '../../../../backpack-ios/Backpack/TextView/README.md';
import screenshotDefault from '../../../../backpack-ios/screenshots/iPhone 8-text-field___default_lm.png';
import screenshotDefaultDm from '../../../../backpack-ios/screenshots/iPhone 8-text-field___default_dm.png';
import screenshotTextView from '../../../../backpack-ios/screenshots/iPhone 8-text-view___default_lm.png';
import screenshotTextViewDm from '../../../../backpack-ios/screenshots/iPhone 8-text-view___default_dm.png';
import { IOSComponentPage } from '../../components/ComponentPage';
import IntroBlurb from '../../components/IntroBlurb';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefault}`,
        altText: 'iOS default text input',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefaultDm}`,
        altText: 'iOS default text input',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'text-view',
    title: 'Text Views',
    content: [
      <IntroBlurb>
        Text views are used to capture large amounts of textual information.
      </IntroBlurb>,
    ],
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotTextView}`,
        altText: 'iOS default text view',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotTextViewDm}`,
        altText: 'iOS default text view',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
    readme: textViewReadme,
  },
];

const IOSTextInputPage = () => (
  <IOSComponentPage
    screenshots={components}
    readme={readme + textViewReadme}
    documentationId="BPKTextField"
    githubPath="TextField"
  />
);

export default IOSTextInputPage;
