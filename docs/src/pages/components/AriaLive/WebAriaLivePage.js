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

import React from 'react';
import BpkChip from 'bpk-component-chip';
import BpkSwitch from 'bpk-component-switch';
import BpkLink from 'bpk-component-link';
import BpkFieldset from 'bpk-component-fieldset';
import { BpkCode } from 'bpk-component-code';
import BpkSelect from 'bpk-component-select';
import readme from 'bpk-component-aria-live/README.md';
import { cssModules } from 'bpk-react-utils';

import AriaLiveDemo from '../../../components/AriaLiveDemo';
import { WebComponentPage } from '../../../components/ComponentPage';
import Paragraph from '../../../components/Paragraph';

import STYLES from './aria-live-page.scss';

const getClassName = cssModules(STYLES);

class SelectExample extends React.Component<
  {},
  { destination: string, direct: boolean },
> {
  constructor() {
    super();
    this.state = {
      destination: 'Panjin',
      direct: false,
    };
  }

  onChangeDestination = destination => {
    this.setState({ destination });
  };

  toggleDirectness = () => {
    this.setState(prevState => ({ direct: !prevState.direct }));
  };

  id = 'aria-live-select-example';

  render() {
    const { destination, direct } = this.state;
    return (
      <div>
        <div>
          <Paragraph>
            Interactive component with
            <BpkCode>aria-controls=&quot;{this.id}&quot;</BpkCode> to link it to
            the ARIA live region below with the same ID.
          </Paragraph>
          <div
            className={getClassName('bpkdocs-aria-live-page__select-wrapper')}
          >
            <BpkFieldset
              label="Destination"
              className={getClassName('bpkdocs-aria-live-page__select')}
            >
              <BpkSelect
                id="destination"
                name="destination"
                value={destination}
                onChange={event => {
                  this.onChangeDestination(event.target.value);
                }}
              >
                <option value="Abisko">Abisko</option>
                <option value="Nara">Nara</option>
                <option value="Panjin">Panjin</option>
              </BpkSelect>
            </BpkFieldset>
            <BpkSwitch
              className={getClassName('bpkdocs-aria-live-page__switch')}
              label="Direct flights only"
              checked={direct}
              onChange={this.toggleDirectness}
            />
          </div>
        </div>
        <AriaLiveDemo
          aria-atomic
          visible
          id={this.id}
          className={getClassName('bpkdocs-aria-live-page__aria-live')}
          preamble={
            <Paragraph>
              This region has <BpkCode>id=&quot;{this.id}&quot;</BpkCode>.
              <br />
              It also has <BpkCode>aria-atomic=&quot;true&quot;</BpkCode> to
              instruct assistive technologies to read out everything when
              something changes, not just the part that changed.
            </Paragraph>
          }
        >
          <Paragraph>
            <strong>
              Searching for {direct ? 'direct ' : ''}flights to {destination}.
            </strong>
          </Paragraph>
        </AriaLiveDemo>
      </div>
    );
  }
}

class ChipsExample extends React.Component<
  {},
  {
    categories: { Flights: boolean, Hotels: boolean, 'Car hire': boolean },
    updates: Array<string>,
  },
> {
  constructor() {
    super();
    this.state = {
      categories: {
        Flights: true,
        Hotels: true,
        'Car hire': false,
      },
      updates: [],
    };
  }

  id = 'aria-live-chips-example';

  toggleCategory = category => {
    this.setState(prevState => {
      const nextState = prevState;
      nextState.categories[category] = !prevState.categories[category];
      nextState.updates.push(
        `${category} became ${
          nextState.categories[category] ? 'enabled' : 'disabled'
        }.`,
      );
      return nextState;
    });
  };

  render() {
    const { categories, updates } = this.state;
    return (
      <div>
        <div className={getClassName('bpkdocs-aria-live-page__chips-wrapper')}>
          <Paragraph>
            Interactive component with
            <BpkCode>aria-controls=&quot;{this.id}&quot;</BpkCode> to link it to
            the ARIA live region below with the same ID.
          </Paragraph>
          {Object.keys(categories).map(category => (
            <BpkChip
              className={getClassName('bpkdocs-aria-live-page__chip')}
              aria-controls={this.id}
              selected={categories[category]}
              accessibilityLabel={category}
              onClick={() => {
                this.toggleCategory(category);
              }}
            >
              {category}
            </BpkChip>
          ))}
        </div>
        <AriaLiveDemo
          id={this.id}
          className={getClassName('bpkdocs-aria-live-page__aria-live')}
          preamble={
            <Paragraph>
              This region has <BpkCode>id=&quot;{this.id}&quot;</BpkCode>.
              <br />
              As the above chips are toggled, updates appear here.
            </Paragraph>
          }
        >
          {updates.map(update => (
            <Paragraph>
              <strong>{update}</strong>
            </Paragraph>
          ))}
        </AriaLiveDemo>
      </div>
    );
  }
}

const components = [
  {
    id: 'about',
    title: 'About ARIA live regions',
    blurb: [
      <Paragraph>
        It&apos;s common for pages to update without the content reloading
        completely. For example, a list of filters changing or an alert
        appearing. These changes are usually visually apparent but may not be
        obvious to users of assistive technologies.
      </Paragraph>,
      <Paragraph>
        ARIA live regions fill this gap by providing a way to expose dynamic
        content changes in a way that can be announced by assistive
        technologies.
      </Paragraph>,
      <Paragraph>
        Backpack&apos;s ARIA live component is a light wrapper that creates an
        ARIA live region and sets sensible defaults for how it should function.
      </Paragraph>,
    ],
  },
  {
    id: 'Default',
    title: 'Default',
    blurb: [
      <Paragraph>
        By default, the ARIA live component is visually hidden and can only be
        seen by assistive technologies.
      </Paragraph>,
      <Paragraph>
        In this example, as the chips are toggled on and off, text describing
        the changes appears in the ARIA live region below them. Ordinarily this
        would be only visible to assistive technologies, but for demonstration
        purposes the <BpkCode>visible</BpkCode>
        prop has been supplied to the component to make it visible to all.
      </Paragraph>,
    ],
    examples: [<ChipsExample />],
  },
  {
    id: 'visible',
    title: 'Visible',
    blurb: [
      <Paragraph>
        Sometimes it&apos;s necessary for an ARIA live region to be visible to
        everyone, not just assistive technologies. The
        <BpkCode>visible</BpkCode> prop is available for these use cases.
      </Paragraph>,
    ],
    examples: [<SelectExample />],
  },
  {
    id: 'additional-resources',
    title: 'Additional resources',
    blurb: [
      <Paragraph>
        Mozilla&apos; developer network has some excellent resources on how to
        use ARIA live regions correctly.{' '}
        <BpkLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">
          Mozilla: ARIA live regions
        </BpkLink>
      </Paragraph>,
      <Paragraph>
        ARIA roles can be difficult to understand at first. If you need help at
        any point, please speak to Skyscanner&apos;s internal Accessibility
        Guild who can advise on best practices.
      </Paragraph>,
    ],
  },
];

const AriaLivePage = () => (
  <WebComponentPage
    examples={components}
    readme={readme}
    packageName="bpk-component-aria-live"
  />
);

export default AriaLivePage;
