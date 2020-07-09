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
import readme from 'bpk-component-radio/README.md';

import RadioContainer from '../FormsPage/RadioContainer';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import IntroBlurb from '../../components/IntroBlurb';

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [<RadioContainer value="apples" />],
  },
  {
    id: 'disabled',
    title: 'Disabled',
    examples: [<RadioContainer value="apples" disabled />],
  },
  {
    id: 'invalid',
    title: 'Invalid',
    examples: [<RadioContainer value="apples" valid={false} />],
  },
  {
    id: 'white',
    title: 'White',
    blurb:
      'You can change the label to white for displaying on dark backgrounds.',
    dark: true,
    examples: [<RadioContainer value="apples" white />],
  },
];

const blurb = [
  <IntroBlurb>
    Backpack overrides the browser default styles for radio buttons. In some
    older browsers they simply fall back to the browser default.
  </IntroBlurb>,
];

const WebRadioButtonsPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Radio buttons"
    sassdocId="forms-mixin-bpk-radio"
    blurb={blurb}
    components={components}
    readme={readme}
    showMenu={false}
    {...rest}
  />
);

export default WebRadioButtonsPage;
