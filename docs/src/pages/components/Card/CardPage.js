/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2022 Skyscanner Ltd
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

import Android, { metadata as androidMetadata } from './AndroidCard.mdx';
import Compose, { metadata as composeMetadata } from './ComposeCard.mdx';
import IOS, { metadata as iosMetadata } from './IOSCard.mdx';
import Native, { metadata as nativeMetadata } from './NativeCard.mdx';
import Web, { metadata as webMetadata } from './WebCard.mdx';

import IntroBlurb from 'components/IntroBlurb';
import Paragraph from 'components/Paragraph';
import DocsPageWrapper from 'components/DocsPageWrapper';
import MarkdownPage from 'components/MarkdownPage';

const Page = () => (
  <DocsPageWrapper
    title="Card"
    blurb={[
      <IntroBlurb>
        Cards are used to group related items. They allow complex datasets to be
        broken down into individual, distinct areas for easy consumption.
      </IntroBlurb>,
      <Paragraph>
        Cards are used as a signifier to give affordance to a clickable set of
        elements.
      </Paragraph>,
    ]}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    composeSubpage={<MarkdownPage content={Compose} {...composeMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default Page;
