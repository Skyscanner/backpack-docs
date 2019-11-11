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
import PhotographyHero from '../../static/photography/photography_hero.svg';
import PhotoArtDirection from '../../static/photography/photography_art_direction.png';
import PhotoTreatment from '../../static/photography/photography_treatment.png';
import PhotoExamples from '../../static/photography/photography_examples.png';
import * as ROUTES from '../../constants/routes';

import STYLES from './photography-page.scss';
import intro from './content/intro.md';

const getClassName = cssModules(STYLES);

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'direction',
    title: 'Art direction',
    backgroundStyle: 'light',
    content: (
      <BpkImage
        className={getClassName('bpk-docs-photography-page__image')}
        altText="art direction"
        width={838}
        height={536}
        src={`/${PhotoArtDirection}`}
      />
    ),
  },
  {
    id: 'Treatment',
    title: 'Treatment',
    content: (
      <BpkImage
        className={getClassName('bpk-docs-photography-page__image')}
        altText="art direction"
        width={840}
        height={441}
        src={`/${PhotoTreatment}`}
      />
    ),
  },
  {
    id: 'examples',
    title: 'Examples',
    backgroundStyle: 'light',
    content: (
      <BpkImage
        className={getClassName('bpk-docs-photography-page__image')}
        altText="color pairings"
        width={838}
        height={521}
        src={`/${PhotoExamples}`}
      />
    ),
  },
];

const PhotographyPage = () => (
  <GuidelinesPageBuilder
    title="Photography"
    hero={{
      heading: `Photography`,
      imageUrl: `/${PhotographyHero}`,
      className: getClassName('bpk-docs-photography-page__hero'),
    }}
    sections={sections}
    nextPageLink={{
      title: 'Shadows',
      link: ROUTES.SHADOWS_GUIDELINES,
    }}
  />
);

export default PhotographyPage;
