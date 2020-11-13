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

import getMarkdownString from '../../../helpers/markdown-helper';
import BpkMarkdownRenderer from '../../../components/DocsPageBuilder/BpkMarkdownRenderer';
import GuidelinesPageBuilder from '../../../components/GuidelinesBuilder';
import TypographyHero from '../../../static/typography/typography_hero.svg';
import TypographyExamples from '../../../static/typography/typography_examples.png';
import * as ROUTES from '../../../constants/routes';

import STYLES from './typography-page.scss';
import intro from './content/intro.md';
import skyscannerRelative from './content/skyscanner-relative.md';
import typeScale from './content/type-scale.md';
import FontFace from './FontFace';
import TypeScale from './TypeScale';

const getClassName = cssModules(STYLES);

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'fontface',
    title: 'Skyscanner Relative',
    backgroundStyle: 'light',
    className: getClassName('bpk-docs-typography-page__section'),
    content: (
      <Fragment>
        <FontFace
          className={getClassName('bpk-docs-typography-page__hello-relative')}
        />
        <BpkMarkdownRenderer source={getMarkdownString(skyscannerRelative)} />
      </Fragment>
    ),
  },
  {
    id: 'typeScale',
    title: 'Type scale',
    className: getClassName(
      'bpk-docs-typography-page__section',
      'bpk-docs-typography-page__section--type-scale',
    ),
    content: (
      <Fragment>
        <BpkMarkdownRenderer source={getMarkdownString(typeScale)} />
        <TypeScale
          className={getClassName('bpk-docs-typography-page__type-scale')}
        />
      </Fragment>
    ),
  },
  {
    id: 'examples',
    title: 'Examples',
    backgroundStyle: 'light',
    content: (
      <BpkImage
        className={getClassName('bpk-docs-typography-page__image')}
        altText="typography product examples"
        width={840}
        height={971}
        src={`/${TypographyExamples}`}
      />
    ),
  },
];

const TypographyPage = () => (
  <GuidelinesPageBuilder
    title="Typography"
    hero={{
      heading: 'Typography',
      imageUrl: `/${TypographyHero}`,
      className: getClassName('bpk-docs-typography-page__hero'),
    }}
    sections={sections}
    nextPageLink={{
      title: 'Photography',
      link: ROUTES.GENERATED_GUIDELINES_PHOTOGRAPHY,
    }}
  />
);

export default TypographyPage;
