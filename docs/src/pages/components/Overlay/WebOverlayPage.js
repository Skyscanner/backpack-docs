/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
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
import readme from 'bpk-component-overlay/README.md';
import BpkOverlay, {
  BORDER_RADIUS_STYLES,
  OVERLAY_TYPES,
} from 'bpk-component-overlay';
import BpkImage, {
  withLazyLoading,
  withLoadingBehavior,
  BORDER_RADIUS_STYLES as IMAGE_BORDER_RADIUS_STYLES,
} from 'bpk-component-image';
import BpkText, { TEXT_STYLES } from 'bpk-component-text';
import * as BREAKPOINTS from 'bpk-tokens/tokens/breakpoints.es6';
import { cssModules } from 'bpk-react-utils';

import { WebComponentPage } from '../../../components/ComponentPage';
import Paragraph from '../../../components/Paragraph';

import STYLES from './WebOverlayPage.scss';

const getClassNames = cssModules(STYLES);

const documentIfExists = typeof window !== 'undefined' ? document : null;
const FadingLazyLoadedImage = withLoadingBehavior(
  withLazyLoading(BpkImage, documentIfExists),
);

const imageSrc =
  'https://content.skyscnr.com/96508dbac15a2895b0147dc7e7f9ad30/canadian-rockies-canada.jpg';
const Image = ({ ...rest }) => (
  <FadingLazyLoadedImage
    altText="Lake"
    width={816}
    height={544}
    src={imageSrc}
    srcSet={`${imageSrc}?resize=320px:213px&quality=100 320w,
    ${imageSrc}?resize=640px:226px&quality=100 640w,
    ${imageSrc}?resize=1640px:1427px&quality=100 1640w,
    ${imageSrc}?resize=3200px:2133px&quality=100 3200w`}
    // If the viewport is wider than the desktop-breakpoint,
    // then the image will be 48rem wide. If the viewport
    // is wider than the tablet-breakpoint it will be 18rem
    // narrower than the viewport.
    // Otherwise, it will take up all but 4.5rem.
    sizes={`(min-width: ${BREAKPOINTS.breakpointDesktop}) 48rem,
    (min-width: ${BREAKPOINTS.breakpointTablet}) calc(100vw - 18rem),
    calc(100vw - 4.5rem)`}
    {...rest}
  />
);

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>Overlays apply a dark tint to their content.</Paragraph>,
    ],
    examples: [
      <BpkOverlay>
        <Image />
      </BpkOverlay>,
    ],
  },
  {
    id: 'no-tint',
    title: 'Disabled tint',
    blurb: [
      <Paragraph>
        The tint can be switched off, causing the content within to be displayed
        at full brightness.
      </Paragraph>,
    ],
    examples: [
      <BpkOverlay overlayType={OVERLAY_TYPES.none}>
        <Image />
      </BpkOverlay>,
    ],
  },
  {
    id: 'rounded-corners',
    title: 'Rounded corners',
    blurb: [
      <Paragraph>
        The overlay can have rounded corners. Apply this when the content inside
        has rounded corners, to stop the overlay from covering them up.
      </Paragraph>,
    ],
    examples: [
      <BpkOverlay borderRadiusStyle={BORDER_RADIUS_STYLES.sm}>
        <Image borderRadiusStyle={IMAGE_BORDER_RADIUS_STYLES.sm} />
      </BpkOverlay>,
    ],
  },
  {
    id: 'foreground-content',
    title: 'Foreground content',
    blurb: [
      <Paragraph>
        Use foreground content to display things on top of the overlay.
      </Paragraph>,
    ],
    examples: [
      <BpkOverlay
        foregroundContent={
          <div
            className={getClassNames('bpk-docs-web-overlay-page__foreground')}
          >
            <BpkText textStyle={TEXT_STYLES.xxl}>Visit Canada</BpkText>
          </div>
        }
      >
        <Image />
      </BpkOverlay>,
    ],
  },
];

const Page = () => (
  <WebComponentPage
    examples={components}
    readme={readme}
    packageName="bpk-component-overlay"
  />
);

export default Page;
