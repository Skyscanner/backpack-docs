/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2021 Skyscanner Ltd
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

import React, { useEffect, useState } from 'react';
import BpkText from 'bpk-component-text';
import { cssModules } from 'bpk-react-utils';

import STYLES from './reset-analytics.scss';

const getClassName = cssModules(STYLES);

const ResetAnalyticsPage = () => {
  const [resetComplete, setResetComplete] = useState(false);

  useEffect(() => {
    window.localStorage.removeItem('BPK_DOCS_accept-cookies');
    setResetComplete(true);
  }, []);

  return (
    <div className={getClassName('bpkdocs-reset-analytics__container')}>
      {!resetComplete && (
        <BpkText tagName="p" textStyle="lg">
          Resetting
        </BpkText>
      )}
      {resetComplete && (
        <>
          <BpkText tagName="p" textStyle="lg">
            Reset successful! Taking you back home in 3 seconds.
          </BpkText>
          <meta httpEquiv="refresh" content="3; url='/'" />
        </>
      )}
    </div>
  );
};

export default ResetAnalyticsPage;
