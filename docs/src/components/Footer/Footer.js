/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
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

import {
  lineHeightSm,
  iconSizeSm,
} from '@skyscanner/bpk-foundations-web/tokens/base.es6';

import STYLES from './Footer.scss';

import { cssModules } from 'backpack/packages/bpk-react-utils';
import BpkRtlToggle from 'backpack/packages/bpk-component-rtl-toggle';
import BpkGridToggle from 'backpack/packages/bpk-component-grid-toggle';
import BpkThemeToggle from 'backpack/packages/bpk-component-theme-toggle';
import BpkHeartIcon from 'backpack/packages/bpk-component-icon/sm/heart';
import {
  withAlignment,
  withDescription,
} from 'backpack/packages/bpk-component-icon';
import BpkLink from 'backpack/packages/bpk-component-link';

const getClassName = cssModules(STYLES);

const AlignedHeart = withDescription(
  withAlignment(BpkHeartIcon, lineHeightSm, iconSizeSm),
  'love',
);

const Footer = () => (
  <div className={getClassName('bpkdocs-footer__wrapper')}>
    <div className={getClassName('bpkdocs-footer__inner')}>
      <span className={getClassName('bpkdocs-footer__copyright')}>
        Made with{' '}
        <AlignedHeart className={getClassName('bpkdocs-footer__heart')} /> by{' '}
        <BpkLink href="https://www.skyscanner.net" blank>
          Skyscanner
        </BpkLink>{' '}
        &copy; {new Date().getFullYear()}
      </span>
      <div className={getClassName('bpkdocs-footer__controls')}>
        <div>
          <BpkGridToggle />
          &nbsp;|&nbsp;
          <BpkRtlToggle />
        </div>
        <BpkThemeToggle
          className={getClassName('bpkdocs-footer__theme-switcher')}
        />
      </div>
    </div>
  </div>
);

export default Footer;
