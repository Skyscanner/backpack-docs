/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
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

import IOS, { metadata as iosMetadata } from './IOSBarChart.mdx';
import Android, { metadata as androidMetadata } from './AndroidBarChart.mdx';
import Compose, { metadata as composeMetadata } from './ComposeBarChart.mdx';
import Web, { metadata as webMetadata } from './WebBarchartsPage.mdx';

import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';
import MarkdownPage from 'components/MarkdownPage';

const blurb = [
  <IntroBlurb>
    Bar charts are useful for displaying comparisons between categories of data.
    At Skyscanner, bar charts are commonly used for displaying fare prices
    within a given time period e.g. a year, month or week.
  </IntroBlurb>,
];

const BarchartsPage = () => (
  <DocsPageWrapper
    title="Bar chart"
    blurb={blurb}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    composeSubpage={<MarkdownPage content={Compose} {...composeMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
  />
);

export default BarchartsPage;
