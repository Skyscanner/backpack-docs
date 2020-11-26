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

/* eslint-disable backpack/use-tokens */

import React from 'react';

import ComponentScreenshots from '../DocsPageBuilder/ComponentScreenshots';

type Props = {
  iOS: string,
  android: string,
  iOSAltText: string,
  androidAltText: string,
};

const NativeComponentScreenshots = (props: Props) => {
  const { iOS, android, iOSAltText, androidAltText } = props;

  return (
    <ComponentScreenshots
      screenshots={[
        {
          width: 750,
          height: 1334,
          src: `/${iOS}`,
          altText: iOSAltText,
          subText: '(iPhone 8 simulator)',
        },
        {
          width: 1080,
          height: 1920,
          src: `/${android}`,
          altText: androidAltText,
          subText: '(Google Pixel emulator)',
        },
      ]}
    />
  );
};

export default NativeComponentScreenshots;
