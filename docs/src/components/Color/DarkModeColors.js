/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2021 Skyscanner Ltd
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

import ColorSwatch from '../ColorSwatch';

import STYLES from './colors-page.scss';

const getClassName = cssModules(STYLES);

const DarkModeColors = () => {
  return (
    <div className={getClassName('bpk-docs-colors-page')}>
      <ColorSwatch
        name="Black"
        color="black"
        textColor={colors.colorWhite}
        colorValues={{
          RGB: '0, 0, 0',
          HEX: '#000000',
          CMYK: '000, 000, 000, 100',
        }}
      />
      <ColorSwatch
        name="Black Tint 01"
        color="#1D1B20"
        textColor={colors.colorWhite}
        colorValues={{
          RGB: '29, 27, 32',
          HEX: '#1D1B20',
          CMYK: '009, 016, 000, 087',
        }}
      />
      <ColorSwatch
        name="Black Tint 02"
        color="#2C2C2E"
        textColor={colors.colorWhite}
        colorValues={{
          RGB: '44, 44, 46',
          HEX: '#2C2C2E',
          CMYK: '004, 004, 000, 082',
        }}
      />
      <ColorSwatch
        name="Black Tint 03"
        color="#3A3A3C"
        textColor={colors.colorWhite}
        colorValues={{
          RGB: '58, 58, 60',
          HEX: '#3A3A3C',
          CMYK: '003, 003, 000, 076',
        }}
      />
      <ColorSwatch
        name="Black Tint 04"
        color="#48484A"
        textColor={colors.colorWhite}
        colorValues={{
          RGB: '72, 72, 74',
          HEX: '#48484A',
          CMYK: '003, 003, 000, 071',
        }}
      />
      <ColorSwatch
        name="Black Tint 05"
        color="#636366"
        textColor={colors.colorWhite}
        colorValues={{
          RGB: '99, 99, 102',
          HEX: '#636366',
          CMYK: '003, 003, 000, 060',
        }}
      />
      <ColorSwatch
        name="Black Tint 06"
        color="#8E8E93"
        textColor={colors.colorWhite}
        colorValues={{
          RGB: '142, 142, 147',
          HEX: '#8E8E93',
          CMYK: '003, 003, 000, 042',
        }}
      />
    </div>
  );
};

export default DarkModeColors;
