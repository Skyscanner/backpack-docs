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

import readme from '../../../../backpack-android/docs/Text/README.md';
import textSpanReadme from '../../../../backpack-android/docs/TextSpans/README.md';
import screenshotDefault from '../../../../backpack-android/docs/Text/screenshots/default.png';
import screenshotDefaultDm from '../../../../backpack-android/docs/Text/screenshots/default_dm.png';
import screenshotEmphasized from '../../../../backpack-android/docs/Text/screenshots/emphasized.png';
import screenshotEmphasizedDm from '../../../../backpack-android/docs/Text/screenshots/emphasized_dm.png';
import screenshotHeavy from '../../../../backpack-android/docs/Text/screenshots/heavy.png';
import screenshotHeavyDm from '../../../../backpack-android/docs/Text/screenshots/heavy_dm.png';
import screenshotTextSpan from '../../../../backpack-android/docs/TextSpans/screenshots/default.png';
import screenshotTextSpanDm from '../../../../backpack-android/docs/TextSpans/screenshots/default_dm.png';
import { AndroidComponentPage } from '../../components/ComponentPage';
import IntroBlurb from '../../components/IntroBlurb';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotDefault}`,
        altText: 'Default text component',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotDefaultDm}`,
        altText: 'Default text component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'emphasized',
    title: 'Emphasized',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotEmphasized}`,
        altText: 'Emphasized text component',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotEmphasizedDm}`,
        altText: 'Emphasized text component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'heavy',
    title: 'Heavy',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotHeavy}`,
        altText: 'Heavy text component',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotHeavyDm}`,
        altText: 'Heavy text component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'text-span',
    title: 'Text Span',
    content: [
      <IntroBlurb>
        Text Spans is a set of styles to apply to characters sequence.
      </IntroBlurb>,
    ],
    screenshots: [
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotTextSpan}`,
        altText: 'Android Text Spans Component',
        subText: '(Google Pixel emulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotTextSpanDm}`,
        altText: 'Android Text Spans Component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
];

const AndroidTextPage = () => (
  <AndroidComponentPage
    title="Text"
    screenshots={components}
    readme={readme + textSpanReadme}
    documentationId="net.skyscanner.backpack.text"
    githubPath="text"
  />
);

export default AndroidTextPage;
