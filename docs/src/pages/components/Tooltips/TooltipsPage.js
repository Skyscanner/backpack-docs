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

import Web, { metadata as webMetadata } from './WebTooltipPage.mdx';

import DocsPageWrapper from 'components/DocsPageWrapper';
import Paragraph from 'components/Paragraph';
import IntroBlurb from 'components/IntroBlurb';
import MarkdownPage from 'components/MarkdownPage';

const blurb = [
  <IntroBlurb>
    Tooltips appear on hover of a particular element and are used to provide
    additional context/information to the user. They are generally text only and
    are triggered on pointer-based interfaces.
  </IntroBlurb>,
  <Paragraph>
    Tooltips do not work on touchscreens, which represent a sizeable portion of
    Skyscanner&apos;s audience on both desktop and mobile. You are strongly
    advised to use an alternative solution where possible.
  </Paragraph>,
];

const TooltipsPage = () => (
  <DocsPageWrapper
    title="Tooltip"
    blurb={blurb}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default TooltipsPage;
