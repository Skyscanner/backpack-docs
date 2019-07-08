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
import BpkRouterLink from 'bpk-component-router-link';
import { BpkList, BpkListItem } from 'bpk-component-list';

import readme from '../../../../backpack-android/docs/THEMING.md';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import Paragraph from '../../components/Paragraph';
import {
  BUTTON,
  CALENDAR,
  CHECKBOX,
  CHIP,
  FLOATING_ACTION_BUTTON,
  HORIZONTAL_NAV,
  LINK,
  SPINNER,
  STAR_RATING,
  STAR_RATING_INTERACTIVE,
  TEXT,
  SWITCH,
  TEXT_SPANS,
  TOAST,
} from '../../constants/routes';

const components = [];

const blurb = [
  <Paragraph>The following Android components are themeable:</Paragraph>,
  <BpkList>
    <BpkListItem>
      <BpkRouterLink to={BUTTON}>Button</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={CALENDAR}>Calendar</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={CHECKBOX}>Checkbox</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={CHIP}>Chip</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={FLOATING_ACTION_BUTTON}>
        Floating Action Button
      </BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={HORIZONTAL_NAV}>Horizontal navigation</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={LINK}>Link</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={SPINNER}>Spinner</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={STAR_RATING}>Star rating</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={STAR_RATING_INTERACTIVE}>
        Star rating interactive
      </BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={SWITCH}>Switch</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={TEXT}>Text</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={TEXT_SPANS}>Text spans</BpkRouterLink>
    </BpkListItem>
    <BpkListItem>
      <BpkRouterLink to={TOAST}>Toast</BpkRouterLink>
    </BpkListItem>
  </BpkList>,
];

const AndroidTextPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Theming"
    blurb={blurb}
    components={components}
    readme={readme}
    androidDocId="net.skyscanner.backpack.theming"
    showMenu
    {...rest}
  />
);

export default AndroidTextPage;
