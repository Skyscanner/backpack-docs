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

import readme from '../../../../backpack-ios/Backpack/Dialog/README.md';
import screenshotAlert from '../../../../backpack-ios/screenshots/iPhone 8-dialog___with-cta_lm.png';
import screenshotBottomSheet from '../../../../backpack-ios/screenshots/iPhone 8-dialog___delete-confirmation_lm.png';
import screenshotWithFlare from '../../../../backpack-ios/screenshots/iPhone 8-dialog___in-app-messaging_lm.png';
import screenshotAlertDm from '../../../../backpack-ios/screenshots/iPhone 8-dialog___with-cta_dm.png';
import screenshotBottomSheetDm from '../../../../backpack-ios/screenshots/iPhone 8-dialog___delete-confirmation_dm.png';
import screenshotWithFlareDm from '../../../../backpack-ios/screenshots/iPhone 8-dialog___in-app-messaging_dm.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'alert',
    title: 'Alert',
    blurb:
      'Alert dialogs fade in to the centre of the screen and can contain zero or more buttons.',
    screenshots: [
      {
        title: 'Used as a call to action.',
        width: 750,
        height: 1334,
        src: `/${screenshotAlert}`,
        altText: 'Alert dialog with a call to action.',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Used as a call to action.',
        width: 750,
        height: 1334,
        src: `/${screenshotAlertDm}`,
        altText: 'Alert dialog with a call to action.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'bottom-sheet',
    title: 'Bottom sheet',
    blurb:
      'Bottom sheet dialogs slide up from the bottom of the screen and can contain zero or more buttons.',
    screenshots: [
      {
        title: 'Used for confirmation.',
        width: 750,
        height: 1334,
        src: `/${screenshotBottomSheet}`,
        altText: 'Bottom sheet dialog used for confirmation.',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Used for confirmation.',
        width: 750,
        height: 1334,
        src: `/${screenshotBottomSheetDm}`,
        altText: 'Bottom sheet dialog used for confirmation.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
  {
    id: 'flare-view',
    title: 'Flare view',
    blurb: 'A dialog can be passed a BPKFlareView to show at the top.',
    screenshots: [
      {
        title: 'With flare view.',
        width: 750,
        height: 1334,
        src: `/${screenshotWithFlare}`,
        altText: 'Dialog with a BPKFlareView.',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'With flare view.',
        width: 750,
        height: 1334,
        src: `/${screenshotWithFlareDm}`,
        altText: 'Dialog with a BPKFlareView.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSDialogPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Dialog"
    components={components}
    readme={readme}
    iosDocId="BPKDialogController"
    showMenu
    {...rest}
  />
);

export default IOSDialogPage;
