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

import * as ROUTES from '../../constants/routes';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import DocsPageWrapper from '../../components/DocsPageWrapper';
import BpkParagraph from '../../components/Paragraph';
import IntroBlurb from '../../components/IntroBlurb';

const blurb = [
  <IntroBlurb>A range of common inputs for capturing user data.</IntroBlurb>,
];

const components = [
  {
    id: 'inputs',
    title: 'Inputs',
    blurb: [
      <BpkParagraph>
        <BpkLink href={ROUTES.TEXT_INPUT}>
          Text inputs have been moved to their own page.
        </BpkLink>
      </BpkParagraph>,
    ],
  },
  {
    id: 'selects',
    title: 'Selects (aka dropdowns)',
    blurb: [
      <BpkParagraph>
        <BpkLink href={ROUTES.SELECT}>
          Selects have been moved to their own page.
        </BpkLink>
      </BpkParagraph>,
    ],
  },
  {
    id: 'docked-inputs-and-selects',
    title: 'Docked inputs & selects',
    blurb: [
      <BpkParagraph>
        <BpkLink href={ROUTES.TEXT_INPUT}>
          Docked inputs are now part of the text input page.
        </BpkLink>
      </BpkParagraph>,
    ],
  },
  {
    id: 'textareas',
    title: 'Textareas',
    blurb: [
      <BpkParagraph>
        <BpkLink href={ROUTES.TEXT_VIEW}>
          Text areas have been moved to their own page.
        </BpkLink>
      </BpkParagraph>,
    ],
  },
  {
    id: 'checkboxes',
    title: 'Checkboxes',
    blurb: [
      <BpkParagraph>
        <BpkLink href={ROUTES.CHECKBOX}>
          Checkboxes have been moved to their own page.
        </BpkLink>
      </BpkParagraph>,
    ],
  },
  {
    id: 'radios',
    title: 'Radio buttons',
    blurb: [
      <BpkParagraph>
        <BpkLink href={ROUTES.RADIO_BUTTON}>
          Radio buttons have been moved to their own page.
        </BpkLink>
      </BpkParagraph>,
    ],
  },
  {
    id: 'labels',
    title: 'Labels',
    blurb: [
      <BpkParagraph>
        <BpkLink href={ROUTES.FORM_LABEL}>
          Form labels have been moved to their own page.
        </BpkLink>
      </BpkParagraph>,
    ],
  },
  {
    id: 'validation',
    title: 'Validation',
    blurb: [
      <BpkParagraph>
        <BpkLink href={ROUTES.FORM_VALIDATION}>
          Form validation has been moved to its own page.
        </BpkLink>
      </BpkParagraph>,
    ],
  },
];

const FormsSubPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Form elements"
    components={components}
    sassdocId="forms"
    {...rest}
  />
);

const FormsPage = () => (
  <DocsPageWrapper
    title="Forms"
    blurb={blurb}
    webSubpage={<FormsSubPage wrapped />}
  />
);

export default FormsPage;
