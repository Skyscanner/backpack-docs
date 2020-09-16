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
import { cssModules } from 'bpk-react-utils';
import React from 'react';
import BpkContentContainer from 'bpk-component-content-container';
import BpkLink from 'bpk-component-link';

import ComponentScreenshots from '../DocsPageBuilder/ComponentScreenshots';
import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';
import getMarkdownString from '../../helpers/markdown-helper';

import STYLES from './ComponentPage.scss';
import ComponentPage from './ComponentPage';

const getClassName = cssModules(STYLES);

type Props = {
  readme: string,
  screenshots: [
    {
      blurb: ?string,
      id: string,
      screenshots: [
        {
          altText: string,
          height: number,
          src: string,
          subText: string,
          title: string,
          width: number,
        },
      ],
      title: string,
    },
  ],
  usageTable: ?{
    dos: Array<string>,
    donts: Array<string>,
  },
  githubPath: string,
};

const NativeComponentPage = (props: Props) => {
  const { githubPath, readme, screenshots, usageTable } = props;
  const screenshotsAsExamples = screenshots.map(screenshotSet => ({
    id: screenshotSet.id,
    title: screenshotSet.title,
    content: (
      <>
        {screenshotSet.blurb && <p>{screenshotSet.blurb}</p>}
        <ComponentScreenshots screenshots={screenshotSet.screenshots} />
      </>
    ),
  }));
  return (
    <ComponentPage
      usageTable={usageTable}
      examples={screenshotsAsExamples}
      additionalContent={[
        {
          id: 'readme',
          title: 'Implementation',
          content: (
            <BpkContentContainer bareHtml alternate>
              <BpkMarkdownRenderer source={getMarkdownString(readme)} />
            </BpkContentContainer>
          ),
        },
        {
          id: 'npm',
          title: 'npm package',
          content: (
            <BpkLink
              href="https://www.npmjs.com/package/backpack-react-native"
              blank
              className={getClassName('bpkdocs-web-component-page__link')}
            >
              View on npm&nbsp;
              {/* eslint-disable backpack/use-components */}
              <img
                src="https://badge.fury.io/js/backpack-react-native.svg"
                alt="View backpack-react-native on npm"
                height={18}
              />
              {/* eslint-enable backpack/use-components */}
            </BpkLink>
          ),
        },
        {
          id: 'code',
          title: 'Source code',
          content: (
            <BpkLink
              href={`https://github.com/Skyscanner/backpack-react-native/tree/master/lib/${githubPath}`}
              blank
              className={getClassName('bpkdocs-web-component-page__link')}
            >
              View on GitHub
            </BpkLink>
          ),
        },
      ]}
    />
  );
};

export default NativeComponentPage;
