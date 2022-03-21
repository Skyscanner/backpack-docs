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
import BpkText, { WEIGHT_STYLES } from 'bpk-component-text';
import BpkBlockquote from 'bpk-component-blockquote';

import * as ROUTES from '../../../constants/routes';

import Native, {
  metadata as nativeMetadata,
} from './NativeTouchableOverlay.mdx';

import RouterLink from 'components/RouterLink';
import MarkdownPage from 'components/MarkdownPage';
import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';

const blurb = [
  <IntroBlurb>
    This component is a replacement for the default React Native Touchable
    Highlight component. The default Touchable Highlight component works by
    decreasing the opacity of the wrapped view to show an underlay colour. When
    views are nested within a Touchable Highlight wrapped view, their opacity is
    unchanged which produces an undesirable result. Have a look at the example
    below to see them both in action.
  </IntroBlurb>,
  <BpkBlockquote>
    <BpkText weight={WEIGHT_STYLES.bold}>Note:</BpkText> This component is iOS
    only, for Android please use{' '}
    <RouterLink to={ROUTES.TOUCHABLE_NATIVE_FEEDBACK}>
      BpkTouchableNativeFeedback
    </RouterLink>{' '}
    component.
  </BpkBlockquote>,
];

const NativeTouchableOverlayPage = () => (
  <DocsPageWrapper
    title="Touchable overlay"
    blurb={blurb}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
  />
);

export default NativeTouchableOverlayPage;
