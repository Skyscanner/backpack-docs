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
import BpkBlockquote from 'bpk-component-blockquote';
import webReadme from 'bpk-theming/README.md';
import { cssModules } from 'bpk-react-utils';

import STYLES from './theming-page.scss';

import Paragraph from 'components/Paragraph';
import ColorSwatch from 'components/ColorSwatch';
import { WebComponentPage } from 'components/ComponentPage';

const getClassName = cssModules(STYLES);

const CSS_VARIABLES_URL =
  'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables';

const components = [
  {
    id: 'about',
    title: 'Technical implementation',
    blurb: [
      <BpkBlockquote>
        <strong>Note:</strong> Backpack&#39;s theming is based on&nbsp;
        <BpkLink href={CSS_VARIABLES_URL} blank>
          CSS Variables
        </BpkLink>
        &nbsp;and thus will not be supported in some browsers. In these cases
        Backpack components will gracefully degrade to the default Skyscanner
        theme. For an overview of this check&nbsp;
        <BpkLink href="https://caniuse.com/#feat=css-variables" blank>
          caniuse
        </BpkLink>
        .
      </BpkBlockquote>,
    ],
  },
  {
    id: 'colours',
    title: 'Themeable colours',
    blurb: [
      <div>
        <Paragraph>
          The color swatches below change when a theme is applied.
        </Paragraph>
        <div className={getClassName('bpkdocs-theming-page__swatch-container')}>
          <ColorSwatch
            name="primary-color"
            textColor="#FFF"
            className={getClassName('bpkdocs-theming-page__swatch--primary')}
          />
        </div>
      </div>,
    ],
  },
];

const ThemingPage = () => (
  <WebComponentPage
    examples={components}
    readme={webReadme}
    packageName="bpk-theming"
  />
);

export default ThemingPage;
