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

import React from 'react';
import BpkLink from 'bpk-component-link';
import BpkSkipLink from 'bpk-component-skip-link';
import skipLinkReadme from 'bpk-component-skip-link/README.md';
import { cssModules } from 'bpk-react-utils';

import WebComponentPage from '../../../components/ComponentPage';
import Paragraph from '../../../components/Paragraph';

import STYLES from './skip-link-page.scss';

const getClassName = cssModules(STYLES);

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        Skip links benefit sighted keyboard or switch users by providing them
        with a way to skip over lengthy menus or filters. Skip links should be
        absolutely positioned to ensure that when they become visible they do
        not shift other content.
        <br />
        <br />
        It’s ok for a skip link to overlap other content on the page, as long as
        you are still able to tab forwards or backwards to that content. The
        skip link is very noticeable, and doesn’t disappear immediately. These
        are deliberate design decisions to ensure that a user tabbing quickly
        through the page won’t miss the skip link.
        <br />
        <br />
        For more information see this{' '}
        <BpkLink href="https://www.nomensa.com/blog/2004/what-are-skip-links">
          Nomensa blog about Skip Links
        </BpkLink>
        .
      </Paragraph>,
    ],
    examples: [
      <div className={null}>
        <BpkSkipLink
          className={getClassName('bpkdocs-skip-link-page__skip-link')}
          href="#readme"
          label="Skip to readme"
        />
        <Paragraph>Tab to this area to see the skip-link in action.</Paragraph>
      </div>,
    ],
  },
];

const SkipLinksPage = () => (
  <WebComponentPage
    examples={components}
    readme={skipLinkReadme}
    packageName="bpk-component-skip-link"
  />
);

export default SkipLinksPage;
