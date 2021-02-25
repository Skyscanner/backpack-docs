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
    usageTable={{
      dos: [
        'Each link on a page should clearly describe where it will take you if you choose to follow it. E.g. "Skyscanner privacy policy."',
        'If a link contains an element such as an icon you should ensure it has suitable alt text for assistive technologies.',
        'If links open in a new window, users of assitive technologies should be informed of this by applying the appropriate aria-label which includes the text and the action. E.g. The aria-label could be "Skyscanner privacy policy, opens in a new tab".',
        'If a link contains a document ensure users are aware of this (type and size of file), this can either be provided in the link text itself or using an aria-label the contains the link name, type and size. E.g. "Booking confirmation (pdf, 1KB)".',
        'CSS can be used to hide text to hide a portion of the link text to provide more information to users of screen readers.',
        'Assigning aria-describedby and an ID can be used to associate text that is already present on the page with the link.',
      ],
      donts: [
        "Don't use an aria-label if the link is already completely satisfactory. aria-label should be used as a last resort.",
      ],
    }}
  />
);

export default LinkPage;
