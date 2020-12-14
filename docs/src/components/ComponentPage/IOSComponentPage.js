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
import BpkLink from 'bpk-component-link';
import BpkContentContainer from 'bpk-component-content-container';

import ComponentScreenshots from '../DocsPageBuilder/ComponentScreenshots';
import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';
import getMarkdownString from '../../helpers/markdown-helper';

import STYLES from './ComponentPage.scss';
import ComponentPage from './ComponentPage';

const getClassName = cssModules(STYLES);

type Props = {
  documentationId: string,
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

const IOSComponentPage = (props: Props) => {
  const {
    documentationId,
    githubPath,
    screenshots,
    readme,
    usageTable,
  } = props;
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
      examples={screenshotsAsExamples}
      readme={readme}
      usageTable={usageTable}
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
          id: 'docs',
          title: 'Class reference',
          content: (
            <BpkLink
              href={`/ios/versions/latest/Classes/${documentationId}.html`}
              blank
            >
              View on Backpack&apos;s iOS documentation
            </BpkLink>
          ),
        },
        {
          id: 'cocoapods',
          title: 'CocoaPod',
          content: (
            <BpkLink
              href="https://cocoapods.org/pods/Backpack"
              blank
              className={getClassName('bpkdocs-component-page__link')}
            >
              View on CocoaPods&nbsp;
              <img
                src="https://img.shields.io/cocoapods/v/Backpack.svg?style=flat"
                alt="View on CocoaPods"
              />
            </BpkLink>
          ),
        },
        {
          id: 'code',
          title: 'Source code',
          content: (
            <BpkLink
              href={`https://github.com/Skyscanner/backpack-ios/tree/master/Backpack/${githubPath}`}
              blank
              className={getClassName('bpkdocs-component-page__link')}
            >
              View on GitHub
            </BpkLink>
          ),
        },
      ]}
    />
  );
};

export default IOSComponentPage;
