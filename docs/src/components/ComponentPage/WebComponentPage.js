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
import React, { type Node } from 'react';
import BpkLink from 'bpk-component-link';
import BpkContentContainer from 'bpk-component-content-container';

import PresentationBlock from '../PresentationBlock/PresentationBlock';
import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';
import getMarkdownString from '../../helpers/markdown-helper';

import STYLES from './ComponentPage.scss';
import ComponentPage from './ComponentPage';

const getClassName = cssModules(STYLES);

type Props = {
  examples: Array<{
    id: string,
    dark?: boolean,
    title: string,
    blurb: Node,
    examples: ?Node,
  }>,
  readme: ?string,
  sassdocId: ?string,
  usageTable: ?{
    dos: Array<string>,
    donts: Array<string>,
  },
  packageName: string,
};

const WebComponentPage = (props: Props) => {
  const { examples, packageName, readme, sassdocId, usageTable } = props;
  const mappedExamples = examples.map(example => {
    return {
      id: example.id,
      title: example.title,
      blurb: example.blurb,
      content: example.examples ? (
        <PresentationBlock
          whiteBackground={!example.dark}
          darkBackground={example.dark}
        >
          {example.examples}
        </PresentationBlock>
      ) : null,
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
  additionalContent.push({
    id: 'npm',
    title: 'npm package',
    content: (
      <BpkLink
        href={`https://www.npmjs.com/package/${packageName}`}
        blank
        className={getClassName('bpkdocs-component-page__link')}
      >
        View on npm&nbsp;
        <img
          src={`https://badge.fury.io/js/${packageName}.svg`}
          alt={`View ${packageName} on npm`}
          height={18}
        />
      </BpkLink>
    ),
  });
  additionalContent.push({
    id: 'code',
    title: 'Source code',
    content: (
      <BpkLink
        href={`https://github.com/Skyscanner/backpack/tree/master/packages/${packageName}`}
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
      examples={mappedExamples}
      readme={readme}
      additionalContent={
        additionalContent.length === 0 ? null : additionalContent
      }
    />
  );
};

export default WebComponentPage;
