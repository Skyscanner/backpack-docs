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

import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';
import getMarkdownString from '../../helpers/markdown-helper';
import ComponentScreenshots from '../DocsPageBuilder/ComponentScreenshots';

import STYLES from './ComponentPage.scss';
import ComponentPage from './ComponentPage';

const getClassName = cssModules(STYLES);

type Props = {
  documentationId: ?string,
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

const AndroidComponentPage = (props: Props) => {
  const {
    documentationId,
    githubPath,
    readme,
    screenshots,
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
  const additionalContent = [
    {
      id: 'readme',
      title: 'Implementation',
      content: (
        <BpkContentContainer bareHtml alternate>
          <BpkMarkdownRenderer source={getMarkdownString(readme)} />
        </BpkContentContainer>
      ),
    },
  ];
  if (documentationId) {
    additionalContent.push({
      id: 'docs',
      title: 'Class reference',
      content: (
        <BpkLink href={`/android/versions/latest/${documentationId}`} blank>
          View on Backpack&apos;s Android documentation
        </BpkLink>
      ),
    });
  }

  additionalContent.push({
    id: 'jitpack',
    title: 'JitPack repository',
    content: (
      <BpkLink
        href="https://jitpack.io/#skyscanner/backpack-android"
        blank
        className={getClassName('bpkdocs-component-page__link')}
      >
        View on JitPack&nbsp;
        {/* eslint-disable backpack/use-components */}
        <img
          src="https://jitpack.io/v/skyscanner/backpack-android.svg"
          alt="View on JitPack"
        />
        {/* eslint-enable backpack/use-components */}
      </BpkLink>
    ),
  });

  additionalContent.push({
    id: 'code',
    title: 'Source code',
    content: (
      <BpkLink
        href={`https://github.com/Skyscanner/backpack-android/tree/master/Backpack/src/main/java/net/skyscanner/backpack/${githubPath}`}
        blank
        className={getClassName('bpkdocs-component-page__link')}
      >
        View on GitHub
      </BpkLink>
    ),
  });

  return (
    <ComponentPage
      usageTable={usageTable}
      examples={screenshotsAsExamples}
      additionalContent={additionalContent}
    />
  );
};

export default AndroidComponentPage;
