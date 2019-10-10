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

import GuidelinePagesBuilder from '../../components/GuidelinesBuilder';
import CopywritingHeroImage from '../../static/copywriting_hero.jpg';

import intro from './content/intro.md';
import vision from './content/vision.md';
import values from './content/values.md';
import personality from './content/personality.md';

const sections = [
  {
    id: 'intro',
    markdown: intro,
  },
  {
    id: 'our-vision',
    image: {
      heading: `Our vision`,
      imageUrl: `/${CopywritingHeroImage}`,
    },
  },
  {
    id: 'our-vision-content',
    title: 'For everyone to explore our world effortlessly and ethically.',
    markdown: vision,
  },
  {
    id: 'our-mission',
    image: {
      heading: `Our mission`,
      imageUrl: `/${CopywritingHeroImage}`,
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
      heading: `Our values`,
      imageUrl: `/${CopywritingHeroImage}`,
    },
  },
  {
    id: 'our-values-content',
    markdown: values,
  },
  {
    id: 'our-personality',
    image: {
      heading: `Our personality`,
      imageUrl: `/${CopywritingHeroImage}`,
    },
  },
  {
    id: 'our-personality-content',
    title: 'How do you find the right voice?',
    markdown: personality,
  },
];

const StrategyPage = () => (
  <GuidelinePagesBuilder
    title="Strategy"
    hero={{
      heading: `Strategy`,
      imageUrl: `/${CopywritingHeroImage}`,
    }}
    sections={sections}
    nextPageLink={{
      title: 'Tone of voice',
      subtitle: 'Next up',
      nextLink: '#',
    }}
  />
);

export default StrategyPage;
