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

/* @flow strict */

import React from 'react';

import Web from './WebPanelsPage';
import Android, { metadata as androidMetadata } from './AndroidPanel.mdx';
import IOS, { metadata as iosMetadata } from './IOSPanel.mdx';
import Native, { metadata as nativeMetadata } from './NativePanels.mdx';

import MarkdownPage from 'components/MarkdownPage';
import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';

const Page = () => (
  <DocsPageWrapper
    title="Panel"
    blurb={[
      <IntroBlurb>
        Panels are useful for housing distinct areas of related content. Unlike
        cards these are not clickable.
      </IntroBlurb>,
    ]}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    webSubpage={<Web wrapped />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
  />
);

export default Page;
