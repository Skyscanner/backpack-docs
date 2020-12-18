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

import ComponentScreenshots from './ComponentScreenshots';

type Props = {
  iOS: string,
  android: string,
  iOSAltText: string,
  androidAltText: string,
};

const aspectRatios = {
  // Dimensions of Google Pixel 1.
  // https://en.wikipedia.org/wiki/Pixel_(1st_generation)
  android: 1080 / 1920,

  // Dimensions of iPhone 8.
  // https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
  ios: 750 / 1334,
};

const NativeComponentScreenshots = (props: Props) => {
  const { iOS, android, iOSAltText, androidAltText } = props;

  return (
    <ComponentScreenshots
      screenshots={[
        {
          aspectRatio: aspectRatios.ios,
          src: `/${iOS}`,
          altText: iOSAltText,
          subText: '(iPhone 8 simulator)',
        },
        {
          aspectRatio: aspectRatios.android,
          src: `/${android}`,
          altText: androidAltText,
          subText: '(Google Pixel emulator)',
        },
      ]}
    />
  );
};

export default NativeComponentScreenshots;
