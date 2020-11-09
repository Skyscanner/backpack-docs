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
import BpkSelect from 'bpk-component-select';
import BpkBannerAlert, { ALERT_TYPES } from 'bpk-component-banner-alert';
import BpkTextarea from 'bpk-component-textarea';
import { cssModules } from 'bpk-react-utils';
import readme from 'bpk-component-input/README.md';
import textareaReadme from 'bpk-component-textarea/README.md';

import InputContainer from '../Forms/InputContainer';
import { WebComponentPage } from '../../../components/ComponentPage';
import BpkParagraph from '../../../components/Paragraph';
import STYLES from '../Forms/forms-page.scss';

const getClassName = cssModules(STYLES);

const formClassName = getClassName('bpkdocs-forms-page__form');
const placeClassName = getClassName('bpkdocs-forms-page__place');
const dateClassName = getClassName('bpkdocs-forms-page__date');
const numberClassName = getClassName('bpkdocs-forms-page__number');
const timeClassName = getClassName('bpkdocs-forms-page__time');
const destinationClassName = getClassName(
  'bpkdocs-forms-page__hotels-destination',
);
const pickupClassName = getClassName(
  'bpkdocs-forms-page__car-hire-pickup-location',
);
const containerClassName = [
  'bpkdocs-forms-page__form',
  'bpkdocs-forms-page__form--desktop-only',
]
  .map(getClassName)
  .join(' ');

