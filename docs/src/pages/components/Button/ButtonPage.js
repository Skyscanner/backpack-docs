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

import Android, { metadata as androidMetadata } from './AndroidButton.mdx';
import IOS, { metadata as iosMetadata } from './IOSButtonPage.mdx';
import WebButtons from './WebButtonPage';
import Native, { metadata as nativeMetadata } from './NativeButtonPage.mdx';

import MarkdownPage from 'components/MarkdownPage';
import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';

const ButtonPage = () => (
  <DocsPageWrapper
    title="Button"
    blurb={[
      <IntroBlurb>
        Buttons make common actions and navigation easy to perform.
      </IntroBlurb>,
    ]}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    webSubpage={<WebButtons wrapped />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
  />
);

export default ButtonPage;
