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
import BpkTextarea from 'bpk-component-textarea';
import { cssModules } from 'bpk-react-utils';
import readme from 'bpk-component-textarea/README.md';

import * as ROUTES from '../../constants/routes';
import InputContainer from '../FormsPage/InputContainer';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import BpkParagraph from '../../components/Paragraph';
import STYLES from '../FormsPage/forms-page.scss';

const getClassName = cssModules(STYLES);

const formClassName = getClassName('bpkdocs-forms-page__form');

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

const loremIpsumLong = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate repellat assumenda
necessitatibus reiciendis, porro temporibus expedita excepturi! Nostrum pariatur odit porro, dolorem dignissimos
laudantium quis, tempore iste non, nam magnam.`;

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <form className={formClassName}>
        <BpkLabel htmlFor="textarea">Textarea</BpkLabel>
        <InputContainer
          FormComponent={BpkTextarea}
          id="textarea"
          name="textarea"
          value={loremIpsumLong}
          placeholder={loremIpsumLong}
          onChange={() => null}
        />
      </form>,
    ],
  },
  {
    id: 'empty',
    title: 'Empty',
    examples: [
      <form className={formClassName}>
        <BpkLabel htmlFor="textarea_placeholder">
          Textarea (placeholder)
        </BpkLabel>
        <InputContainer
          FormComponent={BpkTextarea}
          id="textarea_placeholder"
          name="textarea_placeholder"
          value=""
          placeholder={loremIpsum}
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
        <BpkLabel disabled htmlFor="textarea_disabled">
          Disabled textarea
        </BpkLabel>
        <InputContainer
          FormComponent={BpkTextarea}
          id="textarea_disabled"
          name="textarea_disabled"
          value=""
          placeholder={loremIpsum}
          onChange={() => null}
          disabled
        />
      </form>,
    ],
  },
  {
    id: 'invalid',
    title: 'Invalid',
    examples: [
      <form className={formClassName}>
        <BpkLabel valid={false} htmlFor="textarea_invalid">
          Invalid Textarea
        </BpkLabel>
        <InputContainer
          FormComponent={BpkTextarea}
          id="textarea_invalid"
          name="textarea_invalid"
          value="@ 123 {\ hi"
          placeholder="@ 123 {\ hi"
          onChange={() => null}
          valid={false}
        />
      </form>,
    ],
  },
];

const blurb = [
  <BpkParagraph>
    Textareas look almost identical to{' '}
    <BpkLink href={ROUTES.TEXT_INPUT}>inputs</BpkLink> except they allow long
    text to wrap across multiple lines.
  </BpkParagraph>,
];

const WebTextAreaPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Text area"
    sassdocId="forms-mixin-bpk-text-area"
    blurb={blurb}
    components={components}
    readme={readme}
    showMenu={false}
    {...rest}
  />
);

export default WebTextAreaPage;
