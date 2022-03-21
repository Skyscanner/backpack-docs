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

import Web, { metadata as webMetadata } from './WebNavigationBar.mdx';
import Android, { metadata as androidMetadata } from './AndroidNavBar.mdx';
import Native, { metadata as nativeMetadata } from './NativeNavigationBar.mdx';
import IOS, { metadata as iosMetadata } from './IOSNavigationBar.mdx';

import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';
import MarkdownPage from 'components/MarkdownPage';

const BadgePage = () => (
  <DocsPageWrapper
    title="Navigation bar"
    blurb={[
      <IntroBlurb>
        The navigation bar component encapsulates a title and icon/text actions
        for controlling views.
      </IntroBlurb>,
    ]}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default BadgePage;
