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
import { cssModules } from 'bpk-react-utils';
import Helmet from 'react-helmet';
import BpkContentContainer from 'bpk-component-content-container';

import Heading from '../Heading';
import IntroBlurb from '../IntroBlurb';
import MDXContent from '../MDXContent/MDXContent';

import AdditionalLinks, { PLATFORMS } from './AdditionalLinks';
import STYLES from './MarkdownPage.scss';

const getClassName = cssModules(STYLES);

type Props = {
  content: any,
  fileName: string,
  title: ?string,
  subtitle: ?string,
  platform: ?$Keys<typeof PLATFORMS>,
  documentationId: ?string,
  githubPath: ?string,
};

const MarkdownPage = (props: Props) => {
  const {
    content,
    documentationId,
    githubPath,
    fileName,
    platform,
    subtitle,
    title,
  } = props;

  return (
    <>
      {title && (
        <>
          <Helmet title={title} />
          <div className={getClassName('bpkdocs-markdown-page__page-head')}>
            <Heading level="h1">{title}</Heading>
            {subtitle && <IntroBlurb>{subtitle}</IntroBlurb>}
          </div>
        </>
      )}
      <BpkContentContainer
        className={getClassName('bpkdocs-markdown-page__content')}
      >
        <MDXContent Content={content} fileName={fileName} />
        <AdditionalLinks
          platform={platform}
          documentationId={documentationId}
          githubPath={githubPath}
          fileName={fileName}
        />
      </BpkContentContainer>
    </>
  );
};

export default MarkdownPage;
