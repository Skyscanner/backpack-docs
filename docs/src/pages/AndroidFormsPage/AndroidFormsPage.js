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

import readmeCheckbox from '../../../../backpack-android/docs/Checkbox/README.md';
import screenshotCheckboxDefault from '../../../../backpack-android/docs/Checkbox/screenshots/default.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Checkboxes',
    screenshots: [
      {
        title: 'Checkbox',
        width: 1080,
        height: 1920,
        src: `/${screenshotCheckboxDefault}`,
        altText: 'Android Checkbox Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeCheckboxPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Forms elements"
    components={components}
    readme={readmeCheckbox}
    {...rest}
  />
);

export default NativeCheckboxPage;
