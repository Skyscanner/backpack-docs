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
import ShadowsHero from '../../static/shadows/shadows_hero.png';
import ShadowsCatergoryOne from '../../static/shadows/categorie_1.jpg';
import ShadowsCatergoryTwo from '../../static/shadows/categorie_2.jpg';
import ShadowsCatergoryThree from '../../static/shadows/categorie_3.jpg';
import ShadowsCatergoryFour from '../../static/shadows/categorie_4.jpg';
import ShadowsExamples from '../../static/shadows/shadows_examples.png';

import STYLES from './shadows-page.scss';
import intro from './content/intro.md';

const getClassName = cssModules(STYLES);

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'categories',
    title: 'Categories',
    backgroundStyle: 'light',
    content: (
      <div className={getClassName('bpk-docs-shadows-page--categories')}>
        <div>
          <img
            className={getClassName(
              'bpk-docs-shadows-page--categories__content',
            )}
            src={`/${ShadowsCatergoryOne}`}
            alt="four images with different shadow styles"
          />
          <div
            className={getClassName(
              'bpk-docs-shadows-page--categories__content',
            )}
          >
            Nature
          </div>
        </div>
        <div>
          <img
            className={getClassName(
              'bpk-docs-shadows-page--categories__content',
            )}
            alt="four images with different shadow styles"
            src={`/${ShadowsCatergoryTwo}`}
          />
          <div
            className={getClassName(
              'bpk-docs-shadows-page--categories__content',
            )}
          >
            Architecture
          </div>
        </div>
        <div>
          <img
            className={getClassName(
              'bpk-docs-shadows-page--categories__content',
            )}
            alt="four images with different shadow styles"
            src={`/${ShadowsCatergoryThree}`}
          />
          <div
            className={getClassName(
              'bpk-docs-shadows-page--categories__content',
            )}
          >
            Abstract
          </div>
        </div>
        <div>
          <img
            className={getClassName(
              'bpk-docs-shadows-page--categories__content',
            )}
            alt="four images with different shadow styles"
            src={`/${ShadowsCatergoryFour}`}
          />
          <div
            className={getClassName(
              'bpk-docs-shadows-page--categories__content',
            )}
          >
            Prop
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'examples',
    title: 'Examples',
    content: (
      <BpkImage
        className={getClassName('bpk-docs-shadows-page__image')}
        altText="four images with different usages of shadows in situ"
        width={840}
        height={930}
        src={`/${ShadowsExamples}`}
      />
    ),
  },
];

const ShadowsPage = () => (
  <GuidelinesPageBuilder
    title="Shadows"
    hero={{
      heading: `Shadows`,
      imageUrl: `/${ShadowsHero}`,
      className: getClassName('bpk-docs-shadows-page__hero'),
    }}
    sections={sections}
  />
);

export default ShadowsPage;
