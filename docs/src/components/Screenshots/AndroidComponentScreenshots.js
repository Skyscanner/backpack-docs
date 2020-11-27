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

import ComponentScreenshots from '../DocsPageBuilder/ComponentScreenshots';

type Props = {
  lightMode: string,
  darkMode: string,
  altText: String,
};

/* eslint-disable backpack/use-tokens */
const dimensions = {
  width: 1080,
  height: 1920,
};
/* eslint-enable */

const AndroidComponentScreenshots = (props: Props) => {
  const { lightMode, darkMode, altText } = props;

  return (
    <ComponentScreenshots
      screenshots={[
        {
          ...dimensions,
          src: `/${lightMode}`,
          altText,
          subText: '(Google Pixel emulator)',
        },
        {
          ...dimensions,
          src: `/${darkMode}`,
          altText,
          subText: '(Google Pixel emulator - dark mode)',
        },
      ]}
    />
  );
};

export default AndroidComponentScreenshots;
