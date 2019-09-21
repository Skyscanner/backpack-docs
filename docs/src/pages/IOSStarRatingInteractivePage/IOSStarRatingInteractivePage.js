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

import BpkParagraph from '../../components/Paragraph';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import * as ROUTES from '../../constants/routes';

const components = [];

const IOSStarRatingInteractivePage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Star rating interactive"
    components={components}
    blurb={[
      <BpkParagraph>
        <BpkLink href={ROUTES.STAR_RATING}>
          For interactive star ratings on iOS, see the Star Ratings page.
        </BpkLink>
      </BpkParagraph>,
    ]}
    {...rest}
  />
);

export default IOSStarRatingInteractivePage;
