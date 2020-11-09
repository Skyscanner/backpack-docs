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

import * as ROUTES from '../../constants/routes';
import getMarkdownString from '../../helpers/markdown-helper';
import BpkMarkdownRenderer from '../../components/DocsPageBuilder/BpkMarkdownRenderer';
import GuidelinesPageBuilder from '../../components/GuidelinesBuilder';
import IllustrationHero from '../../static/illustration/illustration_hero.svg';

import STYLES from './illustration-page.scss';
import intro from './content/intro.md';

const getClassName = cssModules(STYLES);

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'Overview',
    title: 'Overview',
    backgroundStyle: 'light',
    content: (
      <BpkImage
        altText="Illustration examples."
        width={909}
        height={828}
        src="https://js.skyscnr.com/sttc/bpk-content/illustration_overview-7d284b4a.png"
      />
    ),
  },
  {
    id: 'examples',
    title: 'Examples',
    content: (
      <BpkImage
        altText="Illustration examples."
        width={840}
        height={612}
        src="https://js.skyscnr.com/sttc/bpk-content/illustration_examples-2753d1c9.png"
      />
    ),
  },
];

const IllustrationPage = () => (
  <GuidelinesPageBuilder
    title="Illustration"
    hero={{
      heading: 'Illustration',
      imageUrl: `/${IllustrationHero}`,
      className: getClassName('bpk-docs-illustration-page__hero'),
    }}
    sections={sections}
    nextPageLink={{
      title: 'Iconography',
      link: ROUTES.ICONOGRAPHY,
    }}
  />
);

export default IllustrationPage;
