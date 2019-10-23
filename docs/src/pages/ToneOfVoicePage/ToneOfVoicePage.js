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
import BpkImage from 'bpk-component-image';
import BpkCloseCircleIcon from 'bpk-component-icon/sm/close-circle';
import BpkTickCircleIcon from 'bpk-component-icon/sm/tick-circle';
import { cssModules } from 'bpk-react-utils';

import BpkMarkdownRenderer from '../../components/DocsPageBuilder/BpkMarkdownRenderer';
import GuidelinesPageBuilder from '../../components/GuidelinesBuilder';
import HeroImage from '../../static/tone-of-voice-hero.svg';

import ContentGrid, { ContentGridCard } from './ContentGrid';
import intro from './content/intro.md';
import travellerFirstDo from './content/traveller-first-do.md';
import travellerFirstDont from './content/traveller-first-dont.md';
import principleOne from './content/core-principles-one.md';
import principleTwo from './content/core-principles-two.md';
import principleThree from './content/core-principles-three.md';
import principleFour from './content/core-principles-four.md';
import STYLES from './toneofvoice-page.scss';

const getClassName = cssModules(STYLES);

const getPageClassName = (...extra) =>
  extra
    .map(className => getClassName(`bpkdocs-toneofvoice-page${className}`))
    .join(' ');

const exampleIconStyle = { width: '2.625rem', height: '2.625rem' };

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={intro} />,
  },
  {
    id: 'traveller-first',
    title: 'Traveller first',
    content: (
      <ContentGrid>
        <ContentGridCard cardStyle="bold-title">
          <BpkMarkdownRenderer source={travellerFirstDo} />
        </ContentGridCard>
        <ContentGridCard
          className={getPageClassName('__traveller-first--dont')}
        >
          <BpkCloseCircleIcon className={getPageClassName('__icon--dont')} />
          <BpkMarkdownRenderer source={travellerFirstDont} />
        </ContentGridCard>
      </ContentGrid>
    ),
    backgroundStyle: 'light',
  },
  {
    id: 'core-principles',
    title: 'Core principles',
    content: (
      <ContentGrid>
        <ContentGridCard cardStyle="primary-title">
          <BpkMarkdownRenderer source={principleOne} />
        </ContentGridCard>
        <ContentGridCard cardStyle="primary-title">
          <BpkMarkdownRenderer source={principleTwo} />
        </ContentGridCard>
        <ContentGridCard cardStyle="primary-title">
          <BpkMarkdownRenderer source={principleThree} />
        </ContentGridCard>
        <ContentGridCard cardStyle="primary-title">
          <BpkMarkdownRenderer source={principleFour} />
        </ContentGridCard>
      </ContentGrid>
    ),
    backgroundStyle: 'dark',
  },
  {
    id: 'examples',
    title: 'Examples',
    className: getPageClassName('__example-section'),
    contentClassName: getPageClassName('__example-content-container'),
    content: (
      <ContentGrid>
        <ContentGridCard
          padding={false}
          className={getPageClassName('__example-card')}
        >
          <BpkTickCircleIcon
            style={exampleIconStyle}
            className={getPageClassName('__icon--do')}
          />
          <BpkImage
            altText="Example image - things to do"
            width={408}
            height={500}
            src="https://cataas.com/cat/says/do?width=408&height=500"
          />
        </ContentGridCard>
        <ContentGridCard
          padding={false}
          className={getPageClassName('__example-card')}
        >
          <BpkCloseCircleIcon
            style={exampleIconStyle}
            className={getPageClassName('__icon--dont')}
          />
          <BpkImage
            altText="Example image - things to do"
            width={408}
            height={500}
            src="https://cataas.com/cat/says/dont?width=408&height=500"
          />
        </ContentGridCard>
      </ContentGrid>
    ),
    backgroundStyle: 'white',
  },
];

const CopywritingPage = () => (
  <GuidelinesPageBuilder
    title="Tone of voice"
    hero={{
      heading: `Tone of voice`,
      className: getClassName('bpkdocs-toneofvoice-page__hero'),
      imageUrl: `/${HeroImage}`,
    }}
    sections={sections}
    nextPageLink={{
      title: 'Logo',
      link: './',
    }}
  />
);

export default CopywritingPage;
