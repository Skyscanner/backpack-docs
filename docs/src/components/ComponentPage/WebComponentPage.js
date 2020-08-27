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

import React, { type Node } from 'react';
import BpkLink from 'bpk-component-link';
import BpkContentContainer from 'bpk-component-content-container';

import PresentationBlock from '../PresentationBlock/PresentationBlock';
import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';
import getMarkdownString from '../../helpers/markdown-helper';

import ComponentPage from './ComponentPage';

type Props = {
  examples: Array<{
    id: string,
    dark?: boolean,
    title: string,
    blurb: Node,
    examples: Node,
  }>,
  readme: ?string,
  sassdocId: ?string,
  usageTable: ?{
    dos: Array<string>,
    donts: Array<string>,
  },
};

const WebComponentPage = (props: Props) => {
  const { examples, readme, sassdocId, usageTable } = props;
  const mappedExamples = examples.map(example => {
    return {
      id: example.id,
      title: example.title,
      blurb: example.blurb,
      content: (
        <PresentationBlock
          whiteBackground={!example.dark}
          darkBackground={example.dark}
        >
          {example.examples}
        </PresentationBlock>
      ),
    };
  });

  const additionalContent = [];
  if (readme) {
    additionalContent.push({
      id: 'readme',
      title: 'Implementation',
      content: (
        <BpkContentContainer bareHtml alternate>
          <BpkMarkdownRenderer source={getMarkdownString(readme)} />
        </BpkContentContainer>
      ),
    });
  }
  if (sassdocId) {
    additionalContent.push({
      id: 'docs',
      title: 'Sassdoc',
      content: (
        <BpkLink href={`/sassdoc/#${sassdocId}`} blank>
          View Sass variables and mixins on Backpack&apos;s Sassdoc
        </BpkLink>
      ),
    });
  }

  return (
    <ComponentPage
      usageTable={usageTable}
      examples={mappedExamples}
      readme={readme}
      additionalContent={
        additionalContent.length === 0 ? null : additionalContent
      }
    />
  );
};

export default WebComponentPage;
