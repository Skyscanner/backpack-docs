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
import BpkSelect from 'bpk-component-select';
import BpkCheckbox from 'bpk-component-checkbox';
import BpkTextarea from 'bpk-component-textarea';
import BpkInput from 'bpk-component-input';
import BpkFormValidation from 'bpk-component-form-validation';
import { cssModules } from 'bpk-react-utils';
import readme from 'bpk-component-form-validation/README.md';

import { WebComponentPage } from '../../components/ComponentPage';
import InputContainer from '../FormsPage/InputContainer';
import STYLES from '../FormsPage/forms-page.scss';

const getClassName = cssModules(STYLES);

const formClassName = getClassName('bpkdocs-forms-page__form');

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkInput}
          id="input_invalid"
          name="input_invalid"
          value="Edinbrvgh"
          placeholder="Country, city or airport"
          onChange={() => null}
          valid={false}
        />
        <BpkFormValidation id="form_validation" expanded>
          Please enter a valid name
        </BpkFormValidation>
      </form>,
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkSelect}
          id="select_invalid"
          name="select_invalid"
          value=""
          onChange={() => null}
          valid={false}
        >
          <option value="" hidden>
            Please select...
          </option>
          <option value="economy">Economy</option>
          <option value="premium_economy">Premium Economy</option>
          <option value="business">Business class</option>
          <option value="first">First class</option>
        </InputContainer>
        <BpkFormValidation id="form_validation" expanded isCheckbox>
          This option is required
        </BpkFormValidation>
      </form>,
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkCheckbox}
          name="checkbox"
          label="Apples"
        />
        <BpkFormValidation id="form_validation" expanded isCheckbox>
          This checkbox is required
        </BpkFormValidation>
      </form>,
      <form className={formClassName}>
        <InputContainer
          FormComponent={BpkTextarea}
          id="textarea"
          name="textarea"
          value="@text 123 /}"
          placeholder="@text 123 /}"
          onChange={() => null}
          valid={false}
        />
        <BpkFormValidation id="form_validation" expanded>
          Please enter valid input
        </BpkFormValidation>
      </form>,
    ],
  },
];

const WebFormValidationPage = () => (
  <WebComponentPage
    sassdocId="forms-mixin-bpk-label"
    examples={components}
    readme={readme}
    usageTable={{
      dos: [
        'Use validation messages to provide the user with specific feedback about errors with an input field.',
        'Display validation messages on form submit or field blur.',
        'Use the fieldset component which combines labels, fields and validation messages where possible.',
      ],
      donts: [
        'Validate while the user types, as this can be confusing and bad for accessibility.',
      ],
    }}
  />
);

export default WebFormValidationPage;
