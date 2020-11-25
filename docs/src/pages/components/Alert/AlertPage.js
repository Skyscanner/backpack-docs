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

import NativeAlertPage from './NativeAlertPage';

import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';

const AlertPage = () => (
  <DocsPageWrapper
    title="Alert"
    blurb={[
      <IntroBlurb>
        Alerts are used to provide the user with a choice of actions. On Android
        the button colours can be changed by modifying the
        &apos;colorAccent&apos; property of the theme.
      </IntroBlurb>,
    ]}
    nativeSubpage={<NativeAlertPage />}
  />
);

export default AlertPage;
