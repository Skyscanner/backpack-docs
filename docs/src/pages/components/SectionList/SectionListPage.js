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

import Native, { metadata as nativeMetadata } from './NativeSectionList.mdx';
import Web, { metadata as webMetadata } from './WebSectionList.mdx';

import MarkdownPage from 'components/MarkdownPage';
import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';

const Page = () => (
  <DocsPageWrapper
    title="Section list"
    blurb={[
      <IntroBlurb>
        Section lists present data as a single-column list of rows that can be
        divided into groups. They&apos;re great for displaying lists of options
        containing text and controls, as well as linking to additional views or
        pages.
      </IntroBlurb>,
    ]}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default Page;
