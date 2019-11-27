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
import { cssModules } from 'bpk-react-utils';
import BpkImage from 'bpk-component-image';

import getMarkdownString from '../../helpers/markdown-helper';
import BpkMarkdownRenderer from '../../components/DocsPageBuilder/BpkMarkdownRenderer';
import GuidelinesPageBuilder from '../../components/GuidelinesBuilder';
import ContentGrid, {
  ContentGridCard,
} from '../../components/ContentGrid/ContentGrid';
import IconographyHero from '../../static/iconography/iconography_hero.png';
import IconographyOverview from '../../static/iconography/overview.png';
import IconographySet from '../../static/iconography/icon_set.png';
import IconExamples from '../../static/iconography/examples.jpg';

import STYLES from './iconography-page.scss';
import intro from './content/intro.md';

const getClassName = cssModules(STYLES);
const getPageClassName = (...extra) =>
  extra
    .map(className => getClassName(`bpk-docs-iconography-page${className}`))
    .join(' ');

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'overview',
    title: 'Overview',
    backgroundStyle: 'light',
    content: (
      <div>
        <BpkImage
          altText="six icon examples."
          width={840}
          height={534}
          src={`/${IconographyOverview}`}
        />
        <BpkImage
          altText="example iconography set."
          width={903}
          height={735}
          src={`/${IconographySet}`}
        />
      </div>
    ),
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
          <BpkImage
            altText="icons used in product."
            width={420}
            height={500}
            src={`/${IconExamples}`}
          />
        </ContentGridCard>
      </ContentGrid>
    ),
  },
];

const IconographyPage = () => (
  <GuidelinesPageBuilder
    title="Iconography"
    hero={{
      heading: `Iconography`,
      imageUrl: `/${IconographyHero}`,
      className: getClassName('bpk-docs-iconography-page__hero'),
    }}
    sections={sections}
  />
);

export default IconographyPage;
