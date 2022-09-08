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

import IOS, { metadata as iosMetadata } from './IOSSKeleton.mdx';
import SwiftUI, { metadata as swiftuiMetadata } from './SwiftUISkeleton.mdx';

import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';
import MarkdownPage from 'components/MarkdownPage';

const SkeletonPage = () => (
  <DocsPageWrapper
    title="Skeleton"
    blurb={[
      <IntroBlurb>
        Skeleton are used to indicate the user interface is loading. And help the traveler get a 
        feel on how the page layout will be once data is loaded in.
      </IntroBlurb>,
    ]}
    swiftuiSubpage={<MarkdownPage content={SwiftUI} {...swiftuiMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
  />
);

export default SkeletonPage;
