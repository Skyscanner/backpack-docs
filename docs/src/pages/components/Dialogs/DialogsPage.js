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

import Android, { metadata as androidMetadata } from './AndroidDialog.mdx';
import Compose, { metadata as composeMetadata } from './ComposeDialog.mdx';
import IOS, { metadata as iosMetadata } from './IOSDialog.mdx';
import Native, { metadata as nativeMetadata } from './NativeDialog.mdx';
import Web, { metadata as webMetadata } from './WebDialog.mdx';

import MarkdownPage from 'components/MarkdownPage';
import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';

const blurb = [
  <IntroBlurb>
    Dialogs inform users about a specific task and may contain critical
    information, or require decisions or acknowledgement.
  </IntroBlurb>,
];

const DialogPage = () => (
  <DocsPageWrapper
    title="Dialog"
    blurb={blurb}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    composeSubpage={<MarkdownPage content={Compose} {...composeMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
  />
);

export default DialogPage;
