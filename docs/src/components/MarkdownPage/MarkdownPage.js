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
import BpkContentContainer from 'bpk-component-content-container';
import Helmet from 'react-helmet';

import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';
import Heading from '../Heading';
import IntroBlurb from '../IntroBlurb';
import MDXContent from '../MDXContent/MDXContent';

import STYLES from './MarkdownPage.scss';

const getClassName = cssModules(STYLES);

type Props = {
  content: any,
  fileName: string,
  metaData: {
    title: string,
    subtitle: ?string,
    podLink: ?string,
    jitPackLink: ?string,
    npmLink: ?string,
    ghLink: ?string,
  },
};

/*
Front Matter is metadata at the top of a Markdown file, that looks like this:

---
key: value
---

This function removes it from any strings passed in so that it's not rendered.
*/
const removeFrontMatter = input => {
  const inputArr = input.split('---');
  if (inputArr.length < 3) {
    return input;
  }
  return inputArr[2];
};

const editPageLink = fileName => {
  if (!fileName) {
    return '';
  }
  return `

  ## Improve this page

  [Edit this page on GitHub](https://github.com/skyscanner/backpack-docs/edit/master/docs/src/static-pages/${fileName})
  `;
};

const MarkdownPage = (props: Props) => {
  const { content, fileName, metaData } = props;

  // const sanitizedContent = removeFrontMatter(content) + editPageLink(fileName);
  return (
    <>
      <Helmet title={metaData.title} />
      <div className={getClassName('bpkdocs-markdown-page__page-head')}>
        <Heading level="h1">{metaData.title}</Heading>
        {metaData.subtitle && <IntroBlurb>{metaData.subtitle}</IntroBlurb>}
      </div>

      <MDXContent Content={content} />

      {/* <BpkContentContainer
        className={getClassName('bpkdocs-markdown-page__content')}
      >

        <Content />
        <BpkMarkdownRenderer source={sanitizedContent} />
      </BpkContentContainer> */}
    </>
  );
};

export default MarkdownPage;
