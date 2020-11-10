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

import getMarkdownString from '../../../helpers/markdown-helper';
import BpkMarkdownRenderer from '../../../components/DocsPageBuilder/BpkMarkdownRenderer';
import GuidelinesPageBuilder from '../../../components/GuidelinesBuilder';
import ShadowsHero from '../../../static/shadows/shadows_hero.jpg';
import ShadowPairOne from '../../../static/shadows/category_1.jpg';
import ShadowPairTwo from '../../../static/shadows/category_2.jpg';
import ShadowsExamples from '../../../static/shadows/shadows_examples.jpg';
import * as ROUTES from '../../../constants/routes';

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
          {/* eslint-disable backpack/use-components */}
          <img
            className={getClassName('bpk-docs-shadows-page--categories__image')}
            src={`/${ShadowPairOne}`}
            alt="shadows for nature and architecture elements"
          />
          {/* eslint-enable backpack/use-components */}
          <div
            className={getClassName('bpk-docs-shadows-page--categories__text')}
          >
            <div
              className={getClassName(
                'bpk-docs-shadows-page--categories__content',
              )}
            >
              Nature
            </div>
            <div
              className={getClassName(
                'bpk-docs-shadows-page--categories__content',
                'bpk-docs-shadows-page--categories__content--secondary',
              )}
            >
              Architecture
            </div>
          </div>
        </div>

        <div
          className={getClassName('bpk-docs-shadows-page--categories__group')}
        >
          {/* eslint-disable backpack/use-components */}
          <img
            className={getClassName('bpk-docs-shadows-page--categories__image')}
            alt="shadows for abstract elements and when using props"
            src={`/${ShadowPairTwo}`}
          />
          {/* eslint-enable backpack/use-components */}
          <div
            className={getClassName('bpk-docs-shadows-page--categories__text')}
          >
            <div
              className={getClassName(
                'bpk-docs-shadows-page--categories__content',
              )}
            >
              Abstract
            </div>
            <div
              className={getClassName(
                'bpk-docs-shadows-page--categories__content',
                'bpk-docs-shadows-page--categories__content--secondary',
              )}
            >
              Prop
            </div>
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
      heading: 'Shadows',
      imageUrl: `/${ShadowsHero}`,
      className: getClassName('bpk-docs-shadows-page__hero'),
    }}
    sections={sections}
    nextPageLink={{
      title: 'Graphic devices',
      link: ROUTES.GRAPHIC_DEVICES,
    }}
  />
);

export default ShadowsPage;
