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
import GraphicDevicesHero from '../../static/graphic-devices/graphic_devices_hero.svg';
import GraphicDevicesPairOne from '../../static/graphic-devices/overview_1.png';
import GraphicDevicesPairTwo from '../../static/graphic-devices/overview_2.png';
import GraphicDevicesPairThree from '../../static/graphic-devices/overview_3.png';
import GraphicDevicesPairFour from '../../static/graphic-devices/overview_4.png';
import GraphicDevicesExamples from '../../static/graphic-devices/examples.png';

import OverviewRow from './overviewRow';
import STYLES from './devices-page.scss';
import intro from './content/intro.md';

const getClassName = cssModules(STYLES);

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'overview',
    title: 'Overview',
    backgroundStyle: 'light',
    content: (
      <div className={getClassName('bpk-docs-graphic-devices-page__overview')}>
        <OverviewRow
          imageSetOne={{
            image: GraphicDevicesPairOne,
            titles: ['Content bubble', 'Full-bleed Content Bubble'],
          }}
          imageSetTwo={{
            image: GraphicDevicesPairTwo,
            titles: ['Upwards Flare', 'Upwards Flare Bar'],
          }}
        />
        <OverviewRow
          imageSetOne={{
            image: GraphicDevicesPairThree,
            titles: ['Content bubble', 'Full-bleed Content Bubble'],
          }}
          imageSetTwo={{
            image: GraphicDevicesPairFour,
            titles: ['Upwards Flare', 'Upwards Flare Bar'],
          }}
        />
      </div>
    ),
  },
  {
    id: 'examples',
    title: 'Examples',
    content: (
      <BpkImage
        className={getClassName('bpk-docs-graphic-devices-page__image')}
        altText="color pairings"
        width={840}
        height={1040}
        src={`/${GraphicDevicesExamples}`}
      />
    ),
  },
];

const GraphicDevicesPage = () => (
  <GuidelinesPageBuilder
    title="Graphic Devices"
    hero={{
      heading: `Graphic devices`,
      imageUrl: `/${GraphicDevicesHero}`,
      className: getClassName('bpk-docs-graphic-devices-page__hero'),
    }}
    sections={sections}
  />
);

export default GraphicDevicesPage;
