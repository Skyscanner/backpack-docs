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

/* @flow strict */

import React from 'react';
import {
  BpkTable,
  BpkTableHead,
  BpkTableBody,
  BpkTableRow,
  BpkTableHeadCell,
  BpkTableCell,
} from 'bpk-component-table';

import {
  formatTokenName,
  getTokenValue,
  tokenNameToSizeNumber,
  type RawTokens,
  type Platform,
  type Token,
} from '../../helpers/tokens-helper';

type Props = {
  tokens: RawTokens,
  platform: Platform,
  matcher: ?(Token) => boolean,
};

const Tokens = (props: Props) => {
  const { tokens, platform, matcher } = props;

  const filteredTokens = Object.keys(tokens.props)
    .map(key => {
      const token = tokens.props[key];
      if (token.deprecated) {
        return null;
      }
      if (matcher && !matcher(token)) {
        return null;
      }
      return token;
    })
    .filter(Boolean)
    .sort((a, b) => tokenNameToSizeNumber(a) - tokenNameToSizeNumber(b));

  return (
    <BpkTable alternate>
      <BpkTableHead>
        <BpkTableRow>
          <BpkTableHeadCell alternate>Name</BpkTableHeadCell>
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
          filteredTokens.map(token => {
            return (
              <BpkTableRow key={token.name}>
                <BpkTableCell>{formatTokenName(token.name)}</BpkTableCell>
                <BpkTableCell>{getTokenValue(token, platform)}</BpkTableCell>
              </BpkTableRow>
            );
          })}
      </BpkTableBody>
    </BpkTable>
  );
};

export default Tokens;
