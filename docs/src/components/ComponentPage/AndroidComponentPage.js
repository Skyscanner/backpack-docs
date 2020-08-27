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
import BpkLink from 'bpk-component-link';
import BpkContentContainer from 'bpk-component-content-container';

import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';
import getMarkdownString from '../../helpers/markdown-helper';
import ComponentScreenshots from '../DocsPageBuilder/ComponentScreenshots';

import ComponentPage from './ComponentPage';

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
};

const AndroidComponentPage = (props: Props) => {
  const { documentationId, screenshots, readme, usageTable } = props;
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
  return (
    <ComponentPage
      usageTable={usageTable}
      examples={screenshotsAsExamples}
      additionalContent={additionalContent}
    />
  );
};

export default AndroidComponentPage;
