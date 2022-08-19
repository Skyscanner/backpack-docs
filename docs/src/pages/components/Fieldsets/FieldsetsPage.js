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

import React from 'react';

import * as ROUTES from '../../../constants/routes';

import Web, { metadata as webMetadata } from './WebFieldsets.mdx';
import Compose, { metadata as composeMetadata } from './ComposeFieldsets.mdx';

import RouterLink from 'components/RouterLink';
import MarkdownPage from 'components/MarkdownPage';
import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';

const blurb = [
  <IntroBlurb>
    Fieldsets encapsulate the composition of{' '}
    <RouterLink to={`${ROUTES.FORM}`}>form controls</RouterLink>,{' '}
    <RouterLink to={`${ROUTES.FORM}#labels`}>labels</RouterLink>
    &nbsp;&amp;{' '}
    <RouterLink to={`${ROUTES.FORM}#validation`}>
      validation messages
    </RouterLink>{' '}
    with the necessary attributes to ensure good accessibility for screen
    readers.
  </IntroBlurb>,
];

const FieldsetPage = () => (
  <DocsPageWrapper
    title="Fieldset"
    blurb={blurb}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
    composeSubpage={<MarkdownPage content={Compose} {...composeMetadata} />}
  />
);

export default FieldsetPage;
