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
import BpkLabel from 'bpk-component-label';
import { cssModules } from 'bpk-react-utils';
import readme from 'bpk-component-form-validation/README.md';

import * as ROUTES from '../../constants/routes';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import BpkParagraph from '../../components/Paragraph';
import STYLES from '../FormsPage/forms-page.scss';

const getClassName = cssModules(STYLES);

const formClassName = getClassName('bpkdocs-forms-page__form');

const components = [
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
];

const blurb = [
  <BpkParagraph>
    Validation messages should be used to provide the user with specific
    feedback about an error with a particular form input field. They can be
    attached to <BpkLink href="#inputs">inputs</BpkLink>,{' '}
    <BpkLink href="#selects">selects</BpkLink> and{' '}
    <BpkLink href="#checkboxes">checkboxes</BpkLink>. They should either be
    displayed on form submit or on field blur. Have a look at the{' '}
    <BpkRouterLink to={ROUTES.FIELDSET}>fieldset</BpkRouterLink> component which
    composes labels, fields and validation messages accordingly.
  </BpkParagraph>,
];

const WebValidationPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Validation"
    sassdocId="forms-mixin-bpk-label"
    blurb={blurb}
    components={components}
    readme={readme}
    showMenu={false}
    {...rest}
  />
);

export default WebValidationPage;
