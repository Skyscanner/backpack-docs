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
import BpkLabel from 'bpk-component-label';
import { cssModules } from 'bpk-react-utils';
import readme from 'bpk-component-label/README.md';

import { WebComponentPage } from '../../components/ComponentPage';
import STYLES from '../FormsPage/forms-page.scss';

const getClassName = cssModules(STYLES);

const formClassName = getClassName('bpkdocs-forms-page__form');

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <form className={formClassName}>
        <BpkLabel htmlFor="select_class">Class</BpkLabel>
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="select_baggage">Baggage</BpkLabel>
      </form>,
    ],
  },
  {
    id: 'disabled',
    title: 'Disabled',
    examples: [
      <form className={formClassName}>
        <BpkLabel disabled htmlFor="select_class_disabled">
          Class
        </BpkLabel>
      </form>,
      <form className={formClassName}>
        <BpkLabel disabled htmlFor="select_baggage_disabled">
          Baggage
        </BpkLabel>
      </form>,
    ],
  },
  {
    id: 'required',
    title: 'Required',
    examples: [
      <form className={formClassName}>
        <BpkLabel required htmlFor="select_class_invalid">
          Class
        </BpkLabel>
      </form>,
      <form className={formClassName}>
        <BpkLabel required htmlFor="select_baggage_invalid">
          Baggage
        </BpkLabel>
      </form>,
    ],
  },
  {
    id: 'invalid',
    title: 'Invalid',
    examples: [
      <form className={formClassName}>
        <BpkLabel valid={false} htmlFor="select_class_invalid">
          Class
        </BpkLabel>
      </form>,
      <form className={formClassName}>
        <BpkLabel valid={false} htmlFor="select_baggage_invalid">
          Baggage
        </BpkLabel>
      </form>,
    ],
  },
];

const WebFormLabelPage = () => (
  <WebComponentPage
    sassdocId="forms-mixin-bpk-label"
    examples={components}
    readme={readme}
    usageTable={{
      dos: [
        'Always use labels with form elements to provide context to the user.',
        'Use the fieldset component which combines labels, fields and validation messages where possible.',
      ],
      donts: ['Rely on placeholders alone.'],
    }}
  />
);

export default WebFormLabelPage;
