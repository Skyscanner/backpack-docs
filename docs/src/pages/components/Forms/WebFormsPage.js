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
import { WebComponentPage } from '../../components/ComponentPage';

const components = [
  {
    id: 'inputs',
    title: 'Inputs',
    blurb: [
      <BpkLink href={ROUTES.TEXT_INPUT}>
        Text inputs have been moved to their own page.
      </BpkLink>,
    ],
  },
  {
    id: 'selects',
    title: 'Selects (aka dropdowns)',
    blurb: [
      <BpkLink href={ROUTES.SELECT}>
        Selects have been moved to their own page.
      </BpkLink>,
    ],
  },
  {
    id: 'docked-inputs-and-selects',
    title: 'Docked inputs & selects',
    blurb: [
      <BpkLink href={ROUTES.TEXT_INPUT}>
        Docked inputs are now part of the text input page.
      </BpkLink>,
    ],
  },
  {
    id: 'textareas',
    title: 'Textareas',
    blurb: [
      <BpkLink href={ROUTES.TEXT_INPUT}>
        Text areas are now part of the text input page.
      </BpkLink>,
    ],
  },
  {
    id: 'checkboxes',
    title: 'Checkboxes',
    blurb: [
      <BpkLink href={ROUTES.CHECKBOX}>
        Checkboxes have been moved to their own page.
      </BpkLink>,
    ],
  },
  {
    id: 'radios',
    title: 'Radio buttons',
    blurb: [
      <BpkLink href={ROUTES.RADIO_BUTTON}>
        Radio buttons have been moved to their own page.
      </BpkLink>,
    ],
  },
  {
    id: 'labels',
    title: 'Labels',
    blurb: [
      <BpkLink href={ROUTES.FORM_LABEL}>
        Form labels have been moved to their own page.
      </BpkLink>,
    ],
  },
  {
    id: 'validation',
    title: 'Validation',
    blurb: [
      <BpkLink href={ROUTES.FORM_VALIDATION}>
        Form validation has been moved to its own page.
      </BpkLink>,
    ],
  },
];

const WebFormsPage = () => (
  <WebComponentPage
    examples={components}
    sassdocId="forms"
    packageName="bpk-component-form-validation"
  />
);

export default WebFormsPage;
