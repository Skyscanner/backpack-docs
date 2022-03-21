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

/**
 * This file exists solely for the purpose of exporting sample code blocks as strings to be rendered in the .mdx file
 * as including them directly causes .mdx to attempt to render them as code rather than a big string which causes
 * load errors or blank spaces in the page.
 */

import React from 'react';
import { BpkCodeBlock } from 'bpk-component-code';

import PresentationBlock from 'components/PresentationBlock';

const AlignmentWithBaseTextCode = () => (
  <PresentationBlock>
    <BpkCodeBlock>
      {`import LongArrowRightIconSm from 'bpk-component-icon/sm/long-arrow-right';
import { withAlignment } from 'bpk-component-icon';
import { lineHeightBase, iconSizeSm, colors } from '@skyscanner/bpk-foundations-web/tokens/base.es6';
import BpkText from 'bpk-component-text';

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightBase, iconSizeSm
);

<BpkText textStyle="base">
  Search
  &nbsp;
  <AlignedArrow fill={colors.colorSkyGrayTint01}/>
</BpkText>`}
    </BpkCodeBlock>
  </PresentationBlock>
);

const AlignmentWithLargeTextCode = () => (
  <PresentationBlock>
    <BpkCodeBlock>
      {`import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import { withAlignment } from 'bpk-component-icon';
import { lineHeightLg, iconSizeLg, colors } from '@skyscanner/bpk-foundations-web/tokens/base.es6';
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
    </BpkCodeBlock>
  </PresentationBlock>
);

const IconAlignmentWithBaseTextCode = () => (
  <PresentationBlock>
    <BpkCodeBlock>
      {`import SearchIcon from 'bpk-component-icon/lg/search';
import { withAlignment } from 'bpk-component-icon';
import { iconSizeLg, lineHeightBase, colors } from '@skyscanner/bpk-foundations-web/tokens/base.es6';
import BpkText from 'bpk-component-text';

const AlignedSpan = withAlignment(
  'span', iconSizeLg, lineHeightBase
);

<BpkText textStyle="base" >
  <SearchIcon fill={colors.colorSkyGrayTint01} />
  <AlignedSpan>
    &nbsp;
    Search
  </AlignedSpan>
</BpkText>
`}
    </BpkCodeBlock>
  </PresentationBlock>
);

const IconAlignmentWithSmTextCode = () => (
  <PresentationBlock>
    <BpkCodeBlock>
      {`import SearchIcon from 'bpk-component-icon/lg/search';
import { withAlignment } from 'bpk-component-icon';
import { iconSizeLg, lineHeightSm, colors } from '@skyscanner/bpk-foundations-web/tokens/base.es6';
import BpkText from 'bpk-component-text';

const AlignedSpanSmall = withAlignment(
  'span', iconSizeLg, lineHeightSm
);

<BpkText textStyle="sm" >
  <SearchIcon fill={colors.colorSkyGrayTint01} />
  <AlignedSpanSmall>
    &nbsp;
    Search
  </AlignedSpanSmall>
</BpkText>
`}
    </BpkCodeBlock>
  </PresentationBlock>
);

const IconAlignmentWithButton = () => (
  <PresentationBlock>
    <BpkCodeBlock>
      {`import LongArrowRightIconSm from 'bpk-component-icon/sm/long-arrow-right';
import { withButtonAlignment } from 'bpk-component-icon';
import { colors } from '@skyscanner/bpk-foundations-web/tokens/base.es6';

const AlignedArrow = withButtonAlignment(LongArrowRightIconSm);

<BpkButton >
  Button Text
  &nbsp;
  <AlignedArrow fill={colors.colorWhite} />
</BpkButton>
`}
    </BpkCodeBlock>
  </PresentationBlock>
);

const IconAlignmentWithLargeButton = () => (
  <PresentationBlock>
    <BpkCodeBlock>
      {`import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import { withLargeButtonAlignment } from 'bpk-component-icon';

const AlignedArrow = withLargeButtonAlignment(LongArrowRightIcon);

<BpkButton large >
  Button Text
  &nbsp;
  <AlignedArrow />
</BpkButton>
`}
    </BpkCodeBlock>
  </PresentationBlock>
);

export {
  AlignmentWithBaseTextCode,
  AlignmentWithLargeTextCode,
  IconAlignmentWithBaseTextCode,
  IconAlignmentWithSmTextCode,
  IconAlignmentWithButton,
  IconAlignmentWithLargeButton,
};
