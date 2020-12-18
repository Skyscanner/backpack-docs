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
import BpkLink, { BpkButtonLink } from 'bpk-component-link';
import linkReadme from 'bpk-component-link/README.md';
import { cssModules } from 'bpk-react-utils';

import STYLES from './LinksPage.scss';

import WebComponentPage from 'components/ComponentPage';
import Paragraph from 'components/Paragraph';

const getClassName = cssModules(STYLES);

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <Paragraph>
        Links can be both <BpkLink href="#">anchor tags</BpkLink> as well as{' '}
        <BpkButtonLink onClick={() => null}>button tags</BpkButtonLink>.
      </Paragraph>,
    ],
  },
  {
    id: 'alternate',
    title: 'Alternate',
    dark: true,
    examples: [
      <Paragraph className={getClassName('bpk-docs-links-examples__paragraph')}>
        Links can be both{' '}
        <BpkLink href="#" alternate>
          anchor tags
        </BpkLink>{' '}
        as well as{' '}
        <BpkButtonLink onClick={() => null} alternate>
          button tags
        </BpkButtonLink>
        .
      </Paragraph>,
    ],
  },
];

const LinkPage = () => (
  <WebComponentPage
    readme={linkReadme}
    examples={components}
    packageName="bpk-component-link"
  />
);

export default LinkPage;
