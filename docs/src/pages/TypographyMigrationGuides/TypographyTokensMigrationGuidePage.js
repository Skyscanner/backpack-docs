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

import STYLES from './typography-migration-guide-pages.scss';

import {
  BpkTable,
  BpkTableHead,
  BpkTableBody,
  BpkTableRow,
  BpkTableCell,
  BpkTableHeadCell,
} from 'backpack/packages/bpk-component-table';
import BpkText, { TEXT_STYLES } from 'backpack/packages/bpk-component-text';
import { cssModules } from 'backpack/packages/bpk-react-utils';

const getClassName = cssModules(STYLES);

const MultilineParagraph = (props) => {
  const { text } = props;
  const newText = text.split('\n').map((str) => <p>{str}</p>);

  return newText;
};

const TypographyTokensMigrationGuidePage = () => (
  <div className={getClassName('bpk-docs-typography-guidelines')}>
    <div
      className={getClassName('bpk-docs-typography-guidelines--description')}
    >
      <BpkText tagName="h2" textStyle={TEXT_STYLES.heading2}>
        Typography Tokens Migration Guide
      </BpkText>
      <BpkText tagName="p" textStyle={TEXT_STYLES.bodyLongform}>
        Using tokens to set typography is not recommended. Follow the mapping
        below to replace tokens with mixins. As tokens can be used in any
        combination, not all combinations will be found below and you might need
        to work with your squad&apos;s designer to choose the appropriate style.
      </BpkText>
    </div>
    <BpkTable className={getClassName('bpk-docs-typography-guidelines--table')}>
      <BpkTableHead>
        <BpkTableRow>
          <BpkTableHeadCell>Font size</BpkTableHeadCell>
          <BpkTableHeadCell>Font weight</BpkTableHeadCell>
          <BpkTableHeadCell>Line height</BpkTableHeadCell>
          <BpkTableHeadCell>Style/mixin name</BpkTableHeadCell>
        </BpkTableRow>
      </BpkTableHead>
      <BpkTableBody>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-xs-font-size\n$bpk-font-size-xs'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xs-font-weight\n$bpk-font-weight-book\nno weight'
              }
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xs-line-height\n$bpk-line-height-xs\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>caption</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-xs-font-size\n$bpk-font-size-xs'}
            />
          </BpkTableCell>
          <BpkTableCell>$bpk-font-weight-bold</BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xs-line-height\n$bpk-line-height-xs\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>label-3</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-sm-font-size\n$bpk-font-size-sm'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-sm-font-weight\n$bpk-font-weight-book\nno weight'
              }
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-sm-line-height\n$bpk-line-height-sm\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>footnote</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-sm-font-size\n$bpk-font-size-sm'}
            />
          </BpkTableCell>
          <BpkTableCell>$bpk-font-weight-bold</BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-sm-line-height\n$bpk-line-height-sm\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>label-2</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-base-font-size\n$bpk-font-size-base'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-base-font-weight\n$bpk-font-weight-book\nno weight'
              }
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-base-line-height\n$bpk-line-height-base\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>body-default</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-base-font-size\n$bpk-font-size-base\nno font size'
              }
            />
          </BpkTableCell>
          <BpkTableCell>$bpk-font-weight-bold</BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-base-line-height\n$bpk-line-height-base\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>
            label-1 or heading-5 (which has a different line height and should
            be used specifically for headings)
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-lg-font-size\n$bpk-font-size-lg'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-lg-font-weight\n$bpk-font-weight-book\nno weight'
              }
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-lg-line-height\n$bpk-line-height-lg\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>body-longform</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-lg-font-size\n$bpk-font-size-lg'}
            />
          </BpkTableCell>
          <BpkTableCell>$bpk-font-weight-bold</BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-lg-line-height\n$bpk-line-height-lg\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>heading-4</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-xl-font-size\n$bpk-font-size-xl'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xl-font-weight\n$bpk-font-weight-book\nno weight'
              }
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xl-line-height\n$bpk-line-height-xl\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>subheading</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-xl-font-size\n$bpk-font-size-xl'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-font-weight-bold\n$bpk-font-weight-black'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xl-line-height\n$bpk-line-height-xl\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>heading-3</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-xxl-font-size\n$bpk-font-size-xxl'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xxl-font-weight\n$bpk-font-weight-book\n$bpk-font-weight-bold\n$bpk-font-weight-black\nno weight'
              }
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xxl-line-height\n$bpk-line-height-xxl\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>heading-2</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-xxxl-font-size\n$bpk-font-size-xxxl'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xxxl-font-weight\n$bpk-font-weight-book\n$bpk-font-weight-bold\n$bpk-font-weight-black\nno weight'
              }
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xxxl-line-height\n$bpk-line-height-xxxl\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>heading-1</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-xxxxl-font-size\n$bpk-font-size-xxxxl'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xxxxl-font-weight\n$bpk-font-weight-book\n$bpk-font-weight-bold\n$bpk-font-weight-black\nno weight'
              }
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xxxxl-line-height\n$bpk-line-height-xxxxl\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>hero-5</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>
            <MultilineParagraph
              text={'$bpk-text-xxxxxl-font-size\n$bpk-font-size-xxxxxl'}
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xxxxxl-font-weight\n$bpk-font-weight-book\n$bpk-font-weight-bold\n$bpk-font-weight-black\nno weight'
              }
            />
          </BpkTableCell>
          <BpkTableCell>
            <MultilineParagraph
              text={
                '$bpk-text-xxxxxl-line-height\n$bpk-line-height-xxxxxl\nno line height'
              }
            />
          </BpkTableCell>
          <BpkTableCell>hero-4</BpkTableCell>
        </BpkTableRow>
      </BpkTableBody>
    </BpkTable>
  </div>
);

export default TypographyTokensMigrationGuidePage;
