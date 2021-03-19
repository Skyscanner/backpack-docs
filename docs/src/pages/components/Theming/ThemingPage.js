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

import Native, { metadata as nativeMetadata } from './NativeTheming.mdx';
import Android, { metadata as androidMetadata } from './AndroidTheming.mdx';
import IOS, { metadata as iosMetadata } from './IOSTheming.mdx';
import Web, { metadata as webMetadata } from './WebTheming.mdx';

import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';
import MarkdownPage from 'components/MarkdownPage';

const blurb = [
  <IntroBlurb>
    All Backpack components have full theming support through through the theme
    provider component. In the render tree, all themeable components will have
    access to the provided theme, even when they are multiple levels deep.
  </IntroBlurb>,
];

const ThemingPage = () => (
  <DocsPageWrapper
    title="Theming"
    blurb={blurb}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default ThemingPage;
