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

import getMarkdownString from '../../../helpers/markdown-helper';
import BpkMarkdownRenderer from '../../../components/DocsPageBuilder/BpkMarkdownRenderer';
import GuidelinesPageBuilder from '../../../components/GuidelinesBuilder';
import StrategyHeroImage from '../../../static/strategy/strategy_header_hero.png';
import VisionHeroImage from '../../../static/strategy/vision_hero.png';
import MissionHeroImage from '../../../static/strategy/mission_hero.png';
import ValuesHeroImage from '../../../static/strategy/values_hero.png';
import PersonalityHeroImage from '../../../static/strategy/personality_hero.png';
import * as ROUTES from '../../../constants/routes';

import intro from './content/intro.md';
import vision from './content/vision.md';
import values from './content/values.md';
import personality from './content/personality.md';

const sections = [
  {
    id: 'intro',
    content: <BpkMarkdownRenderer source={getMarkdownString(intro)} />,
  },
  {
    id: 'our-vision',
    image: {
      heading: 'Our vision',
      imageUrl: `/${VisionHeroImage}`,
    },
  },
  {
    id: 'our-vision-content',
    title: 'For everyone to explore our world effortlessly and ethically.',
    contentStyle: 'light',
    content: <BpkMarkdownRenderer source={getMarkdownString(vision)} />,
  },
  {
    id: 'our-mission',
    contentStyle: 'light',
    image: {
      heading: 'Our mission',
      imageUrl: `/${MissionHeroImage}`,
    },
  },
  {
    id: 'our-mission-content',
    title:
      'To lead the global transformation to modern and sustainable travel.',
  },
  {
    id: 'our-values',
    image: {
      heading: 'Our values',
      imageUrl: `/${ValuesHeroImage}`,
    },
  },
  {
    id: 'our-values-content',
    contentStyle: 'light',
    content: <BpkMarkdownRenderer source={getMarkdownString(values)} />,
  },
  {
    id: 'our-personality',
    image: {
      heading: 'Our personality',
      imageUrl: `/${PersonalityHeroImage}`,
    },
  },
  {
    id: 'our-personality-content',
    contentStyle: 'light',
    content: <BpkMarkdownRenderer source={getMarkdownString(personality)} />,
  },
];

const StrategyPage = () => (
  <GuidelinesPageBuilder
    title="Strategy"
    hero={{
      heading: 'Strategy',
      imageUrl: `/${StrategyHeroImage}`,
    }}
    sections={sections}
    nextPageLink={{
      title: 'Tone of voice',
      link: ROUTES.TONE_OF_VOICE,
    }}
  />
);

export default StrategyPage;
