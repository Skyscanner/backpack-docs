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
import { cssModules } from 'bpk-react-utils';
import readme from 'bpk-component-select/README.md';

import * as ROUTES from '../../../constants/routes';
import InputContainer from '../Forms/InputContainer';
import STYLES from '../Forms/forms-page.scss';

import { WebComponentPage } from 'components/ComponentPage';
import BpkParagraph from 'components/Paragraph';

const getClassName = cssModules(STYLES);

const formClassName = getClassName('bpkdocs-forms-page__form');

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <form className={formClassName}>
        <BpkLabel htmlFor="select_class">Class</BpkLabel>
        <InputContainer
          FormComponent={BpkSelect}
          id="select_class"
          name="select_class"
          value="economy"
          onChange={() => null}
        >
          <option value="economy">Economy</option>
          <option value="premium_economy">Premium Economy</option>
          <option value="business">Business class</option>
          <option value="first">First class</option>
        </InputContainer>
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="select_baggage">Baggage</BpkLabel>
        <InputContainer
          FormComponent={BpkSelect}
          id="select_baggage"
          name="select_baggage"
          value=""
          onChange={() => null}
        >
          <option value="" hidden>
            Please select...
          </option>
          <option value="15kg">15kg</option>
          <option value="22kg">22kg</option>
          <option value="35kg">35kg</option>
        </InputContainer>
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
        <InputContainer
          FormComponent={BpkSelect}
          id="select_class_disabled"
          name="select_class_disabled"
          value="economy"
          onChange={() => null}
          disabled
        >
          <option value="economy">Economy</option>
          <option value="premium_economy">Premium Economy</option>
          <option value="business">Business class</option>
          <option value="first">First class</option>
        </InputContainer>
      </form>,
      <form className={formClassName}>
        <BpkLabel disabled htmlFor="select_baggage_disabled">
          Baggage
        </BpkLabel>
        <InputContainer
          FormComponent={BpkSelect}
          id="select_baggage_disabled"
          name="select_baggage_disabled"
          value=""
          onChange={() => null}
          disabled
        >
          <option value="" hidden>
            Please select...
          </option>
          <option value="15kg">15kg</option>
          <option value="22kg">22kg</option>
          <option value="35kg">35kg</option>
        </InputContainer>
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
        <InputContainer
          FormComponent={BpkSelect}
          id="select_class_invalid"
          name="select_class_invalid"
          value="economy"
          onChange={() => null}
          valid={false}
        >
          <option value="economy">Economy</option>
          <option value="premium_economy">Premium Economy</option>
          <option value="business">Business class</option>
          <option value="first">First class</option>
        </InputContainer>
      </form>,
      <form className={formClassName}>
        <BpkLabel valid={false} htmlFor="select_baggage_invalid">
          Baggage
        </BpkLabel>
        <InputContainer
          FormComponent={BpkSelect}
          id="select_baggage_invalid"
          name="select_baggage_invalid"
          value=""
          onChange={() => null}
          valid={false}
        >
          <option value="" hidden>
            Please select...
          </option>
          <option value="15kg">15kg</option>
          <option value="22kg">22kg</option>
          <option value="35kg">35kg</option>
        </InputContainer>
      </form>,
    ],
  },
  {
    id: 'docked-inputs-and-selects',
    title: 'Docked selects',
    blurb: [
      <BpkParagraph>
        <BpkLink href={ROUTES.TEXT_INPUT}>
          Refer to the text-input page for information on how selects can be
          docked.
        </BpkLink>
      </BpkParagraph>,
    ],
  },
];

const WebSelectPage = () => (
  <WebComponentPage
    sassdocId="forms-mixin-bpk-select"
    examples={components}
    readme={readme}
    packageName="bpk-component-select"
  />
);

export default WebSelectPage;
