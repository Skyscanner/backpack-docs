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
import {
  colors,
  lineHeightBase,
  iconSizeSm,
  lineHeightLg,
  iconSizeLg,
  lineHeightSm,
} from 'bpk-tokens/tokens/base.es6';
import {
  withAlignment,
  withButtonAlignment,
  withLargeButtonAlignment,
} from 'bpk-component-icon';
import BpkLink from 'bpk-component-link';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import LongArrowRightIconSm from 'bpk-component-icon/sm/long-arrow-right';
import AwardIcon from 'bpk-component-icon/lg/award';

import WebComponentPage from '../../../components/ComponentPage';
import Paragraph from '../../../components/Paragraph';
import Code from '../../../components/Code';
import CodeBlock from '../../../components/CodeBlock';
import * as ROUTES from '../../../constants/routes';

const AlignedBaseArrow = withAlignment(
  LongArrowRightIconSm,
  lineHeightBase,
  iconSizeSm,
);
const AlignedLargeArrow = withAlignment(
  LongArrowRightIcon,
  lineHeightLg,
  iconSizeLg,
);
const AlignedButtonArrow = withButtonAlignment(LongArrowRightIconSm);
const AlignedLargeButtonArrow = withLargeButtonAlignment(LongArrowRightIcon);
const AlignedSpan = withAlignment('span', iconSizeLg, lineHeightBase);
const AlignedSpanSmall = withAlignment('span', iconSizeLg, lineHeightSm);

