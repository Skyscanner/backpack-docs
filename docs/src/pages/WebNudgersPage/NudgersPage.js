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

import React, { Component } from 'react';
import BpkNudger from 'bpk-component-nudger';
import nudgersReadme from 'bpk-component-nudger/README.md';

import DocsPageBuilder from '../../components/DocsPageBuilder';
import Paragraph from '../../components/Paragraph';

class NudgerContainer extends Component<{ buttonType: ?string }, {}> {
  constructor() {
    super();

    this.state = {
      value: 2,
    };
  }

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { buttonType } = this.props;
    return (
      <BpkNudger
        id="my-nudger"
        min={1}
        max={10}
        value={this.state.value}
        onChange={this.handleChange}
        decreaseButtonLabel="Decrease"
        increaseButtonLabel="Increase"
        buttonType={buttonType}
      />
    );
  }
}

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        Nudgers come with decrease and increase buttons on either side of the
        selected value. A minimum and maximum value need to be provided.
      </Paragraph>,
    ],
    examples: [<NudgerContainer />],
  },
  {
    id: 'outline',
    title: 'Outline',
    blurb: [
      <Paragraph>
        Outline version allows for the nudger to be used on dark backgrounds.
      </Paragraph>,
    ],
    dark: true,
    examples: [<NudgerContainer buttonType="outline" />],
  },
];

const NudgersPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Nudgers"
    components={components}
    readme={nudgersReadme}
    {...rest}
  />
);

export default NudgersPage;
