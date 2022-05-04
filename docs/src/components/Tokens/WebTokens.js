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

/* @flow strict */

import React from 'react';

import {
  formatTokenName,
  tokenNameToSizeNumber,
  type RawTokens,
  type Token,
  toPx,
} from '../../helpers/tokens-helper';

import {
  BpkTable,
  BpkTableHead,
  BpkTableBody,
  BpkTableRow,
  BpkTableHeadCell,
  BpkTableCell,
} from 'backpack/packages/bpk-component-table';

type Props = {
  tokens: RawTokens,
  matcher: ?(Token) => boolean,
};

const WebTokens = (props: Props) => {
  const { matcher, tokens } = props;

  const filteredTokens = Object.keys(tokens.props)
    .map((key) => {
      const token = tokens.props[key];
      if (token.deprecated) {
        return null;
      }
      if (matcher && !matcher(token)) {
        return null;
      }

      const pxValue = toPx(token.value);

      return {
        name: token.name,
        engName: `bpk-${formatTokenName(token.name).replace('-v-2', '')}()`,
        value: pxValue ? `${token.value} (${pxValue})` : token.value,
      };
    })
    .filter(Boolean)
    .sort((a, b) => tokenNameToSizeNumber(a) - tokenNameToSizeNumber(b));

  return (
    <BpkTable alternate>
      <BpkTableHead>
        <BpkTableRow>
          <BpkTableHeadCell alternate>Name</BpkTableHeadCell>
          <BpkTableHeadCell alternate>Engineering Token</BpkTableHeadCell>
          <BpkTableHeadCell alternate>Value</BpkTableHeadCell>
        </BpkTableRow>
      </BpkTableHead>
      <BpkTableBody>
        {!filteredTokens.length && (
          <BpkTableRow key="notAvailable">
            <BpkTableCell colSpan="2">N/A</BpkTableCell>
          </BpkTableRow>
        )}
        {!!filteredTokens.length &&
          filteredTokens.map((token) => (
            <BpkTableRow key={token.name}>
              <BpkTableCell>
                {formatTokenName(token.name).replace('-v-2', '')}
              </BpkTableCell>
              <BpkTableCell>{token.engName}</BpkTableCell>
              <BpkTableCell>{token.value}</BpkTableCell>
            </BpkTableRow>
          ))}
      </BpkTableBody>
    </BpkTable>
  );
};

export default WebTokens;