const components = [
  {
    id: 'withinBase',
    title: 'Icon alignment within text with textStyle "base"',
    blurb: [
      <Paragraph>
        Aligning an icon within text with textStyle &quot;base&quot; can be done
        using
        <Code>withAlignment</Code>, providing suitable spacings (see the{' '}
        <BpkLink href={ROUTES.GENERATED_TOKENS_TYPESETTING}>
          Typesetting section
        </BpkLink>
        ).
      </Paragraph>,
      <Paragraph>Using the HOC is done as follows:</Paragraph>,
      <CodeBlock>
        {`import LongArrowRightIconSm from 'bpk-component-icon/sm/long-arrow-right';
import { withAlignment } from 'bpk-component-icon';
import { lineHeightBase, iconSizeSm, colors } from 'bpk-tokens/tokens/base.es6';
import BpkText from 'bpk-component-text';

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightBase, iconSizeSm
);

<BpkText textStyle="base">
  Search
  &nbsp;
  <AlignedArrow fill={colors.colorSkyGrayTint01}/>
</BpkText>
`}
      </CodeBlock>,
    ],
    examples: [
      <BpkText textStyle="base">
        Search &nbsp;
        <AlignedBaseArrow fill={colors.colorSkyGrayTint01} />
      </BpkText>,
    ],
  },
  {
    id: 'withinLarge',
    title: 'Icon alignment within text with textStyle "lg"',
    blurb: [
      <Paragraph>
        Similarly, within text with textStyle large, alignment can be achieved
        as follows:
      </Paragraph>,
      <CodeBlock>
        {`import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import { withAlignment } from 'bpk-component-icon';
import { lineHeightLg, iconSizeLg, colors } from 'bpk-tokens/tokens/base.es6';
import BpkText from 'bpk-component-text';

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightLg, iconSizeLg
);

<BpkText textStyle="lg" >
  Search
  &nbsp;
  <AlignedArrow fill={colors.colorSkyGrayTint01}/>
</BpkText>
`}
      </CodeBlock>,
    ],
    examples: [
      <BpkText textStyle="lg">
        Search &nbsp;
        <AlignedLargeArrow fill={colors.colorSkyGrayTint01} />
      </BpkText>,
    ],
  },
  {
    id: 'withIcon',
    title: 'Text with textStyle "base" alignment with an icon',
    blurb: [
      <Paragraph>
        If wishing to use an icon taller than the text, alignment must be
        performed on the text as follows:
      </Paragraph>,
      <CodeBlock>
        {`import AwardIcon from 'bpk-component-icon/lg/award';
import { withAlignment } from 'bpk-component-icon';
import { iconSizeLg, lineHeightBase, colors } from 'bpk-tokens/tokens/base.es6';
import BpkText from 'bpk-component-text';

const AlignedSpan = withAlignment(
  'span', iconSizeLg, lineHeightBase
);

<BpkText textStyle="base" >
  <AwardIcon fill={colors.colorSkyGrayTint01} />
  <AlignedSpan >
    &nbsp;
    Search
  </AlignedSpan>
</BpkText>
`}
      </CodeBlock>,
    ],
    examples: [
      <BpkText textStyle="base">
        <AwardIcon fill={colors.colorSkyGrayTint01} />
        <AlignedSpan>&nbsp; Search</AlignedSpan>
      </BpkText>,
    ],
  },
  {
    id: 'smallWithIcon',
    title: 'Text with textStyle "sm" alignment with an icon',
    blurb: [
      <Paragraph>
        Similarly, to use a small text, line height and the BpkText wrapper need
        to use the small size:
      </Paragraph>,
      <CodeBlock>
        {`import AwardIcon from 'bpk-component-icon/lg/award';
import { withAlignment } from 'bpk-component-icon';
import { iconSizeLg, lineHeightSm, colors } from 'bpk-tokens/tokens/base.es6';
import BpkText from 'bpk-component-text';

const AlignedSpanSmall = withAlignment(
  'span', iconSizeLg, lineHeightSm
);

<BpkText textStyle="sm" >
  <AwardIcon fill={colors.colorSkyGrayTint01} />
  <AlignedSpanSmall>
    &nbsp;
    Search
  </AlignedSpanSmall>
</BpkText>
`}
      </CodeBlock>,
    ],
    examples: [
      <BpkText textStyle="sm">
        <AwardIcon fill={colors.colorSkyGrayTint01} />
        <AlignedSpanSmall>&nbsp; Search</AlignedSpanSmall>
      </BpkText>,
    ],
  },
  {
    id: 'withinButton',
    title: 'Icon alignment within a button',
    blurb: [
      <Paragraph>
        HOC wrappers exist for common alignment tasks, such as aligning an icon
        within a button. Other examples can be seen in the{' '}
        <BpkLink href={ROUTES.BUTTON}>Buttons page</BpkLink>.
      </Paragraph>,
      <CodeBlock>
        {`import LongArrowRightIconSm from 'bpk-component-icon/sm/long-arrow-right';
import { withButtonAlignment } from 'bpk-component-icon';
import { colors } from 'bpk-tokens/tokens/base.es6';

const AlignedArrow = withButtonAlignment(LongArrowRightIconSm);

<BpkButton >
  Button Text
  &nbsp;
  <AlignedArrow fill={colors.colorWhite} />
</BpkButton>
`}
      </CodeBlock>,
    ],
    examples: [
      <BpkButton>
        Button Text &nbsp;
        <AlignedButtonArrow fill={colors.colorWhite} />
      </BpkButton>,
    ],
  },
  {
    id: 'withinLargeButton',
    title: 'Icon alignment within a large button',
    blurb: [
      <Paragraph>
        Similarly, a HOC exists for aligning icons to a large button. Other
        examples can be seen in the{' '}
        <BpkLink href={ROUTES.BUTTON}>Buttons page</BpkLink>.
      </Paragraph>,
      <CodeBlock>
        {`import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import { withLargeButtonAlignment } from 'bpk-component-icon';

const AlignedArrow = withLargeButtonAlignment(LongArrowRightIcon);

<BpkButton large >
  Button Text
  &nbsp;
  <AlignedArrow />
</BpkButton>
`}
      </CodeBlock>,
    ],
    examples: [
      <BpkButton large>
        Button Text &nbsp;
        <AlignedLargeButtonArrow fill={colors.colorWhite} />
      </BpkButton>,
    ],
  },
];

const WebAlignmentPage = () => (
  <WebComponentPage examples={components} packageName="bpk-component-icon" />
);

export default WebAlignmentPage;
