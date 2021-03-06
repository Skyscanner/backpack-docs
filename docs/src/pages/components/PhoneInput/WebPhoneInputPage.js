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

/* @flow strict */

import React, { Component } from 'react';
import BpkPhoneInput from 'bpk-component-phone-input';
import readme from 'bpk-component-phone-input/README.md';
import BpkImage from 'bpk-component-image';

import WebComponentPage from 'components/ComponentPage';

const DIALING_CODE_TO_ID_MAP = {
  '1_us': 'us',
  '1_ca': 'ca',
  '44_uk': 'uk',
  '55_br': 'br',
};

const getFlag = dialingCode => {
  const countryCode = DIALING_CODE_TO_ID_MAP[dialingCode];
  const url = `https://images.skyscnr.com/images/country/flag/header/${countryCode}.png`;
  return <BpkImage altText="Flag" aspectRatio={50 / 38} src={url} />;
};

type Props = {
  large: boolean,
};

type State = {
  dialingCode: string,
  value: string,
};

class StoryContainer extends Component<Props, State> {
  static defaultProps = {
    large: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = { dialingCode: '44_uk', value: '' };
  }

  onChange = evt => {
    this.setState({ value: evt.target.value });
  };

  onDialingCodeChange = evt => {
    this.setState({ dialingCode: evt.target.value });
  };

  render() {
    return (
      // $FlowFixMe[cannot-spread-inexact] - inexact rest. See 'https://github.com/Skyscanner/backpack/blob/main/decisions/flowfixme.md'.
      <BpkPhoneInput
        id="phone-input-id"
        name="Telephone input"
        label="Telephone number"
        large={this.props.large}
        onChange={this.onChange}
        onDialingCodeChange={this.onDialingCodeChange}
        value={this.state.value}
        dialingCode={this.state.dialingCode}
        dialingCodes={[
          { code: '1_us', description: '+1 (US)', numberPrefix: '+1' },
          { code: '1_ca', description: '+1 (CA)', numberPrefix: '+1' },
          { code: '44_uk', description: '+44 (UK)', numberPrefix: '+44' },
          { code: '55_br', description: '+55 (BR)', numberPrefix: '+55' },
        ]}
        dialingCodeProps={{
          id: 'dialing-code',
          name: 'Dialing code',
          label: 'Dialing code',
          'aria-label': 'Dialing code',
          image: getFlag(this.state.dialingCode),
        }}
        {...this.props}
      />
    );
  }
}

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [<StoryContainer />],
  },
  {
    id: 'large',
    title: 'Large',
    examples: [<StoryContainer large />],
  },
  {
    id: 'maskedInput',
    title: 'Masked input',
    examples: [<StoryContainer large dialingCodeMask />],
  },
];

const PhoneInputPage = () => (
  <WebComponentPage
    examples={components}
    readme={readme}
    packageName="bpk-component-phone-input"
  />
);

export default PhoneInputPage;
