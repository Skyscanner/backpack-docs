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
import BpkCheckbox from 'bpk-component-checkbox';
import { withAlignment } from 'bpk-component-icon';
import StopsIcon from 'bpk-component-icon/sm/stops';
import AirlinesIcon from 'bpk-component-icon/sm/airline--multiple';
import AirportsIcon from 'bpk-component-icon/sm/airports';
import accordionsReadme from 'bpk-component-accordion/README.md';
import {
  BpkAccordion,
  BpkAccordionItem,
  withSingleItemAccordionState,
  withAccordionItemState,
  WEIGHT_STYLES,
} from 'bpk-component-accordion';
import {
  colorPanjin,
  iconSizeSm,
  lineHeightBase,
  spacingSm,
} from 'bpk-tokens/tokens/base.es6';

import { WebComponentPage } from 'components/ComponentPage';
import Paragraph from 'components/Paragraph';

const SingleItemAccordion = withSingleItemAccordionState(BpkAccordion);
const StatefulAccordionItem = withAccordionItemState(BpkAccordionItem);

const AlignedStopsIcon = withAlignment(StopsIcon, lineHeightBase, iconSizeSm);
const AlignedAirlinesIcon = withAlignment(
  AirlinesIcon,
  lineHeightBase,
  iconSizeSm,
);
const AlignedAirportsIcon = withAlignment(
  AirportsIcon,
  lineHeightBase,
  iconSizeSm,
);

const CheckboxWrapper = props => (
  <div style={{ padding: `${spacingSm} 0` }} {...props} />
);

const StopsContent = () => (
  <form>
    <CheckboxWrapper>
      <BpkCheckbox name="direct" label="Direct" onChange={() => null} checked />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox name="1-stop" label="1 stop" onChange={() => null} checked />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="2-plus-stops"
        label="2+ stops"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
  </form>
);

const AirlinesContent = () => (
  <form>
    <CheckboxWrapper>
      <BpkCheckbox
        name="air-france"
        label="Air France"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="alitalia"
        label="Alitalia"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="bmi-regional"
        label="bmi regional"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="british-airways"
        label="British Airways"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="easyjet"
        label="Easyjet"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
  </form>
);

const AirportsContent = () => (
  <form>
    <CheckboxWrapper>
      <BpkCheckbox
        name="lcy"
        label="London City"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="LGW"
        label="London Gatwick"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="lhr"
        label="London Heathrow"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="ltn"
        label="London Luton"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="stn"
        label="London Stansted"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
  </form>
);

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        By default, accordions allow only one section to be expanded at any
        time.
      </Paragraph>,
    ],
    examples: [
      <SingleItemAccordion>
        <BpkAccordionItem id="stops" title="Stops" initiallyExpanded>
          <StopsContent />
        </BpkAccordionItem>
        <BpkAccordionItem id="airlines" title="Airlines">
          <AirlinesContent />
        </BpkAccordionItem>
        <BpkAccordionItem id="airports" title="Airports">
          <AirportsContent />
        </BpkAccordionItem>
      </SingleItemAccordion>,
    ],
  },
  {
    id: 'multiple-section-open',
    title: 'Multiple sections open',
    blurb: [
      <Paragraph>
        Accordions can also be configured to allow multiple sections to be
        expanded simultaneously.
      </Paragraph>,
    ],
    examples: [
      <BpkAccordion>
        <StatefulAccordionItem id="stops" title="Stops" initiallyExpanded>
          <StopsContent />
        </StatefulAccordionItem>
        <StatefulAccordionItem id="airlines" title="Airlines" initiallyExpanded>
          <AirlinesContent />
        </StatefulAccordionItem>
        <StatefulAccordionItem id="airports" title="Airports">
          <AirportsContent />
        </StatefulAccordionItem>
      </BpkAccordion>,
    ],
  },
  {
    id: 'with-icons',
    title: 'With icon support',
    blurb: [
      <Paragraph>
        Accordions can support displaying icons in the title.
      </Paragraph>,
    ],
    examples: [
      <SingleItemAccordion>
        <BpkAccordionItem
          id="stops"
          title="Stops"
          icon={<AlignedStopsIcon fill={colorPanjin} />}
          initiallyExpanded
        >
          <StopsContent />
        </BpkAccordionItem>
        <BpkAccordionItem
          id="airlines"
          title="Airlines"
          icon={<AlignedAirlinesIcon />}
        >
          <AirlinesContent />
        </BpkAccordionItem>
        <BpkAccordionItem
          id="airports"
          title="Airports"
          icon={<AlignedAirportsIcon />}
        >
          <AirportsContent />
        </BpkAccordionItem>
      </SingleItemAccordion>,
    ],
  },
  {
    id: 'with-bold-headings',
    title: 'With bold headings',
    blurb: [<Paragraph>Accordions can support `bold` titles.</Paragraph>],
    examples: [
      <SingleItemAccordion>
        <BpkAccordionItem
          id="stops"
          title="Stops"
          icon={<AlignedStopsIcon fill={colorPanjin} />}
          initiallyExpanded
          weight={WEIGHT_STYLES.bold}
        >
          <StopsContent />
        </BpkAccordionItem>
        <BpkAccordionItem
          id="airlines"
          title="Airlines"
          icon={<AlignedAirlinesIcon />}
          weight={WEIGHT_STYLES.bold}
        >
          <AirlinesContent />
        </BpkAccordionItem>
        <BpkAccordionItem
          id="airports"
          title="Airports"
          icon={<AlignedAirportsIcon />}
          weight={WEIGHT_STYLES.bold}
        >
          <AirportsContent />
        </BpkAccordionItem>
      </SingleItemAccordion>,
    ],
  },
];

const WebAccordionsPage = () => (
  <WebComponentPage
    examples={components}
    readme={accordionsReadme}
    packageName="bpk-component-accordion"
  />
);

export default WebAccordionsPage;
