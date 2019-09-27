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
import { colors } from 'bpk-tokens/tokens/base.es6';
import { cssModules } from 'bpk-react-utils';

import Heading from '../../components/Heading';
import ColorSwatch from '../../components/ColorSwatch';
import DocsPageBuilder from '../../components/DocsPageBuilder';

import STYLES from './colors-page.scss';

const getClassName = cssModules(STYLES);
const containerClassName = getClassName(
  'bpkdocs-colors-page__swatch-container',
);

const components = [
  {
    id: 'colours',
    title: 'Colours',
    blurb: [],
    examples: [
      <div className={containerClassName}>
        <Heading level="h3">Blue</Heading>
        <ColorSwatch
          name="color-sky-blue"
          color={colors.colorSkyBlue}
          whiteColor
        />
        <ColorSwatch
          name="color-sky-blue-shade-03"
          color={colors.colorSkyBlueShade03}
          whiteColor
        />
        <ColorSwatch
          name="color-sky-blue-shade-02"
          color={colors.colorSkyBlueShade02}
          whiteColor
        />
        <ColorSwatch
          name="color-sky-blue-shade-01"
          color={colors.colorSkyBlueShade01}
          whiteColor
        />

        <ColorSwatch
          name="color-sky-blue-tint-01"
          color={colors.colorSkyBlueTint01}
          whiteColor
        />
        <ColorSwatch
          name="color-sky-blue-tint-02"
          color={colors.colorSkyBlueTint02}
          textColor={colors.colorSkyBlue}
        />
        <ColorSwatch
          name="color-sky-blue-tint-03"
          color={colors.colorSkyBlueTint03}
          textColor={colors.colorSkyBlue}
        />
        <Heading level="h3">Green</Heading>
        <ColorSwatch
          name="color-monteverde"
          color={colors.colorMonteverde}
          whiteColor
        />
        <ColorSwatch
          name="color-glencoe"
          color={colors.colorGlencoe}
          whiteColor
        />
        <ColorSwatch
          name="color-sagano"
          color={colors.colorSagano}
          textColor={colors.colorMonteverde}
        />
        <Heading level="h3">Yellow</Heading>
        <ColorSwatch
          name="color-kolkata"
          color={colors.colorKolkata}
          whiteColor
        />
        <ColorSwatch
          name="color-erfoud"
          color={colors.colorErfoud}
          whiteColor
        />
        <ColorSwatch
          name="color-bagan"
          color={colors.colorBagan}
          textColor={colors.colorKolkata}
        />
        <Heading level="h3">Orange</Heading>
        <ColorSwatch name="color-bunol" color={colors.colorBunol} whiteColor />
        <ColorSwatch name="color-petra" color={colors.colorPetra} whiteColor />
        <ColorSwatch
          name="color-nara"
          color={colors.colorNara}
          textColor={colors.colorBunol}
        />
        <Heading level="h3">Purple</Heading>
        <ColorSwatch
          name="color-abisko"
          color={colors.colorAbisko}
          whiteColor
        />
        <ColorSwatch
          name="color-valensole"
          color={colors.colorValensole}
          whiteColor
        />
        <ColorSwatch
          name="color-tochigi"
          color={colors.colorTochigi}
          textColor={colors.colorAbisko}
        />
        <Heading level="h3">Red</Heading>
        <ColorSwatch
          name="color-panjin"
          color={colors.colorPanjin}
          whiteColor
        />
        <ColorSwatch
          name="color-hillier"
          color={colors.colorHillier}
          whiteColor
        />
        <ColorSwatch
          name="color-harbour"
          color={colors.colorHarbour}
          textColor={colors.colorPanjin}
        />
        <Heading level="h3">White</Heading>
        <ColorSwatch name="color-white" color={colors.colorWhite} border />
      </div>,
    ],
  },
  {
    id: 'grays',
    title: 'Grays',
    blurb: [],
    examples: [
      <div className={containerClassName}>
        <ColorSwatch
          name="color-sky-gray"
          color={colors.colorSkyGray}
          whiteColor
        />
        <ColorSwatch
          name="color-sky-gray-tint-01"
          color={colors.colorSkyGrayTint01}
          whiteColor
        />
        <ColorSwatch
          name="color-sky-gray-tint-02"
          color={colors.colorSkyGrayTint02}
          whiteColor
        />
        <ColorSwatch
          name="color-sky-gray-tint-03"
          color={colors.colorSkyGrayTint03}
          whiteColor
        />
        <ColorSwatch
          name="color-sky-gray-tint-04"
          color={colors.colorSkyGrayTint04}
          whiteColor
        />
        <ColorSwatch
          name="color-sky-gray-tint-05"
          color={colors.colorSkyGrayTint05}
        />
        <ColorSwatch
          name="color-sky-gray-tint-06"
          color={colors.colorSkyGrayTint06}
        />
        <ColorSwatch
          name="color-sky-gray-tint-07"
          color={colors.colorSkyGrayTint07}
        />
      </div>,
    ],
  },
];

const ColorsPage = () => (
  <DocsPageBuilder title="Colour" components={components} />
);

export default ColorsPage;
