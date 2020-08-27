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
import BpkText from 'bpk-component-text';
import { BpkContentBubble } from 'bpk-component-flare';
import flareReadme from 'bpk-component-flare/README.md';
import { cssModules } from 'bpk-react-utils';

import { WebComponentPage } from '../../components/ComponentPage';

import STYLES from './Flare.scss';

const getClassName = cssModules(STYLES);

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [],
    examples: [
      <div>
        <BpkContentBubble
          className={getClassName('bpk-docs-flare')}
          showPointer
          rounded={false}
          content={<BpkText textStyle="xxl">Hello World!</BpkText>}
        />
      </div>,
    ],
  },
];

const WebFlarePage = () => (
  <WebComponentPage examples={components} readme={flareReadme} />
);

export default WebFlarePage;
