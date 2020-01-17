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

import { DynamicColorSwatch } from '../../components/ColorSwatch';

import STYLES from './colors-page.scss';

const getClassName = cssModules(STYLES);

const dynamicColors = [
  <div className={getClassName('bpk-docs-colors-page')}>
    <DynamicColorSwatch
      name="Primary Color"
      lightColorName="Sky Blue"
      lightColor={colors.colorSkyBlue}
      darkColorName="Sky Blue Tint 01"
      darkColor={colors.colorSkyBlueTint01}
      textColor={colors.colorWhite}
    />
    <DynamicColorSwatch
      name="Background Color"
      lightColorName="Color White"
      lightColor={colors.colorWhite}
      darkColorName="Black"
      darkColor="black"
      textColor={colors.colorSkyGray}
      border
    />
    <DynamicColorSwatch
      name="Background Secondary Color"
      lightColorName="Sky Gray Tint 07"
      lightColor={colors.colorSkyGrayTint07}
      darkColorName="Black Tint 01"
      darkColor="#1D1B20"
      textColor={colors.colorSkyGray}
    />
    <DynamicColorSwatch
      name="Background Tertiary Color"
      lightColorName="colorWhite"
      lightColor={colors.colorWhite}
      darkColorName="Black Tint 02"
      darkColor="#2C2C2E"
      textColor={colors.colorSkyGray}
      border
    />
    <DynamicColorSwatch
      name="Line Color"
      lightColorName="Sky Gray Tint 05"
      lightColor={colors.colorSkyGrayTint05}
      darkColorName="Sky Gray Tint 01"
      darkColor={colors.colorSkyGrayTint01}
      textColor={colors.colorSkyGray}
    />
    <DynamicColorSwatch
      name="Text Primary Color"
      lightColorName="Sky Gray"
      lightColor={colors.colorSkyGray}
      darkColorName="White"
      darkColor={colors.colorWhite}
      textColor={colors.colorWhite}
      border
    />
    <DynamicColorSwatch
      name="Text Secondary Color"
      lightColorName="Sky Gray Tint 02"
      lightColor={colors.colorSkyGrayTint02}
      darkColorName="Sky Gray Tint 03"
      darkColor={colors.colorSkyGrayTint03}
      textColor={colors.colorWhite}
    />
    <DynamicColorSwatch
      name="Text Tertiary Color"
      lightColorName="Sky Gray Tint 03"
      lightColor={colors.colorSkyGrayTint03}
      darkColorName="Sky Gray Tint 04"
      darkColor={colors.colorSkyGrayTint04}
      textColor={colors.colorSkyGray}
    />
    <DynamicColorSwatch
      name="Text Quaternary Color"
      lightColorName="Sky Gray Tint 04"
      lightColor={colors.colorSkyGrayTint04}
      darkColorName="Sky Gray Tint 05"
      darkColor={colors.colorSkyGrayTint05}
      textColor={colors.colorSkyGray}
    />
  </div>,
];

export default dynamicColors;