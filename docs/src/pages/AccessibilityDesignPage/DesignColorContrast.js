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
import BpkButton from 'bpk-component-button';
import { cssModules } from 'bpk-react-utils';

import getMarkdownString from '../../helpers/markdown-helper';
import BpkMarkdownRenderer from '../../components/DocsPageBuilder/BpkMarkdownRenderer';
import BpkDoDont from '../../components/DocsPageBuilder/BpkDoDont';
import Paragraph from '../../components/Paragraph';
import PresentationBlock from '../../components/PresentationBlock';

import STYLES from './accessibility-design-page.scss';
import colorContrast1 from './content/colorContrast1.md';
import colorContrast2 from './content/colorContrast2.md';

const getClassName = cssModules(STYLES);

const DesignColorContrast = ({ ...rest }) => (
  <div {...rest}>
    <BpkMarkdownRenderer source={getMarkdownString(colorContrast1)} />
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
            'bpk-docs-accessibility-design-page__presentation-block--do',
          )}
        >
          <BpkButton>Primary</BpkButton>
        </PresentationBlock>
        <Paragraph>
          Contrast ratio between background and foreground - 3.5:1
        </Paragraph>
      </BpkDoDont>
      <BpkDoDont
        type="dont"
        className={getClassName('bpk-docs-accessibility-design-page__do-dont')}
      >
        <PresentationBlock
          className={getClassName(
            'bpk-docs-accessibility-design-page__presentation-block',
            'bpk-docs-accessibility-design-page__presentation-block--dont',
          )}
        >
          <BpkButton>Primary</BpkButton>
        </PresentationBlock>
        <Paragraph>
          Contrast ratio between background and foreground - 1.9:1
        </Paragraph>
      </BpkDoDont>
    </div>
    <BpkMarkdownRenderer source={getMarkdownString(colorContrast2)} />
  </div>
);

export default DesignColorContrast;