const loremIpsumLong = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate repellat assumenda
necessitatibus reiciendis, porro temporibus expedita excepturi! Nostrum pariatur odit porro, dolorem dignissimos
laudantium quis, tempore iste non, nam magnam.`;

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
          onChange={() => null}
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="input_placeholder">
          Search (with placeholder)
        </BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          id="input_placeholder"
          name="input_placeholder"
          value=""
          placeholder="Search"
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
          onChange={() => null}
          disabled
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel disabled htmlFor="input_placeholder_disabled">
          Search (with placeholder)
        </BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          id="input_placeholder_disabled"
          name="input_placeholder_disabled"
          value=""
          placeholder="Search"
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
        <BpkLabel htmlFor="input_email">Email</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          type={INPUT_TYPES.email}
          id="input_email"
          name="input_email"
          value="example@example.com"
          onChange={() => null}
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="input_number">Number of passengers</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          type={INPUT_TYPES.number}
          id="input_number"
          name="input_number"
          value="0"
          onChange={() => null}
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="input_password">Password</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          type={INPUT_TYPES.password}
          id="input_password"
          name="input_password"
          value="letmein"
          onChange={() => null}
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel htmlFor="input_telephone">Telephone</BpkLabel>
        <InputContainer
          FormComponent={BpkInput}
          type={INPUT_TYPES.tel}
          id="input_telephone"
          name="input_telephone"
          value="+441234567890"
          onChange={() => null}
        />
      </form>,
    ],
  },
  {
    id: 'dockedInputs',
    title: 'Docked inputs',
    examples: [
      <div className={getClassName('bpkdocs-forms-page__viewport-alert')}>
        <BpkBannerAlert
          type={ALERT_TYPES.WARN}
          message="These are only suitable for larger viewports - try viewing on a desktop device."
        />
      </div>,
      <form className={containerClassName}>
        <div>
          <BpkLabel htmlFor="input_origin" className={placeClassName}>
            From
          </BpkLabel>
          <BpkLabel htmlFor="input_destination" className={placeClassName}>
            To
          </BpkLabel>
          <BpkLabel htmlFor="input_outbound" className={dateClassName}>
            Departure date
          </BpkLabel>
          <BpkLabel htmlFor="input_inbound" className={dateClassName}>
            Return date
          </BpkLabel>
        </div>
        <div>
          <InputContainer
            FormComponent={BpkInput}
            id="input_origin"
            name="input_origin"
            value="Edinburgh"
            onChange={() => null}
            className={placeClassName}
            dockedFirst
            large
          />
          <InputContainer
            FormComponent={BpkInput}
            id="input_destination"
            name="input_destination"
            value=""
            onChange={() => null}
            className={placeClassName}
            dockedMiddle
            large
          />
          <InputContainer
            FormComponent={BpkInput}
            id="input_outbound"
            name="input_outbound"
            value={new Date().toLocaleDateString()}
            onChange={() => null}
            className={dateClassName}
            dockedMiddle
            large
          />
          <InputContainer
            FormComponent={BpkInput}
            id="input_inbound"
            name="input_inbound"
            value={new Date(
              new Date().getTime() + 24 * 60 * 60 * 1000,
            ).toLocaleDateString()}
            onChange={() => null}
            className={dateClassName}
            dockedLast
            large
          />
        </div>
      </form>,
      <form className={containerClassName}>
        <div>
          <BpkLabel
            htmlFor="input_hotels_destination"
            className={destinationClassName}
          >
            Destination or hotel name
          </BpkLabel>
          <BpkLabel htmlFor="input_checkin" className={dateClassName}>
            Check-in
          </BpkLabel>
          <BpkLabel htmlFor="input_checkout" className={dateClassName}>
            Check-out
          </BpkLabel>
          <BpkLabel htmlFor="input_guests" className={numberClassName}>
            Guests
          </BpkLabel>
          <BpkLabel htmlFor="input_rooms" className={numberClassName}>
            Rooms
          </BpkLabel>
        </div>
        <div>
          <InputContainer
            FormComponent={BpkInput}
            id="input_hotels_destination"
            name="input_hotels_destination"
            value=""
            onChange={() => null}
            className={destinationClassName}
            dockedFirst
            large
          />
          <InputContainer
            FormComponent={BpkInput}
            id="input_checkin"
            name="input_checkin"
            value={new Date().toLocaleDateString()}
            onChange={() => null}
            className={dateClassName}
            dockedMiddle
            large
          />
          <InputContainer
            FormComponent={BpkInput}
            id="input_checkout"
            name="input_checkout"
            value={new Date(
              new Date().getTime() + 24 * 60 * 60 * 1000,
            ).toLocaleDateString()}
            onChange={() => null}
            className={dateClassName}
            dockedMiddle
            large
          />
          <InputContainer
            FormComponent={BpkSelect}
            id="input_guests"
            name="input_guests"
            value="2"
            onChange={() => null}
            className={numberClassName}
            dockedMiddle
            large
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </InputContainer>
          <InputContainer
            FormComponent={BpkSelect}
            id="input_rooms"
            name="input_rooms"
            value="1"
            onChange={() => null}
            className={numberClassName}
            dockedLast
            large
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </InputContainer>
        </div>
      </form>,
      <form className={containerClassName}>
        <div>
          <BpkLabel htmlFor="input_pickup_location" className={pickupClassName}>
            Pick-up location
          </BpkLabel>
          <BpkLabel htmlFor="input_pickup_date" className={dateClassName}>
            Pick-up date
          </BpkLabel>
          <BpkLabel htmlFor="input_pickup_time" className={timeClassName}>
            Pick-up time
          </BpkLabel>
          <BpkLabel htmlFor="input_dropoff_date" className={dateClassName}>
            Drop-off date
          </BpkLabel>
          <BpkLabel htmlFor="input_dropoff_time" className={timeClassName}>
            Drop-off time
          </BpkLabel>
        </div>
        <div>
          <InputContainer
            FormComponent={BpkInput}
            id="input_pickup_location"
            name="input_pickup_location"
            value=""
            onChange={() => null}
            className={pickupClassName}
            dockedFirst
            large
          />
          <InputContainer
            FormComponent={BpkInput}
            id="input_pickup_date"
            name="input_pickup_date"
            value={new Date().toLocaleDateString()}
            onChange={() => null}
            className={dateClassName}
            dockedMiddle
            large
          />
          <InputContainer
            FormComponent={BpkSelect}
            id="input_pickup_time"
            name="input_pickup_time"
            value="10:00"
            onChange={() => null}
            className={timeClassName}
            dockedMiddle
            large
          >
            <option value="10:00">10:00</option>
            <option value="10:15">10:15</option>
            <option value="10:30">10:30</option>
            <option value="10:45">10:45</option>
          </InputContainer>
          <InputContainer
            FormComponent={BpkInput}
            id="input_dropoff_date"
            name="input_dropoff_date"
            value={new Date(
              new Date().getTime() + 24 * 60 * 60 * 1000,
            ).toLocaleDateString()}
            onChange={() => null}
            className={dateClassName}
            dockedMiddle
            large
          />
          <InputContainer
            FormComponent={BpkSelect}
            id="input_dropoff_time"
            name="input_dropoff_time"
            value="10:00"
            onChange={() => null}
            className={timeClassName}
            dockedLast
            large
          >
            <option value="10:00">10:00</option>
            <option value="10:15">10:15</option>
            <option value="10:30">10:30</option>
            <option value="10:45">10:45</option>
          </InputContainer>
        </div>
      </form>,
    ],
  },
  {
    id: 'text-area',
    title: 'Multiline text input',
    content: [
      <BpkParagraph>
        Textareas allow long text to wrap across multiple lines.
      </BpkParagraph>,
    ],
    examples: [
      <form className={formClassName}>
        <BpkLabel htmlFor="textarea">Textarea</BpkLabel>
        <InputContainer
          FormComponent={BpkTextarea}
          id="textarea"
          name="textarea"
          value={loremIpsumLong}
          onChange={() => null}
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel disabled htmlFor="textarea_disabled">
          Disabled textarea
        </BpkLabel>
        <InputContainer
          FormComponent={BpkTextarea}
          id="textarea_disabled"
          name="textarea_disabled"
          value=""
          onChange={() => null}
          disabled
        />
      </form>,
      <form className={formClassName}>
        <BpkLabel valid={false} htmlFor="textarea_invalid">
          Invalid Textarea
        </BpkLabel>
        <InputContainer
          FormComponent={BpkTextarea}
          id="textarea_invalid"
          name="textarea_invalid"
          value="@ 123 {\ hi"
          onChange={() => null}
          valid={false}
        />
      </form>,
    ],
  },
];

const inputsUsageTable = {
  dos: [
    'Ensure every input has an associated label (for standalone search fields, it’s ok for this to be visually hidden).',
    'Provide hint text (persistent, outside the field) if the traveller requires additional information in order to enter data correctly. For example, “DD/MM/YYYY”.',
  ],
  donts: [
    'Use a placeholder instead of a label.',
    'Use a placeholder instead of a hint.',
    'Use a placeholder unless the field is a properly labelled search field.',
  ],
};

const WebTextInputPage = () => (
  <WebComponentPage
    usageTable={inputsUsageTable}
    sassdocId="forms-mixin-bpk-input"
    examples={components}
    readme={readme + textareaReadme}
    packageName="bpk-component-input"
  />
);

export default WebTextInputPage;
