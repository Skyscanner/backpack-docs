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
import BpkLink from 'bpk-component-link';

import DocsPageWrapper from '../../../components/DocsPageWrapper';
import Heading from '../../../components/Heading';
import Paragraph from '../../../components/Paragraph';
import IntroBlurb from '../../../components/IntroBlurb';
import Code from '../../../components/Code';
import * as ROUTES from '../../../constants/routes';

import WebAlignmentPage from './WebAlignmentPage';

const blurb = [
  <IntroBlurb>
    Alignment higher-order-components (HOCs) allow components to be aligned
    vertically within a given space.
  </IntroBlurb>,
  <Heading level="h3">Installation</Heading>,
  <Paragraph>
    The alignment HOCs are provided in the <Code>bpk-component-icon</Code>{' '}
    package. See <BpkLink href={ROUTES.ICON}>Icons</BpkLink> for installation
    instructions.
  </Paragraph>,
];

const AlignmentPage = () => (
  <DocsPageWrapper
    title="Alignment"
    blurb={blurb}
    webSubpage={<WebAlignmentPage />}
  />
);

export default AlignmentPage;
