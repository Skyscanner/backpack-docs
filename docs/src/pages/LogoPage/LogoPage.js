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
    className: getClassName('bpk-docs-logo-page__image'),
    content: (
      <BpkImage
        className={getClassName('bpk-docs-logo-page__image--constrained')}
        altText="art direction"
        width={758}
        height={437}
        src="https://js.skyscnr.com/sttc/bpk-content/our_symbol-af2f7219.png"
      />
    ),
  },
  {
    id: 'wordmarque',
    title: 'Our wordmarque',
    className: getClassName('bpk-docs-logo-page__image'),
    content: (
      <BpkImage
        className={getClassName(
          'bpk-docs-logo-page__image--constrained',
          'bpk-docs-logo-page__image--wordmarque',
        )}
        altText="art direction"
        width={838}
        height={190}
        src="https://js.skyscnr.com/sttc/bpk-content/our_wordmarque-c8a774a8.svg"
      />
    ),
  },
  {
    id: 'logo-suite',
    title: 'Logo suite',
    backgroundStyle: 'light',
    content: (
      <ContentGrid className={getClassName('bpk-docs-logo-page__grid')}>
        <ContentGridCard className={getClassName('bpk-docs-logo-page__card')}>
          <img
            className={getClassName(
              'bpk-docs-logo-page__suite',
              'bpk-docs-logo-page__suite--vertical',
            )}
            src="https://js.skyscnr.com/sttc/bpk-content/logo_suite_vertical_logo-ee0c930e.svg"
            alt="vertical skyscanner logo with wordmarque"
          />
        </ContentGridCard>
        <ContentGridCard className={getClassName('bpk-docs-logo-page__card')}>
          <img
            className={getClassName(
              'bpk-docs-logo-page__suite',
              'bpk-docs-logo-page__suite--horizontal',
            )}
            src="https://js.skyscnr.com/sttc/bpk-content/logo_suite_horizontal_logo-33239ee8.svg"
            alt="horizontal skyscanner logo with wordmarque"
          />
        </ContentGridCard>
        <ContentGridCard className={getClassName('bpk-docs-logo-page__card')}>
          <img
            className={getClassName(
              'bpk-docs-logo-page__suite',
              'bpk-docs-logo-page__suite--symbol',
            )}
            src="https://js.skyscnr.com/sttc/bpk-content/logo_suite_symbol-8c0abdd8.svg"
            alt="our symbol, skyscanner logo without wordmarque"
          />
        </ContentGridCard>
        <ContentGridCard className={getClassName('bpk-docs-logo-page__card')}>
          <img
            className={getClassName(
              'bpk-docs-logo-page__suite',
              'bpk-docs-logo-page__suite--wordmarque',
            )}
            src="https://js.skyscnr.com/sttc/bpk-content/our_wordmarque-c8a774a8.svg"
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
        src="https://js.skyscnr.com/sttc/bpk-content/logo_examples-1ebc5905.png"
      />
    ),
  },
];

const LogoPage = () => (
  <GuidelinesPageBuilder
    title="Logo"
    hero={{
      heading: `Logo`,
      imageUrl:
        'https://js.skyscnr.com/sttc/bpk-content/logo_hero-87c0a5cc.svg',
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
