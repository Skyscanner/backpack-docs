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

import Android, { metadata as androidMetadata } from './AndroidText.mdx';
import Native, { metadata as nativeMetadata } from './NativeText.mdx';
import IOS, { metadata as iosMetadata } from './iOSText.mdx';
import Web, { metadata as webMetadata } from './WebText.mdx';

import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';
import MarkdownPage from 'components/MarkdownPage';

const Page = () => (
  <DocsPageWrapper
    title="Text"
    blurb={[
      <IntroBlurb>
        The text component enables you to use Backpack defined text styles. On
        web, you can combine these with any of the heading tags, a span or a
        paragraph. You can mix different text styles with the appropriate tag to
        achieve semantic markup while retaining control over how the text looks.
      </IntroBlurb>,
    ]}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default Page;
