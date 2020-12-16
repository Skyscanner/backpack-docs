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

import React from 'react';

import WebSwitchPage from './WebSwitchPage';
import Android, { metadata as androidMetadata } from './AndroidSwitch.mdx';
import IOS, { metadata as iosMetadata } from './IOSSwitch.mdx';
import Native, { metadata as nativeMetadata } from './NativeSwitch.mdx';

import MarkdownPage from 'components/MarkdownPage';
import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';

const blurb = [
  <IntroBlurb>
    Switches allow users to toggle between two states, on or off. On mobile,
    these are often used as a replacement for checkboxes.
  </IntroBlurb>,
];

const SwitchPage = () => (
  <DocsPageWrapper
    title="Switch"
    blurb={blurb}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    webSubpage={<WebSwitchPage wrapped />}
  />
);

export default SwitchPage;
