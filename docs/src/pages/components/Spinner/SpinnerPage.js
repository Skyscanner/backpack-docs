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

import Web from './WebSpinnersPage';
import Android, { metadata as androidMetadata } from './AndroidSpinner.mdx';
import IOS, { metadata as iosMetadata } from './IOSSpinner.mdx';
import Native, { metadata as nativeMetadata } from './NativeSpinner.mdx';

import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';
import MarkdownPage from 'components/MarkdownPage';

const blurb = [
  <IntroBlurb>
    Spinners are used to indicate that a part of the product is loading or
    performing a task when the amount of time needed is unknown.
  </IntroBlurb>,
];

const Page = () => (
  <DocsPageWrapper
    title="Spinner"
    blurb={blurb}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    webSubpage={<Web />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
  />
);

export default Page;
