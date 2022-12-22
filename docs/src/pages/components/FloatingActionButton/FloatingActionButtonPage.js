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

import Android, {
  metadata as androidMetadata,
} from './AndroidFloatingActionButton.mdx';
import Compose, {
  metadata as composeMetadata,
} from './ComposeFloatingActionButton.mdx';

import MarkdownPage from 'components/MarkdownPage';
import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';

const FloatingActionButtonPage = () => (
  <DocsPageWrapper
    title="Floating action button"
    blurb={[
      <IntroBlurb>
        A floating action button represents the primary action in an
        application.
      </IntroBlurb>,
    ]}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    composeSubpage={<MarkdownPage content={Compose} {...composeMetadata} />}
  />
);

export default FloatingActionButtonPage;
