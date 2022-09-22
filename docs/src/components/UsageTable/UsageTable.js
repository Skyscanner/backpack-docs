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

import PropTypes from 'prop-types';
import React from 'react';

import zip from 'lodash/zip';

import STYLES from './UsageTable.scss';

import BpkTickIcon from 'backpack/packages/bpk-component-icon/sm/tick-circle';
import BpkCloseIcon from 'backpack/packages/bpk-component-icon/sm/close-circle';
import {
  BpkTable,
  BpkTableHead,
  BpkTableBody,
  BpkTableRow,
  BpkTableHeadCell,
  BpkTableCell,
} from 'backpack/packages/bpk-component-table';
import { cssModules } from 'backpack/packages/bpk-react-utils';

const getClassName = cssModules(STYLES);

const UsageTable = (props) => {
  const { data, ...rest } = props;
  const { donts, dos } = data;

  const rows = zip(dos, donts);

  const getIcon = (cell, index) => {
    if (!cell) {
      return null;
    }
    return index % 2 === 0 ? (
      <BpkTickIcon className={getClassName('bpkdocs-dos-and-donts__do-icon')} />
    ) : (
      <BpkCloseIcon
        className={getClassName('bpkdocs-dos-and-donts__dont-icon')}
      />
    );
  };

  return (
    <BpkTable alternate {...rest}>
      <BpkTableHead>
        <BpkTableRow>
          <BpkTableHeadCell alternate>Do</BpkTableHeadCell>
          <BpkTableHeadCell alternate>Don&apos;t</BpkTableHeadCell>
        </BpkTableRow>
      </BpkTableHead>
      <BpkTableBody>
        {rows.map((cells, rowIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <BpkTableRow key={rowIndex.toString()}>
            {cells.map((cell, cellIndex) => (
              <BpkTableCell
                // eslint-disable-next-line react/no-array-index-key
                key={cellIndex.toString()}
                className={getClassName('bpkdocs-dos-and-donts__cell')}
              >
                <div
                  className={getClassName('bpkdocs-dos-and-donts__container')}
                >
                  {getIcon(cell, cellIndex)}
                  <span
                    className={getClassName('bpkdocs-dos-and-donts__content')}
                  >
                    {cell}
                  </span>
                </div>
              </BpkTableCell>
            ))}
          </BpkTableRow>
        ))}
      </BpkTableBody>
    </BpkTable>
  );
};

UsageTable.propTypes = {
  data: PropTypes.shape({
    dos: PropTypes.arrayOf(PropTypes.string.isRequired),
    donts: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default UsageTable;
