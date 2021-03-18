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
import BpkRouterLink from 'bpk-component-router-link';

import IconsDesignPage from './DesignIconPage';
import Android, { metadata as androidMetadata } from './AndroidIcon.mdx';
import IOS, { metadata as iosMetadata } from './IOSIcon.mdx';
import Web, { metadata as webMetadata } from './WebIcon.mdx';
import Native, { metadata as nativeMetadata } from './NativeIcon.mdx';

import MarkdownPage from 'components/MarkdownPage';
import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';

const Page = () => (
  <DocsPageWrapper
    title="Icon"
    blurb={[
      <IntroBlurb>
        A suite of icons for representing concepts, features and actions.
        Looking for the icon set? Check out the{' '}
        <BpkRouterLink to="/components/icon?platform=design">
          design tab
        </BpkRouterLink>{' '}
        for the list of available icons.
      </IntroBlurb>,
    ]}
    designSubpage={<IconsDesignPage wrapped />}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
  />
);

export default Page;
