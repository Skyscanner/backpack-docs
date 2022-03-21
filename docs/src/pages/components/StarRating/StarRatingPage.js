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

import Android, { metadata as androidMetadata } from './AndroidStarRating.mdx';
import Native, { metadata as nativeMetadata } from './NativeStarRating.mdx';
import IOS, { metadata as iosMetadata } from './IOSStarRating.mdx';
import Web, { metadata as webMetadata } from './WebStarRating.mdx';

import MarkdownPage from 'components/MarkdownPage';
import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';

const Page = () => (
  <DocsPageWrapper
    title="Star Rating"
    blurb={[
      <IntroBlurb>
        Star Ratings are used for displaying a score within a given range.
      </IntroBlurb>,
    ]}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default Page;
