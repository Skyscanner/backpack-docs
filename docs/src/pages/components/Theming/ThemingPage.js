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
import BpkLink from 'bpk-component-link';

import Web from './WebThemingPage';
import Native, { metadata as nativeMetadata } from './NativeTheming.mdx';
import Android, { metadata as androidMetadata } from './AndroidTheming.mdx';
import IOS, { metadata as iosMetadata } from './IOSTheming.mdx';

import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';
import Paragraph from 'components/Paragraph';
import MarkdownPage from 'components/MarkdownPage';

const CONTEXT_API_URL = 'https://reactjs.org/docs/context.html';
const CSS_VARIABLES_URL =
  'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables';

const blurb = [
  <IntroBlurb>
    All Backpack components have full theming support through through the theme
    provider component. In the render tree, all themeable components will have
    access to the provided theme, even when they are multiple levels deep.
    variables are used.
  </IntroBlurb>,
  <Paragraph>
    In React Native, this is achieved using React&apos;s{' '}
    <BpkLink href={CONTEXT_API_URL} blank>
      context API
    </BpkLink>
    . On the web,{' '}
    <BpkLink href={CSS_VARIABLES_URL} blank>
      CSS variables
    </BpkLink>{' '}
    are used. Each themeable component lists the theme attributes it requires in
    its readme.
  </Paragraph>,
];

const ThemingPage = () => (
  <DocsPageWrapper
    title="Theming"
    blurb={blurb}
    webSubpage={<Web />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
  />
);

export default ThemingPage;
