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

import Compose, { metadata as composeMetadata } from './ComposeFloatingNotification.mdx';
import Web, { metadata as webMetadata } from './WebFloatingNotification.mdx';

import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';
import MarkdownPage from 'components/MarkdownPage';

const Page = () => (
  <DocsPageWrapper
    title="Floating notification"
    blurb={[
      <IntroBlurb>
        The floating notification informs the user that an action has been
        taken. It can optionally include an icon and/or call-to-action (CTA)
        which may allow the user to view or undo the action.
      </IntroBlurb>,
    ]}
    composeSubpage={<MarkdownPage content={Compose} {...composeMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default Page;
