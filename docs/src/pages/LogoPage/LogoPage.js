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
import LogoHero from '../../static/logo/logo_hero.svg';
import LogoSymbol from '../../static/logo/our_symbol.png';
import LogoWordmarque from '../../static/logo/our_wordmarque.svg';
import LogoExamples from '../../static/logo/logo_examples.png';
import LogoVertical from '../../static/logo/logo_suite_vertical_logo.svg';
import LogoHorizontal from '../../static/logo/logo_suite_horizontal_logo.svg';
import LogoSymbolSuite from '../../static/logo/logo_suite_symbol.svg';
import * as ROUTES from '../../constants/routes';
import ContentGrid, {
  ContentGridCard,
} from '../../components/ContentGrid/ContentGrid';

import STYLES from './logo-page.scss';
import intro from './content/intro.md';

const getClassName = cssModules(STYLES);

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'symbol',
    title: 'Our symbol',
    backgroundStyle: 'light',
    content: (
      <BpkImage
        className={getClassName('bpk-docs-logo-page__image')}
        altText="art direction"
        width={758}
        height={437}
        src={`/${LogoSymbol}`}
      />
    ),
  },
  {
    id: 'wordmarque',
    title: 'Our wordmarque',
    content: (
      <BpkImage
        className={getClassName('bpk-docs-logo-page__image')}
        altText="art direction"
        width={838}
        height={190}
        src={`/${LogoWordmarque}`}
      />
    ),
  },
  {
    id: 'logo-suite',
    title: 'Logo suite',
    backgroundStyle: 'light',
    content: (
      <ContentGrid>
        <ContentGridCard className={getClassName('bpk-docs-logo-page__card')}>
          <img
            className={getClassName('bpk-docs-logo-page__suite')}
            src={`/${LogoVertical}`}
            alt="vertical skyscanner logo with wordmarque"
          />
        </ContentGridCard>
        <ContentGridCard className={getClassName('bpk-docs-logo-page__card')}>
          <img
            className={getClassName('bpk-docs-logo-page__suite')}
            src={`/${LogoHorizontal}`}
            alt="horizontal skyscanner logo with wordmarque"
          />
        </ContentGridCard>
        <ContentGridCard className={getClassName('bpk-docs-logo-page__card')}>
          <img
            className={getClassName('bpk-docs-logo-page__suite')}
            src={`/${LogoSymbolSuite}`}
            alt="our symbol, skyscanner logo without wordmarque"
          />
        </ContentGridCard>
        <ContentGridCard className={getClassName('bpk-docs-logo-page__card')}>
          <img
            className={getClassName('bpk-docs-logo-page__suite')}
            src={`/${LogoWordmarque}`}
            alt="our wordmarque Skyscanner"
          />
        </ContentGridCard>
      </ContentGrid>
    ),
  },
  {
    id: 'examples',
    title: 'Examples',
    content: (
      <BpkImage
        className={getClassName('bpk-docs-logo-page__image')}
        altText="logo examples"
        width={839}
        height={838}
        src={`/${LogoExamples}`}
      />
    ),
  },
];

const LogoPage = () => (
  <GuidelinesPageBuilder
    title="Logo"
    hero={{
      heading: `Logo`,
      imageUrl: `/${LogoHero}`,
      className: getClassName('bpk-docs-logo-page__hero'),
    }}
    sections={sections}
    nextPageLink={{
      title: 'Colour',
      link: ROUTES.COLORS,
    }}
  />
);

export default LogoPage;
