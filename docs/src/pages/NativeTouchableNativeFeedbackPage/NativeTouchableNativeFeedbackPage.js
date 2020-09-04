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
import BpkLink from 'bpk-component-link';
import BpkText, { WEIGHT_STYLES } from 'bpk-component-text';
import BpkBlockquote from 'bpk-component-blockquote';

import readme from '../../../../backpack-react-native/lib/bpk-component-touchable-native-feedback/README.md';
import androidScreenshotDefault from '../../../../backpack-react-native/lib/bpk-component-touchable-native-feedback/screenshots/default.png';
import IntroBlurb from '../../components/IntroBlurb';
import { NativeComponentPage } from '../../components/ComponentPage';
import DocsPageWrapper from '../../components/DocsPageWrapper';

const touchableOverlay = '/components/native/touchable-overlay';
const RNTouchableNativeFeedback =
  'https://facebook.github.io/react-native/docs/touchablenativefeedback.html';

const components = [
  {
    id: 'touchablenativefeedback',
    title: 'Touchable native feedback',
    screenshots: [
      {
        title: 'Touchable native feedback',
        width: 750,
        height: 1334,
        src: `/${androidScreenshotDefault}`,
        altText: 'Backpack touchable native feedback component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const blurb = [
  <IntroBlurb>
    React Native&apos;s{' '}
    <BpkLink href={RNTouchableNativeFeedback} blank>
      Touchable Native Feedback{' '}
    </BpkLink>{' '}
    allows the use of <em>SelectableBackgroundBorderless</em> for the ripple
    effect. However, this is only supported only on Android API level 21 and
    higher. BpkTouchableNativeFeedback checks the API level first, to prevent
    your app from crashing on unsupported devices.
  </IntroBlurb>,
  <BpkBlockquote>
    <BpkText weight={WEIGHT_STYLES.bold}>Note:</BpkText> This component is
    Android only, for iOS please use the{' '}
    <BpkLink href={touchableOverlay} blank>
      BpkTouchableOverlay{' '}
    </BpkLink>{' '}
    component.
  </BpkBlockquote>,
];

const NativeTouchableNativeFeedbackSubPage = () => (
  <NativeComponentPage
    screenshots={components}
    readme={readme}
    githubPath="bpk-component-touchable-native-feedback"
  />
);

const NativeTouchableNativeFeedbackPage = () => (
  <DocsPageWrapper
    title="Touchable native feedback"
    blurb={blurb}
    nativeSubpage={<NativeTouchableNativeFeedbackSubPage />}
  />
);

export default NativeTouchableNativeFeedbackPage;
