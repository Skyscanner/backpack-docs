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

/* @flow strict */

import React from 'react';

import Android, { metadata as androidMetadata } from './AndroidChip.mdx';
import IOS, { metadata as iosMetadata } from './IOSChip.mdx';
import Native, { metadata as nativeMetadata } from './NativeChip.mdx';
import Web, { metadata as webMetadata } from './WebChip.mdx';

import MarkdownPage from 'components/MarkdownPage';
import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';

const blurb = [
  <IntroBlurb>
    Chips, sometimes called tags, are useful for displaying keywords or
    categories from common sets of data.
  </IntroBlurb>,
];

const ChipsPage = () => (
  <DocsPageWrapper
    title="Chip"
    blurb={blurb}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default ChipsPage;
