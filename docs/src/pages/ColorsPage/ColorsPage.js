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
import { colors } from 'bpk-tokens/tokens/base.es6';
import { cssModules } from 'bpk-react-utils';
import BpkImage from 'bpk-component-image';

import getMarkdownString from '../../helpers/markdown-helper';
import BpkMarkdownRenderer from '../../components/DocsPageBuilder/BpkMarkdownRenderer';
import GuidelinesPageBuilder from '../../components/GuidelinesBuilder';
import ColorsHero from '../../static/colours/colour_hero.svg';
import ColorPairings from '../../static/colours/colour_pairings.png';
import ColorExamples from '../../static/colours/colour_examples.png';
import * as ROUTES from '../../constants/routes';

import STYLES from './colors-page.scss';
import intro from './content/intro.md';
import colours from './colors';

const getClassName = cssModules(STYLES);

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'palette',
    title: 'Palette',
    content: colours,
    alternate: true,
  },
  {
    id: 'pairings',
    title: 'Pairings chart',
    content: (
      <BpkImage
        class={getClassName('bpk-docs-colors-page__image')}
        altText="color pairings"
        width={840}
        height={484}
        src={`/${ColorPairings}`}
      />
    ),
  },
  {
    id: 'examples',
    title: 'Examples',
    content: (
      <BpkImage
        class={getClassName('bpk-docs-colors-page__image')}
        altText="color pairings"
        width={840}
        height={566}
        src={`/${ColorExamples}`}
      />
    ),
    alternate: true,
  },
];

const ColorsPage = () => (
  <GuidelinesPageBuilder
    title="Colour"
    hero={{
      heading: `Colour`,
      imageUrl: `/${ColorsHero}`,
      className: getClassName('bpk-docs-colors-page__hero'),
    }}
    sections={sections}
    nextPageLink={{
      title: 'Typography',
      link: ROUTES.TYPESETTING,
    }}
  />
);

export default ColorsPage;
