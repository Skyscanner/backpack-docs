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

import DocsPageWrapper from '../../components/DocsPageWrapper';
import IntroBlurb from '../../components/IntroBlurb';
import Web from '../WebStarRatingPage';
import Android from '../AndroidStarRatingPage';

import Native from './NativeStarRatingPage';
import IOS from './IOSStarRatingPage';

const Page = () => (
  <DocsPageWrapper
    title="Star Rating"
    blurb={[
      <IntroBlurb>
        Star Ratings are used for displaying a score within a given range.
      </IntroBlurb>,
    ]}
    webSubpage={<Web wrapped />}
    nativeSubpage={<Native wrapped />}
    androidSubpage={<Android wrapped />}
    iosSubpage={<IOS wrapped />}
  />
);

export default Page;
