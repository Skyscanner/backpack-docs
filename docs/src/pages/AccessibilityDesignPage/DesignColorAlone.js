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

import React, { Fragment } from 'react';
import BpkImage, {
  withLazyLoading,
  withLoadingBehavior,
} from 'bpk-component-image';
import { cssModules } from 'bpk-react-utils';

import getMarkdownString from '../../helpers/markdown-helper';
import BpkMarkdownRenderer from '../../components/DocsPageBuilder/BpkMarkdownRenderer';
import BpkDoDont from '../../components/DocsPageBuilder/BpkDoDont';
import Paragraph from '../../components/Paragraph';
import PresentationBlock from '../../components/PresentationBlock';

import STYLES from './accessibility-design-page.scss';
import colorAlone1 from './content/colorAlone1.md';
import colorAlone2 from './content/colorAlone2.md';
import calendarGood from './content/calendar_good.png';
import calendarBad from './content/calendar_bad.png';

const getClassName = cssModules(STYLES);

const documentIfExists = typeof window !== 'undefined' ? document : null;
const FadingLazyLoadedImage = withLoadingBehavior(
  withLazyLoading(BpkImage, documentIfExists),
);

const DesignColorAlone = () => (
  <Fragment>
    <BpkMarkdownRenderer source={getMarkdownString(colorAlone1)} />
    <div
      className={getClassName(
        'bpk-docs-accessibility-design-page__do-dont-wrapper',
      )}
    >
      <BpkDoDont
        type="do"
        className={getClassName('bpk-docs-accessibility-design-page__do-dont')}
      >
        <PresentationBlock
          whiteBackground
          className={getClassName(
            'bpk-docs-accessibility-design-page__presentation-block',
            'bpk-docs-accessibility-design-page__presentation-block--unpadded',
            'bpk-docs-accessibility-design-page__presentation-block--do',
          )}
        >
          <FadingLazyLoadedImage
            altText="image description"
            width={804}
            height={326}
            src={`/${calendarGood}`}
          />
        </PresentationBlock>
        <Paragraph>
          Colour and text is used to represent different price ranges. A key is
          also provided for clarity.
        </Paragraph>
      </BpkDoDont>
      <BpkDoDont
        type="dont"
        className={getClassName('bpk-docs-accessibility-design-page__do-dont')}
      >
        <PresentationBlock
          className={getClassName(
            'bpk-docs-accessibility-design-page__presentation-block',
            'bpk-docs-accessibility-design-page__presentation-block--unpadded',
            'bpk-docs-accessibility-design-page__presentation-block--dont',
          )}
        >
          <FadingLazyLoadedImage
            altText="image description"
            width={804}
            height={326}
            src={`/${calendarBad}`}
          />
        </PresentationBlock>
        <Paragraph>
          Colour alone is used to represent prices. No key is provided, making
          it hard to differentiate between different price brackets
        </Paragraph>
      </BpkDoDont>
    </div>
    <BpkMarkdownRenderer source={getMarkdownString(colorAlone2)} />
  </Fragment>
);

export default DesignColorAlone;
