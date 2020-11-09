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

import DocsPageBuilder from '../../../components/DocsPageBuilder';
import IntroBlurb from '../../../components/IntroBlurb';
import Paragraph from '../../../components/Paragraph';

const blurb = [
  <IntroBlurb>
    Design guidelines don&apos;t yet exist for this component, but you can help.
  </IntroBlurb>,
  <Paragraph>
    Get in touch and let&apos;s work together to define the patterns, usage
    advice and more about how to use this component.
  </Paragraph>,
];

const DesignPlaceholderPage = ({ ...rest }) => (
  <DocsPageBuilder title="Help wanted" blurb={blurb} {...rest} />
);

export default DesignPlaceholderPage;
