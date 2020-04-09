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

/* @flow strict */

import React, { Component } from 'react';
import BpkChip, { CHIP_TYPES } from 'bpk-component-chip';
import BpkButton from 'bpk-component-button';
import { cssModules } from 'bpk-react-utils';
import chipReadme from 'bpk-component-chip/README.md';

import Paragraph from '../../components/Paragraph';
import DocsPageBuilder from '../../components/DocsPageBuilder';

import STYLES from './ChipsPage.scss';

const getClassName = cssModules(STYLES);

type State = {
  chipNames: Array<string>,
  nextChipId: number,
};

type Props = {
  type: $Keys<typeof CHIP_TYPES>,
};

class ChipContainer extends Component<Props, State> {
  static defaultProps = {
    type: CHIP_TYPES.neutral,
  };

  constructor() {
    super();

    this.state = {
      chipNames: ['Example Chip 1', 'Example Chip 2'],
      nextChipId: 3,
    };
  }

  addRemovableChip = () => {
    this.setState(state => ({
      chipNames: [...state.chipNames, `Example Chip ${state.nextChipId}`],
      nextChipId: state.nextChipId + 1,
    }));
  };

  removeChip = chipName => {
    this.setState(state => {
      const newChipNames = state.chipNames.slice(0);
      const indexToRemove = newChipNames.indexOf(chipName);

      newChipNames.splice(indexToRemove, 1);

      return { chipNames: newChipNames };
    });
  };

  render() {
    const { type } = this.props;
    return (
      <div>
        <BpkButton onClick={this.addRemovableChip}>
          Add removable chip!
        </BpkButton>
        <div className={getClassName('bpk-docs-chips-page__chip-container')}>
          {this.state.chipNames.map((chipName, index) => (
            <BpkChip
              closeLabel={`Close ${chipName}`}
              onClose={() => this.removeChip(chipName)}
              className={getClassName('bpk-docs-chips-page__chip')}
              key={index} // eslint-disable-line react/no-array-index-key
              type={type}
            >
              {chipName}
            </BpkChip>
          ))}
        </div>
      </div>
    );
  }
}

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        The default configuration displays a text value with a close button.
        This button can be assigned a custom action to remove itself from the
        view.
      </Paragraph>,
    ],
    examples: [<ChipContainer />],
  },
  {
    id: 'primary',
    title: 'Primary Chip',
    examples: [<ChipContainer type={CHIP_TYPES.primary} />],
  },
  {
    id: 'non-dismissible',
    title: 'Non Dismissible',
    blurb: [
      <Paragraph>
        The non-dismissible chip is available in two variants
      </Paragraph>,
    ],
    examples: [
      <div className={getClassName('bpk-docs-chips-page__chip-container')}>
        <BpkChip
          className={getClassName('bpk-docs-chips-page__chip')}
          onClose={() => null}
          closeLabel="Close"
          dismissible={false}
        >
          This is a non-dismissible chip!
        </BpkChip>
        <BpkChip
          className={getClassName('bpk-docs-chips-page__chip')}
          onClose={() => null}
          closeLabel="Close"
          dismissible={false}
          type={CHIP_TYPES.primary}
        >
          This is a non-dismissible primary chip!
        </BpkChip>
      </div>,
    ],
  },
];

const ChipsPage = ({ ...rest }: { [string]: any }) => (
  <DocsPageBuilder
    title="Chips"
    components={components}
    readme={chipReadme}
    {...rest}
  />
);

export default ChipsPage;
