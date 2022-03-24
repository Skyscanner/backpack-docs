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

import * as ROUTES from '../../../constants/routes';

import Native, {
  metadata as nativeMetadata,
} from './NativeTouchableNativeFeedback.mdx';

import BpkLink from 'backpack/packages/bpk-component-link';
import BpkText, { WEIGHT_STYLES } from 'backpack/packages/bpk-component-text';
import BpkBlockquote from 'backpack/packages/bpk-component-blockquote';
import RouterLink from 'components/RouterLink';
import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';
import MarkdownPage from 'components/MarkdownPage';

const RNTouchableNativeFeedback =
  'https://facebook.github.io/react-native/docs/touchablenativefeedback.html';

const blurb = [
  <IntroBlurb>
    React Native&apos;s{' '}
    <BpkLink href={RNTouchableNativeFeedback} blank>
      Touchable Native Feedback
    </BpkLink>{' '}
    allows the use of <em>SelectableBackgroundBorderless</em> for the ripple
    effect. However, this is only supported only on Android API level 21 and
    higher. BpkTouchableNativeFeedback checks the API level first, to prevent
    your app from crashing on unsupported devices.
  </IntroBlurb>,
  <BpkBlockquote>
    <BpkText weight={WEIGHT_STYLES.bold}>Note:</BpkText> This component is
    Android only, for iOS please use the{' '}
    <RouterLink to={ROUTES.TOUCHABLE_OVERLAY}>BpkTouchableOverlay </RouterLink>{' '}
    component.
  </BpkBlockquote>,
];

const NativeTouchableNativeFeedbackPage = () => (
  <DocsPageWrapper
    title="Touchable native feedback"
    blurb={blurb}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
  />
);

export default NativeTouchableNativeFeedbackPage;
