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
import PropTypes from 'prop-types';

import STYLES from './CookieBanner.scss';

import { cssModules } from 'backpack/packages/bpk-react-utils';
import BpkText, { WEIGHT_STYLES } from 'backpack/packages/bpk-component-text';
import BpkLink from 'backpack/packages/bpk-component-link';
import BpkButton from 'backpack/packages/bpk-component-button';

const getClassName = cssModules(STYLES);

const CookieBanner = ({ onAccept, onReject, visible, ...rest }) => {
  if (!visible) {
    return null;
  }

  return (
    <section className={getClassName('bpkdocs-cookie-banner')} {...rest}>
      <div className={getClassName('bpkdocs-cookie-banner__inner')}>
        <BpkText textStyle="xl" weight={WEIGHT_STYLES.black} tagName="h2">
          Your data. Your choice.
        </BpkText>
        <div className={getClassName('bpkdocs-cookie-banner__message-wrapper')}>
          <BpkText>
            Skyscanner uses Google Analytics on this site to help us analyse its
            use and improve our services. You can opt out by pressing
            &quot;reject&quot; or at any other time by using the{' '}
            <BpkLink
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
            >
              Analytics opt-out add-on.
            </BpkLink>
          </BpkText>
          <div className={getClassName('bpkdocs-cookie-banner__buttons')}>
            <BpkButton data-testid="accept-button" onClick={onAccept}>
              Accept
            </BpkButton>
            <BpkButton data-testid="reject-button" onClick={onReject} secondary>
              Reject
            </BpkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

CookieBanner.propTypes = {
  onReject: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default CookieBanner;
