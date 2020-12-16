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

import _ from 'lodash';
import React from 'react';
import BpkButton from 'bpk-component-button';
import { withButtonAlignment } from 'bpk-component-icon';
import BpkSmallDownloadIcon from 'bpk-component-icon/sm/download';
import icons from 'bpk-component-icon/all';

import IntroBlurb from 'components/IntroBlurb';
import IconSearchApp from 'components/IconSearchApp';
import DocsPageBuilder from 'components/DocsPageBuilder';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
// This file can actually be resolved eslint is just confused
// eslint-disable-next-line import/no-webpack-loader-syntax, import/extensions
import iconsSvgs from '!!file-loader?name=[name].[hash].zip!zip-it-loader!./../../../../../node_modules/bpk-svgs/src/icons/icons';

const AlignedBpkSmallDownloadIcon = withButtonAlignment(BpkSmallDownloadIcon);

const friendlyNameMap = {
  sm: 'Small',
  lg: 'Large',
};

const getFriendlyName = id => friendlyNameMap[id] || id;

const iconsFinal = _(icons)
  .flatMap((category, categoryId) =>
    Object.keys(category).map(name => ({
      name,
      categoryId,
      categoryName: getFriendlyName(categoryId),
      component: category[name],
    })),
  )
  .value();

const blurb = [
  <IntroBlurb>
    Skyscanner&apos;s icons are designed to be simple, modern, friendly, and
    sometimes quirky. Each icon is reduced to its minimal form, expressing
    essential characteristics.
  </IntroBlurb>,
  <Heading level="h2">Find the right icon</Heading>,
  <Paragraph>
    On web, icons are available at 18px and 24px. In apps, icons are available
    at 16px and 24px.
  </Paragraph>,
  <Paragraph>Some icons are only available at one size.</Paragraph>,
  <IconSearchApp icons={iconsFinal} />,
  <Paragraph>
    <BpkButton href={`/${iconsSvgs}`}>
      Download SVG files <AlignedBpkSmallDownloadIcon />
    </BpkButton>
  </Paragraph>,
];

const IconsDesignPage = ({ ...rest }) => (
  <DocsPageBuilder title="Icons" blurb={blurb} {...rest} />
);

export default IconsDesignPage;
