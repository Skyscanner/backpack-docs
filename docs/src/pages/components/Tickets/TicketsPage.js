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
import BpkRouterLink from 'bpk-component-router-link';

import * as ROUTES from '../../../constants/routes';

import Web, { metadata as webMetadata } from './WebTicketsPage.mdx';

import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';
import MarkdownPage from 'components/MarkdownPage';

const blurb = [
  <IntroBlurb>
    Tickets combine the look and feel of{' '}
    <BpkRouterLink to={ROUTES.CARD}>Cards</BpkRouterLink> with an added
    separation line to divide their content into two distinct areas. They can be
    configured to display both horizontally and vertically.
  </IntroBlurb>,
];

const TicketsPage = () => (
  <DocsPageWrapper
    title="Ticket"
    blurb={blurb}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
  />
);

export default TicketsPage;
