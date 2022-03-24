/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
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
import { colors } from '@skyscanner/bpk-foundations-web/tokens/base.es6';

import ColorSwatch from '../ColorSwatch';

import STYLES from './colors-page.scss';

import { cssModules } from 'backpack/packages/bpk-react-utils';

const getClassName = cssModules(STYLES);

const Colors = () => (
  <div className={getClassName('bpk-docs-colors-page')}>
    <ColorSwatch
      name="Sky Blue"
      color={colors.colorSkyBlue}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '007, 112, 227',
        HEX: '#0770e3',
        CMYK: '085, 052, 000, 000',
        PMS: '2387',
      }}
    />
    <ColorSwatch
      name="Sky Blue Shade 03"
      color={colors.colorSkyBlueShade03}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '2, 18, 44',
        HEX: '#02122c',
        CMYK: '100, 095, 004, 042',
        PMS: '2757',
      }}
    />
    <ColorSwatch
      name="Sky Blue Shade 02"
      color={colors.colorSkyBlueShade02}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '4, 39, 89',
        HEX: '#042759',
        CMYK: '100, 072, 000, 035',
        PMS: '2147',
      }}
    />
    <ColorSwatch
      name="Sky Blue Shade 01"
      color={colors.colorSkyBlueShade01}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '8, 78, 178',
        HEX: '#084eb2',
        CMYK: '096, 066, 000, 020',
        PMS: '2145',
      }}
    />
    <ColorSwatch
      name="Sky Blue Tint 03"
      color={colors.colorSkyBlueTint03}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '205, 223, 248',
        HEX: '#cddff8',
        CMYK: '018, 000, 000, 002',
        PMS: '290',
      }}
    />
    <ColorSwatch
      name="Sky Blue Tint 02"
      color={colors.colorSkyBlueTint02}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '157, 192, 242',
        HEX: '#9dc0f2',
        CMYK: '049, 009, 000, 003',
        PMS: '2141',
      }}
    />
    <ColorSwatch
      name="Sky Blue Tint 01"
      color={colors.colorSkyBlueTint01}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '109, 159, 235',
        HEX: '#6d9feb',
        CMYK: '075, 032, 000, 004',
        PMS: '2143',
      }}
    />
    <ColorSwatch
      name="Monteverde"
      color={colors.colorMonteverde}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '000, 166, 152',
        HEX: '#00a698',
        CMYK: '083, 008, 045, 000',
        PMS: '7716',
      }}
    />
    <ColorSwatch
      name="Glencoe"
      color={colors.colorGlencoe}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '115, 206, 198',
        HEX: '#73cec6',
        CMYK: '062, 003, 025, 000',
        PMS: '2232',
      }}
    />
    <ColorSwatch
      name="Sagano"
      color={colors.colorSagano}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '208, 238, 236',
        HEX: '#d0eeec',
        CMYK: '017, 000, 012, 000',
        PMS: '566',
      }}
    />
    <ColorSwatch
      name="Kolkata"
      color={colors.colorKolkata}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '255, 148, 0',
        HEX: '#ff9400',
        CMYK: '000, 041, 98, 000',
        PMS: '1375',
      }}
    />
    <ColorSwatch
      name="Erfoud"
      color={colors.colorErfoud}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '255, 181, 77',
        HEX: '#ffb54d',
        CMYK: '000, 026, 065, 000',
        PMS: '1355',
      }}
    />
    <ColorSwatch
      name="Bagan"
      color={colors.colorBagan}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '255, 235, 208',
        HEX: '#ffebd0',
        CMYK: '000, 005, 027, 000',
        PMS: '7506',
      }}
    />
    <ColorSwatch
      name="Buñol"
      color={colors.colorBunol}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '255, 123, 89',
        HEX: '#ff7b59',
        CMYK: '000, 066, 070, 000',
        PMS: '1645',
      }}
    />
    <ColorSwatch
      name="Petra"
      color={colors.colorPetra}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '255, 171, 149',
        HEX: '#ffab95',
        CMYK: '000, 048, 051, 000',
        PMS: '1635',
      }}
    />
    <ColorSwatch
      name="Nara"
      color={colors.colorNara}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '255, 231, 224',
        HEX: '#ffe7e0',
        CMYK: '000, 017, 015, 000',
        PMS: '2337',
      }}
    />
    <ColorSwatch
      name="Abisko"
      color={colors.colorAbisko}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '90, 72, 155',
        HEX: '#5a489b',
        CMYK: '070, 078, 000, 000',
        PMS: '7678',
      }}
    />
    <ColorSwatch
      name="Valensole"
      color={colors.colorValensole}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '165, 155, 200',
        HEX: '#a59bc8',
        CMYK: '036, 040, 000, 000',
        PMS: '2099',
      }}
    />
    <ColorSwatch
      name="Tochigi"
      color={colors.colorTochigi}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '225, 221, 236',
        HEX: '#e1ddec',
        CMYK: '011, 014, 003, 000',
        PMS: '7443',
      }}
    />
    <ColorSwatch
      name="Panjin"
      color={colors.colorPanjin}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '209, 67, 91',
        HEX: '#d1435b',
        CMYK: '011, 089, 050, 003',
        PMS: '198',
      }}
    />
    <ColorSwatch
      name="Hillier"
      color={colors.colorHillier}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '225, 139, 150',
        HEX: '#e18b96',
        CMYK: '000, 048, 012, 000',
        PMS: '197',
      }}
    />
    <ColorSwatch
      name="Harbour"
      color={colors.colorHarbour}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '246, 221, 225',
        HEX: '#f6dde1',
        CMYK: '002, 014, 004, 000',
        PMS: '705',
      }}
    />
    <ColorSwatch
      name="Sky Gray"
      color={colors.colorSkyGray}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '17, 18, 54',
        HEX: '#111236',
        CMYK: '100, 092, 025, 070',
        PMS: '2767',
      }}
    />
    <ColorSwatch
      name="Sky Gray Tint 01"
      color={colors.colorSkyGrayTint01}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '68, 69, 96',
        HEX: '#444560',
        CMYK: '078, 069, 028, 020',
        PMS: '2364',
      }}
    />
    <ColorSwatch
      name="Sky Gray Tint 02"
      color={colors.colorSkyGrayTint02}
      textColor={colors.colorWhite}
      colorValues={{
        RGB: '104, 105, 127',
        HEX: '#68697f',
        CMYK: '062, 053, 023, 027',
        PMS: '2359',
      }}
    />
    <ColorSwatch
      name="Sky Gray Tint 03"
      color={colors.colorSkyGrayTint03}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '143, 144, 160',
        HEX: '#8f90a0',
        CMYK: '048, 038, 016, 015',
        PMS: '5285',
      }}
    />
    <ColorSwatch
      name="Sky Gray Tint 04"
      color={colors.colorSkyGrayTint04}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '178, 178, 191',
        HEX: '#b2b2bf',
        CMYK: '037, 027, 015, 002',
        PMS: '5925',
      }}
    />
    <ColorSwatch
      name="Sky Gray Tint 05"
      color={colors.colorSkyGrayTint05}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '205, 205, 215',
        HEX: '#cdcdd7',
        CMYK: '023, 018, 014, 000',
        PMS: '5305',
      }}
    />
    <ColorSwatch
      name="Sky Gray Tint 06"
      color={colors.colorSkyGrayTint06}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '221, 221, 229',
        HEX: '#dddde5',
        CMYK: '012, 011, 007, 000',
        PMS: '5315',
      }}
    />
    <ColorSwatch
      name="Sky Gray Tint 07"
      color={colors.colorSkyGrayTint07}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '241, 242, 248',
        HEX: '#f1f2f8',
        CMYK: '007, 004, 002, 000',
        PMS: '663',
      }}
      border
    />
    <ColorSwatch
      name="Sky White"
      color={colors.colorWhite}
      textColor={colors.colorSkyGray}
      colorValues={{
        RGB: '255, 255, 255',
        HEX: '#ffffff',
        CMYK: '000, 000, 000, 000',
      }}
    />
  </div>
);

export default Colors;
