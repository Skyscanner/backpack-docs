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
import BpkSelectableChip, {
  BpkDismissibleChip,
  CHIP_TYPES,
} from 'bpk-component-chip';
import BpkButton from 'bpk-component-button';
import { cssModules } from 'bpk-react-utils';
import chipReadme from 'bpk-component-chip/README.md';
import FlightIconSm from 'bpk-component-icon/sm/flight';
import HotelsIconSm from 'bpk-component-icon/sm/hotels';
import CarsIconSm from 'bpk-component-icon/sm/cars';
import TickCircleIconSm from 'bpk-component-icon/sm/tick-circle';

import Paragraph from '../../components/Paragraph';
import { WebComponentPage } from '../../components/ComponentPage';

import STYLES from './ChipsPage.scss';

const getClassName = cssModules(STYLES);

class SelectableChipContainer extends Component<
  {
    type: $Keys<typeof CHIP_TYPES>,
    includeDisabledExample: boolean,
    includeLeadingIcons: boolean,
    includeTrailingIcons: boolean,
  },
  { flights: boolean, hotels: boolean, carHire: boolean },
> {
  static defaultProps = {
    type: CHIP_TYPES.primary,
    includeDisabledExample: false,
    includeLeadingIcons: false,
    includeTrailingIcons: false,
  };

  constructor(props) {
    super(props);
    this.state = { flights: false, hotels: true, carHire: false };
  }

  render() {
    return (
      <div>
        <BpkSelectableChip
          accessibilityLabel="Toggle flights"
          onClick={() => {
            this.setState(prevState => {
              return { flights: !prevState.flights };
            });
          }}
          type={this.props.type}
          selected={this.state.flights}
          leadingAccessoryView={
            this.props.includeLeadingIcons ? <FlightIconSm /> : null
          }
          trailingAccessoryView={
            this.props.includeTrailingIcons ? <TickCircleIconSm /> : null
          }
          className={getClassName('bpk-docs-chips-page__chip')}
        >
          Flights
        </BpkSelectableChip>
        <BpkSelectableChip
          accessibilityLabel="Toggle hotels"
          onClick={() => {
            this.setState(prevState => {
              return { hotels: !prevState.hotels };
            });
          }}
          type={this.props.type}
          selected={this.state.hotels}
          leadingAccessoryView={
            this.props.includeLeadingIcons ? <HotelsIconSm /> : null
          }
          trailingAccessoryView={
            this.props.includeTrailingIcons ? <TickCircleIconSm /> : null
          }
          className={getClassName('bpk-docs-chips-page__chip')}
        >
          Hotels
        </BpkSelectableChip>
        <BpkSelectableChip
          accessibilityLabel="Toggle car hire"
          onClick={() => {
            this.setState(prevState => {
              return { carHire: !prevState.carHire };
            });
          }}
          selected={this.state.carHire}
          type={this.props.type}
          leadingAccessoryView={
            this.props.includeLeadingIcons ? <CarsIconSm /> : null
          }
          trailingAccessoryView={
            this.props.includeTrailingIcons ? <TickCircleIconSm /> : null
          }
          className={getClassName('bpk-docs-chips-page__chip')}
        >
          Car Hire
        </BpkSelectableChip>
        {this.props.includeDisabledExample && (
          <BpkSelectableChip
            accessibilityLabel="Toggle disabled"
            onClick={() => {}}
            type={this.props.type}
            className={getClassName('bpk-docs-chips-page__chip')}
            disabled
          >
            Disabled
          </BpkSelectableChip>
        )}
      </div>
    );
  }
}

class DismissibleChipContainer extends Component<
  {
    type: $Keys<typeof CHIP_TYPES>,
    includeDisabledExample: boolean,
    includeLeadingIcons: boolean,
  },
  {
    chipNames: Array<string>,
  },
> {
  static defaultProps = {
    type: CHIP_TYPES.primary,
    includeDisabledExample: false,
    includeLeadingIcons: false,
  };

  constructor() {
    super();

    this.state = {
      chipNames: ['Example Chip 1', 'Example Chip 2'],
    };
  }

  resetChips = () => {
    this.setState({
      chipNames: ['Example Chip 1', 'Example Chip 2'],
    });
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
        {this.state.chipNames.length === 0 && (
          <BpkButton secondary onClick={this.resetChips}>
            Reset
          </BpkButton>
        )}
        <div className={getClassName('bpk-docs-chips-page__chip-container')}>
          {this.state.chipNames.map((chipName, index) => (
            <BpkDismissibleChip
              accessibilityLabel={`Close ${chipName}`}
              onClick={() => this.removeChip(chipName)}
              className={getClassName('bpk-docs-chips-page__chip')}
              key={index} // eslint-disable-line react/no-array-index-key
              type={type}
              leadingAccessoryView={
                this.props.includeLeadingIcons ? <TickCircleIconSm /> : null
              }
            >
              {chipName}
            </BpkDismissibleChip>
          ))}
          {this.props.includeDisabledExample && (
            <BpkDismissibleChip
              type={type}
              accessibilityLabel="Close this chip"
              onClick={() => {}}
              disabled
              className={getClassName('bpk-docs-chips-page__chip')}
            >
              Disabled chip
            </BpkDismissibleChip>
          )}
        </div>
      </div>
    );
  }
}

const components = [
  {
    id: 'selectable',
    title: 'Selectable',
    blurb: [<Paragraph>Selectable chips can be toggled on and off.</Paragraph>],
    examples: [<SelectableChipContainer includeDisabledExample />],
  },
  {
    id: 'dismissible',
    title: 'Dismissible',
    blurb: [
      <Paragraph>
        Dismissible chips are useful when applying filters. They are designed to
        disappear when pressed, so they cannot be toggled on and off.
      </Paragraph>,
    ],
    examples: [<DismissibleChipContainer includeDisabledExample />],
  },
  {
    id: 'icons',
    title: 'With icons',
    blurb: [
      <Paragraph>Using accessory views, chips can contain icons.</Paragraph>,
      <Paragraph>
        Selectable chips can have a leading icon, a trailing icon, or both.
        Dismissible chips can only have a leading icon, because they already
        have a trailing close icon.
      </Paragraph>,
    ],
    examples: [
      <strong>Selectable</strong>,
      <SelectableChipContainer includeLeadingIcons />,
      <SelectableChipContainer includeTrailingIcons />,
      <SelectableChipContainer includeLeadingIcons includeTrailingIcons />,
      <strong>Dismissible</strong>,
      <DismissibleChipContainer />,
      <DismissibleChipContainer includeLeadingIcons />,
    ],
  },
  {
    id: 'styles',
    title: 'Different styles',
    blurb: [
      <Paragraph>
        There are three styles of chips to choose from: <em>primary</em>,{' '}
        <em>success</em> and <em>light</em>.
      </Paragraph>,
    ],
    examples: [
      <strong>Primary</strong>,
      <SelectableChipContainer type={CHIP_TYPES.primary} />,
      <strong>Success</strong>,
      <SelectableChipContainer type={CHIP_TYPES.success} />,
      <strong>Light</strong>,
      <SelectableChipContainer type={CHIP_TYPES.light} />,
    ],
  },
];

const ChipsPage = () => (
  <WebComponentPage examples={components} readme={chipReadme} />
);

export default ChipsPage;
