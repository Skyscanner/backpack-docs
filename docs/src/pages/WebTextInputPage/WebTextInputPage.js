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
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import { cssModules } from 'bpk-react-utils';
import readme from 'bpk-component-input/README.md';

import InputContainer from '../FormsPage/InputContainer';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import IntroBlurb from '../../components/IntroBlurb';
import STYLES from '../FormsPage/forms-page.scss';

const getClassName = cssModules(STYLES);

const formClassName = getClassName('bpkdocs-forms-page__form');

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <form className={formClassName}>
        <BpkLabel htmlFor="input">Input</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          id="input"
          name="input"
          value="Edinburgh"
          placeholder="Country, city or airport"
          onChange={() => null}
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="input_placeholder">Input (placeholder)</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          id="input_placeholder"
          name="input_placeholder"
          value=""
          placeholder="Country, city or airport"
          onChange={() => null}
        />
      </form>,
    ],
  },
  {
    id: 'disabled',
    title: 'Disabled',
    examples: [
      <form className={formClassName}>
        <BpkLabel disabled htmlFor="input_disabled">
          Input
        </BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          id="input_disabled"
          name="input_disabled"
          value="Edinburgh"
          placeholder="Country, city or airport"
          onChange={() => null}
          disabled
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel disabled htmlFor="input_placeholder_disabled">
          Input (placeholder)
        </BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          id="input_placeholder_disabled"
          name="input_placeholder_disabled"
          value=""
          placeholder="Country, city or airport"
          onChange={() => null}
          disabled
        />
      </form>,
    ],
  },
  {
    id: 'validation',
    title: 'Validation',
    examples: [
      <form className={formClassName}>
        <BpkLabel htmlFor="input_valid">Valid input</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          id="input_valid"
          name="input_valid"
          value="Edinburgh"
          placeholder="Country, city or airport"
          onChange={() => null}
          valid
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel valid={false} htmlFor="input_invalid">
          Invalid input
        </BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          id="input_invalid"
          name="input_invalid"
          value="Edinbrvgh"
          placeholder="Country, city or airport"
          onChange={() => null}
          valid={false}
        />
      </form>,
    ],
  },
  {
    id: 'clearable',
    title: 'Clearable',
    examples: [
      <form className={formClassName}>
        <BpkLabel htmlFor="input_clearable">Clearable while editing</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          id="input_clearable"
          name="input_clearable"
          value="Edinburgh"
          placeholder="Country, city or airport"
          onChange={() => null}
          clearButtonMode="whileEditing"
          onClear={() => null}
          clearButtonLabel="Clear field"
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="input_clearable_always">Always clearable</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          id="input_clearable_always"
          name="input_clearable_always"
          value="Edinburgh"
          placeholder="Country, city or airport"
          onChange={() => null}
          clearButtonMode="always"
          onClear={() => null}
          clearButtonLabel="Clear field"
        />
      </form>,
    ],
  },
  {
    id: 'inputTypes',
    title: 'Input types',
    examples: [
      <form className={formClassName}>
        <BpkLabel htmlFor="input_email">Email input</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          type={INPUT_TYPES.email}
          id="input_email"
          name="input_email"
          value="example@example.com"
          placeholder="Email address"
          onChange={() => null}
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="input_number">Number input</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          type={INPUT_TYPES.number}
          id="input_number"
          name="input_number"
          value="0"
          placeholder="Number of passengers"
          onChange={() => null}
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="input_password">Password input</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          type={INPUT_TYPES.password}
          id="input_password"
          name="input_password"
          value="letmein"
          placeholder="Password"
          onChange={() => null}
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="input_telephone">Telephone input</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          type={INPUT_TYPES.tel}
          id="input_telephone"
          name="input_telephone"
          value="+441234567890"
          placeholder="Phone number"
          onChange={() => null}
        />
      </form>,
    ],
  },
];

const blurb = [
  <IntroBlurb>
    Backpack selects override the default styles in most modern browsers. In
    some older browsers they simply fall back to the browser default.
  </IntroBlurb>,
];

const WebTextInputPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Input"
    sassdocId="forms-mixin-bpk-input"
    blurb={blurb}
    components={components}
    readme={readme}
    showMenu={false}
    {...rest}
  />
);

export default WebTextInputPage;
