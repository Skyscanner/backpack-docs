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
import BpkSwitch, { SWITCH_TYPES } from 'bpk-component-switch';
import readme from 'bpk-component-switch/README.md';

import Paragraph from 'components/Paragraph';
import WebComponentPage from 'components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        The switch component uses a regular HTML checkbox behind the scenes to
        maintain semantic markup and good accessibility.
      </Paragraph>,
    ],
    examples: [
      <div>
        <BpkSwitch label="Show flexible fares" />
      </div>,
    ],
  },
  {
    id: 'event',
    title: 'Event',
    blurb: [
      <Paragraph>
        Reserved for event-based messaging that has neither a positive or
        negative connotation. Avoid using this in other contexts.
      </Paragraph>,
    ],
    examples: [
      <div>
        <BpkSwitch label="Show flexible fares" type={SWITCH_TYPES.event} />
      </div>,
    ],
  },
];

const WebSwitchPage = () => (
  <WebComponentPage
    examples={components}
    readme={readme}
    usageTable={{
      dos: [
        'Use for actions that cause immediate changes, for example toggling Wi-Fi on/off.',
      ],
      donts: [
        "Don't use for actions that have no immediate effect, like in a form. In that situation, use a checkbox.",
      ],
    }}
    packageName="bpk-component-switch"
  />
);

export default WebSwitchPage;
