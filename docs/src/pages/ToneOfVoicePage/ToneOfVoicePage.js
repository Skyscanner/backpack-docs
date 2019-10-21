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
import BpkButton from 'bpk-component-button';
import BpkSmallDownloadIcon from 'bpk-component-icon/sm/download';
import BpkCloseIcon from 'bpk-component-icon/sm/close-circle';
import { withButtonAlignment } from 'bpk-component-icon';
import { cssModules } from 'bpk-react-utils';

import BpkMarkdownRenderer from '../../components/DocsPageBuilder/BpkMarkdownRenderer';
import GuidelinesPageBuilder from '../../components/GuidelinesBuilder';
import Paragraph from '../../components/Paragraph';

import intro from './content/intro.md';
import travellerFirstDo from './content/traveller-first-do.md';
import travellerFirstDont from './content/traveller-first-dont.md';
import STYLES from './toneofvoice-page.scss';

const getClassName = cssModules(STYLES);

// eslint-disable-next-line import/no-webpack-loader-syntax
const toneOfVoiceGuidelines = require('!!file-loader?name=[name].[hash].pdf!./../../static/tone-of-voice-guidelines-october-2018.pdf');

const AlignedBpkSmallDownloadIcon = withButtonAlignment(BpkSmallDownloadIcon);

const getPageClassName = (...extra) =>
  extra
    .map(className => getClassName(`bpkdocs-toneofvoice-page${className}`))
    .join(' ');

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={intro} />,
  },
  {
    id: 'traveller-first',
    title: 'Traveller first',
    content: (
      <div className={getPageClassName('__traveler-first')}>
        <span
          className={getPageClassName(
            '__traveler-first-card',
            '__traveler-first-card--do',
          )}
        >
          <BpkMarkdownRenderer source={travellerFirstDo} />
        </span>
        <span
          className={getPageClassName(
            '__traveler-first-card',
            '__traveler-first-card--dont',
          )}
        >
          <BpkCloseIcon />
          <BpkMarkdownRenderer source={travellerFirstDont} />
        </span>
      </div>
    ),
    backgroundStyle: 'light',
  },
  {
    id: 'core-principles',
    title: 'Core principles',
    content: <BpkMarkdownRenderer source={intro} />,
    backgroundStyle: 'dark',
  },
  {
    id: 'download',
    title: 'Download the guidelines',
    backgroundStyle: 'light',
    content: (
      <Paragraph>
        <BpkButton href={`/${toneOfVoiceGuidelines}`}>
          Download <AlignedBpkSmallDownloadIcon />
        </BpkButton>
      </Paragraph>
    ),
  },
];

const CopywritingPage = () => (
  <GuidelinesPageBuilder
    title="Tone of voice"
    hero={{
      heading: `Tone of voice`,
      className: getClassName('bpkdocs-toneofvoice-page__hero'),
    }}
    sections={sections}
    nextPageLink={{
      title: 'Logo',
      link: './',
    }}
  />
);

export default CopywritingPage;
