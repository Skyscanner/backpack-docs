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

import React, { Fragment } from 'react';
import { cssModules } from 'bpk-react-utils';
import BpkImage from 'bpk-component-image';
import BpkLink from 'bpk-component-link';

import getMarkdownString from '../../helpers/markdown-helper';
import { createFromType } from '../../components/ApidocLink';
import BpkMarkdownRenderer from '../../components/DocsPageBuilder/BpkMarkdownRenderer';
import GuidelinesPageBuilder from '../../components/GuidelinesBuilder';
import BpkParagraph from '../../components/Paragraph';
import ColorsHero from '../../static/colours/colour_hero.svg';
import ColorExamples from '../../static/colours/colour_examples.png';
import * as ROUTES from '../../constants/routes';

import STYLES from './colors-page.scss';
import intro from './content/intro.md';
import colors from './colors';
import darkModeColors from './darkModeColors';
import dynamicColors from './dynamicColors';
import ColorChart from './ColorChart';

const getClassName = cssModules(STYLES);
const toSassdocLink = createFromType('sass');

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'palette',
    title: 'Palette',
    backgroundStyle: 'light',
    content: colors,
  },
  {
    id: 'dark-mode-palette',
    title: 'Dark Mode palette',
    content: (
      <Fragment>
        <BpkParagraph>
          The Dark Mode palette extends our regular palette. The colours in this
          palette should <strong>never ever</strong> be used in light mode.
        </BpkParagraph>
        {darkModeColors}
      </Fragment>
    ),
  },
  {
    id: 'dynamic-palette',
    title: 'Dark Mode dynamic colours',
    backgroundStyle: 'light',
    content: (
      <Fragment>
        <BpkParagraph>
          Dynamic colours are colour values which automatically adapt for light
          and dark modes. If you use these colours, the dark-mode variation will
          automatically be applied when a device&apos;s dark mode is enabled.
        </BpkParagraph>
        {dynamicColors}
      </Fragment>
    ),
  },
  {
    id: 'pairings',
    title: 'Colour pairings',
    content: (
      <Fragment>
        <BpkParagraph>
          For colour pairings to be accessible, they should meet the minimum
          contrast ratios outlined in the{' '}
          <BpkLink href="https://www.w3.org/TR/WCAG21/#contrast-minimum">
            WCAG contrast guidelines
          </BpkLink>
          . See the accessible pairings from our colour palette using the
          filters below.
        </BpkParagraph>
        <ColorChart />
      </Fragment>
    ),
  },
  {
    id: 'examples',
    title: 'Examples',
    backgroundStyle: 'light',
    content: (
      <BpkImage
        className={getClassName('bpk-docs-colors-page__image')}
        altText="color pairings"
        width={840}
        height={566}
        src={`/${ColorExamples}`}
      />
    ),
  },
  {
    id: 'colours-sassdoc',
    backgroundStyle: 'dark',
    content: toSassdocLink({
      sassdocId: 'colors-variable',
      category: 'Colors',
    }),
  },
];

const ColorsPage = () => (
  <GuidelinesPageBuilder
    title="Colour"
    hero={{
      heading: 'Colour',
      imageUrl: `/${ColorsHero}`,
      className: getClassName('bpk-docs-colors-page__hero'),
    }}
    sections={sections}
    nextPageLink={{
      title: 'Typography',
      link: ROUTES.TYPOGRAPHY,
    }}
  />
);

export default ColorsPage;
