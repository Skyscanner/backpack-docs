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

const TypographyBpkTextMigrationGuidePage = () => (
  <div className={getClassName('bpk-docs-typography-guidelines')}>
    <div
      className={getClassName('bpk-docs-typography-guidelines--description')}
    >
      <BpkText tagName="h2" textStyle={TEXT_STYLES.heading2}>
        BpkText Migration Guide
      </BpkText>
      <BpkText tagName="p" textStyle={TEXT_STYLES.bodyLongform}>
        The <em>weight</em> property in BpkText component is deprecated and will
        be removed in a future release. Check the following table to see what{' '}
        <em>textStyle</em> you should be using after removing the{' '}
        <em>weight</em> property based on the current combination of{' '}
        <em>textStyle</em> and <em>weight</em> that you are using. Some of the
        existing combinations of <em>textStyle</em> and <em>weight</em> will not
        exist as part of the new typography system. In that case, we recommend
        that you work together with your designer to ensure that you choose the
        correct new style. Alternatively, you can use the style recommended by
        Backpack&apos;s designers as described in the table below.
      </BpkText>
    </div>
    <BpkTable className={getClassName('bpk-docs-typography-guidelines--table')}>
      <BpkTableHead>
        <BpkTableRow>
          <BpkTableHeadCell>textStyle</BpkTableHeadCell>
          <BpkTableHeadCell>weight</BpkTableHeadCell>
          <BpkTableHeadCell>supported</BpkTableHeadCell>
          <BpkTableHeadCell>new textStyle</BpkTableHeadCell>
        </BpkTableRow>
      </BpkTableHead>
      <BpkTableBody>
        <BpkTableRow>
          <BpkTableCell>xs</BpkTableCell>
          <BpkTableCell>regular</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>caption</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xs</BpkTableCell>
          <BpkTableCell>bold</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>label-3</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>sm</BpkTableCell>
          <BpkTableCell>regular</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>footnote</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>sm</BpkTableCell>
          <BpkTableCell>bold</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>label-2</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>base</BpkTableCell>
          <BpkTableCell>regular</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>body-default</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>base</BpkTableCell>
          <BpkTableCell>bold</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>label-1</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>lg</BpkTableCell>
          <BpkTableCell>regular</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>body-longform</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>lg</BpkTableCell>
          <BpkTableCell>bold</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>heading-4</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xl</BpkTableCell>
          <BpkTableCell>regular</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>subheading</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xl</BpkTableCell>
          <BpkTableCell>bold</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>heading-3</BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xl</BpkTableCell>
          <BpkTableCell>black</BpkTableCell>
          <BpkTableCell>no</BpkTableCell>
          <BpkTableCell>
            No styles use this combination. You can use heading-3 as recommended
            by Backpack&apos;s designers.
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xxl</BpkTableCell>
          <BpkTableCell>regular</BpkTableCell>
          <BpkTableCell>no</BpkTableCell>
          <BpkTableCell>
            No styles use this combination. You can use heading-2 as recommended
            by Backpack&apos;s designers.
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xxl</BpkTableCell>
          <BpkTableCell>bold</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>
            The xxl style will have by default bold weight and therefore passing
            the weight property here is no longer needed. Alternatively, you can
            use heading-2 to adopt the new styles achieving the same results.
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xxl</BpkTableCell>
          <BpkTableCell>black</BpkTableCell>
          <BpkTableCell>no</BpkTableCell>
          <BpkTableCell>
            No styles use this combination. You can use heading-2 as recommended
            by Backpack&apos;s designers.
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xxxl</BpkTableCell>
          <BpkTableCell>regular</BpkTableCell>
          <BpkTableCell>no</BpkTableCell>
          <BpkTableCell>
            No styles use this combination. You can use heading-1 as recommended
            by Backpack&apos;s designers.
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xxxl</BpkTableCell>
          <BpkTableCell>bold</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>
            The xxxl style will have by default bold weight and therefore
            passing the weight property here is no longer needed. Alternatively,
            you can use heading-1 to adopt the new styles achieving the same
            results.
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xxxl</BpkTableCell>
          <BpkTableCell>black</BpkTableCell>
          <BpkTableCell>no</BpkTableCell>
          <BpkTableCell>
            No styles use this combination. You can use heading-1 as recommended
            by Backpack&apos;s designers.
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xxxxl</BpkTableCell>
          <BpkTableCell>regular</BpkTableCell>
          <BpkTableCell>no</BpkTableCell>
          <BpkTableCell>
            No styles use this combination. You can use hero-5 as recommended by
            Backpack&apos;s designers.
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xxxxl</BpkTableCell>
          <BpkTableCell>bold</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>
            The xxxxl style will have by default bold weight and therefore
            passing the weight property here is no longer needed. Alternatively,
            you can use hero-5 to adopt the new styles achieving the same
            results.
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xxxxxl</BpkTableCell>
          <BpkTableCell>regular</BpkTableCell>
          <BpkTableCell>no</BpkTableCell>
          <BpkTableCell>
            No styles use this combination. You can use hero-4 as recommended by
            Backpack&apos;s designers.
          </BpkTableCell>
        </BpkTableRow>
        <BpkTableRow>
          <BpkTableCell>xxxxxl</BpkTableCell>
          <BpkTableCell>bold</BpkTableCell>
          <BpkTableCell>yes</BpkTableCell>
          <BpkTableCell>
            The xxxxxl style will have by default bold weight and therefore
            passing the weight property here is no longer needed. Alternatively,
            you can use hero-4 to adopt the new styles achieving the same
            results.
          </BpkTableCell>
        </BpkTableRow>
      </BpkTableBody>
    </BpkTable>
  </div>
);

export default TypographyBpkTextMigrationGuidePage;
