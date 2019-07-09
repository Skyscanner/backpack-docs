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
import BpkSelect from 'bpk-component-select';
import { cssModules } from 'bpk-react-utils';
import readme from 'bpk-component-select/README.md';

import InputContainer from '../FormsPage/InputContainer';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import IntroBlurb from '../../components/IntroBlurb';
import STYLES from '../FormsPage/forms-page.scss';

const getClassName = cssModules(STYLES);

const formClassName = getClassName('bpkdocs-forms-page__form');

const components = [
  {
    id: 'selects',
    title: 'Selects (aka dropdowns)',
    examples: [
      <form className={formClassName}>
        <BpkLabel htmlFor="select">Select</BpkLabel>
        <InputContainer
          FormComponent={BpkSelect}
          id="select"
          name="select"
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
        <BpkLabel htmlFor="select_invalid">Invalid select</BpkLabel>
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
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="select_disabled" disabled>
          Disabled select
        </BpkLabel>
        <InputContainer
          FormComponent={BpkSelect}
          id="select_disabled"
          name="select_disabled"
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
    ],
  },
];

const blurb = [
  <IntroBlurb>
    Backpack selects override the default styles in most modern browsers. In
    some older browsers they simply fall back to the browser default.
  </IntroBlurb>,
];

const WebSelectPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Select"
    sassdocId="forms-mixin-bpk-select"
    blurb={blurb}
    components={components}
    readme={readme}
    showMenu={false}
    {...rest}
  />
);

export default WebSelectPage;
