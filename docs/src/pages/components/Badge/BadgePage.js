/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2021 Skyscanner Ltd
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

import Design, { metadata as designMetadata } from './Design.mdx';
import Android, { metadata as androidMetadata } from './AndroidBadge.mdx';
import IOS, { metadata as iosMetadata } from './IOSBadge.mdx';
import Native, { metadata as nativeMetadata } from './NativeBadge.mdx';
import Web, { metadata as webMetadata } from './WebBadgePage.mdx';

import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';
import MarkdownPage from 'components/MarkdownPage';

const BadgePage = () => (
  <DocsPageWrapper
    title="Badge"
    blurb={[
      <IntroBlurb>
        Badges are labels which hold small amounts of information used to
        describe or highlight areas.
      </IntroBlurb>,
    ]}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
    designSubpage={<MarkdownPage content={Design} {...designMetadata} />}
  />
);

export default BadgePage;
