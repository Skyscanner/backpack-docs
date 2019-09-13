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
import BpkLabel from 'bpk-component-label';
import BpkSelect from 'bpk-component-select';
import BpkCheckbox from 'bpk-component-checkbox';
import BpkTextarea from 'bpk-component-textarea';
import BpkRouterLink from 'bpk-component-router-link';
import BpkInput from 'bpk-component-input';
import BpkFormValidation from 'bpk-component-form-validation';
import { cssModules } from 'bpk-react-utils';
import labelReadme from 'bpk-component-label/README.md';
import validationReadme from 'bpk-component-form-validation/README.md';

import * as ROUTES from '../../constants/routes';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import DocsPageWrapper from '../../components/DocsPageWrapper';
import BpkParagraph from '../../components/Paragraph';
import IntroBlurb from '../../components/IntroBlurb';

import InputContainer from './InputContainer';
import STYLES from './forms-page.scss';

const getClassName = cssModules(STYLES);

const formClassName = getClassName('bpkdocs-forms-page__form');

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
        Labels should always be used with form elements to provide context to
        the user. Relying on placeholders alone is not good practise. Have a
        look at the <BpkRouterLink to={ROUTES.FIELDSET}>fieldset</BpkRouterLink>{' '}
        component which composes labels, fields and validation messages
        accordingly.
      </BpkParagraph>,
    ],
    examples: [
      <BpkLabel>This is a label</BpkLabel>,
      <BpkLabel required>This is a required label</BpkLabel>,
      <BpkLabel disabled>This is a disabled label</BpkLabel>,
      <BpkLabel valid={false}>This is an invalid label</BpkLabel>,
    ],
    readme: labelReadme,
  },
  {
    id: 'validation',
    title: 'Validation',
    blurb: [
      <BpkParagraph>
        Validation messages should be used to provide the user with specific
        feedback about an error with a particular form input field. They can be
        attached to <BpkLink href="#inputs">inputs</BpkLink>,{' '}
        <BpkLink href="#selects">selects</BpkLink> and{' '}
        <BpkLink href="#checkboxes">checkboxes</BpkLink>. They should either be
        displayed on form submit or on field blur. Have a look at the{' '}
        <BpkRouterLink to={ROUTES.FIELDSET}>fieldset</BpkRouterLink> component
        which composes labels, fields and validation messages accordingly.
      </BpkParagraph>,
    ],
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
    readme: validationReadme,
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
