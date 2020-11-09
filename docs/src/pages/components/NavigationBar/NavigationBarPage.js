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

import DocsPageWrapper from '../../../components/DocsPageWrapper';
import IntroBlurb from '../../../components/IntroBlurb';

import WebNavigation from './WebNavigationBarPage';
import AndroidNavBarPage from './AndroidNavBarPage';
import NativeNavigation from './NativeNavigationBarPage';
import IOSNavigationBarPage from './IOSNavigationBarPage';

const BadgePage = () => (
  <DocsPageWrapper
    title="Navigation bar"
    blurb={[
      <IntroBlurb>
        The navigation bar component encapsulates a title and icon/text actions
        for controlling views.
      </IntroBlurb>,
    ]}
    iosSubpage={<IOSNavigationBarPage wrapped />}
    androidSubpage={<AndroidNavBarPage wrapped />}
    nativeSubpage={<NativeNavigation wrapped />}
    webSubpage={<WebNavigation wrapped />}
  />
);

export default BadgePage;
