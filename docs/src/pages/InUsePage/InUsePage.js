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
import InUseHero from '../../static/in-use/in_use_hero.svg';
import InUseExampleOne from '../../static/in-use/example_1.jpg';
import InUseExampleTwo from '../../static/in-use/example_2.jpg';
import InUseExampleThree from '../../static/in-use/example_3.jpg';
import InUseExampleFour from '../../static/in-use/example_4.jpg';

import STYLES from './inuse-page.scss';
import intro from './content/intro.md';

const getClassName = cssModules(STYLES);

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'examples',
    title: 'Examples',
    backgroundStyle: 'light',
    content: (
      <div>
        <BpkImage
          altText="use of brand shown on escalator screens."
          width={840}
          height={585}
          src={`/${InUseExampleOne}`}
        />
        <BpkImage
          altText="use of brand on web mediums."
          width={840}
          height={588}
          src={`/${InUseExampleTwo}`}
        />
        <BpkImage
          altText="use of brand shown on social media."
          width={840}
          height={555}
          src={`/${InUseExampleThree}`}
        />
        <BpkImage
          altText="use of brand shown on street posters."
          width={840}
          height={590}
          src={`/${InUseExampleFour}`}
        />
      </div>
    ),
  },
];

const InUsePage = () => (
  <GuidelinesPageBuilder
    title="In use"
    hero={{
      heading: `In use`,
      imageUrl: `/${InUseHero}`,
      className: getClassName('bpk-docs-inuse-page__hero'),
    }}
    sections={sections}
    nextPageLink={{
      title: 'Typography',
      link: ROUTES.TYPOGRAPHY,
    }}
  />
);

export default InUsePage;
