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

import readme from '../../../../backpack-android/docs/InteractiveStarRating/README.md';
import screenshotDefault from '../../../../backpack-android/docs/InteractiveStarRating/screenshots/default.png';
import screenshotDefaultDm from '../../../../backpack-android/docs/InteractiveStarRating/screenshots/default_dm.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import Paragraph from '../../components/Paragraph';
import * as ROUTES from '../../constants/routes';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        An interactive version of{' '}
        <BpkLink href={ROUTES.STAR_RATING}>Star Rating</BpkLink>. These can be
        set at half star intervals.
      </Paragraph>,
    ],
    screenshots: [
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotDefault}`,
        altText: 'Android Interactive Star Rating Component',
        subText: '(Google Pixel emulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotDefaultDm}`,
        altText: 'Android Interactive Star Rating Component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
];

const AndroidStarRatingInteractivePage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Star rating interactive"
    components={components}
    readme={readme}
    {...rest}
  />
);

export default AndroidStarRatingInteractivePage;
