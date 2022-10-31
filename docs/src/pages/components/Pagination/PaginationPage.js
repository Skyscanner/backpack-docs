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

import Web, { metadata as webMetadata } from './WebPagination.mdx';

import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';
import MarkdownPage from 'components/MarkdownPage';

const blurb = [
  <IntroBlurb>
    The page indicator component is used to indicate a stack of pages or images
    in a group and highlight the current selected page or images.
  </IntroBlurb>,
];

const PaginationPage = () => (
  <DocsPageWrapper
    title="Pagination"
    blurb={blurb}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default PaginationPage;
