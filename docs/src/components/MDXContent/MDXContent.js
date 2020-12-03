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
import { MDXProvider } from '@mdx-js/react';
import { cssModules } from 'bpk-react-utils';
import BpkContentContainer from 'bpk-component-content-container';

import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';

import STYLES from './MDXContent.scss';

const getClassName = cssModules(STYLES);

type Props = {
  Content: any,
  fileName: string,
};

const editPageLink = fileName => {
  return `

  ## Improve this page

  [Edit this page on GitHub](https://github.com/skyscanner/backpack-docs/edit/master/docs/src/static-pages/${fileName})
  `;
};

const MDXContent = (props: Props) => {
  const { Content, fileName } = props;

  return (
    <BpkContentContainer className={getClassName('bpkdocs-mdx-page__content')}>
      <MDXProvider>
        <Content />
        {fileName && <BpkMarkdownRenderer source={editPageLink(fileName)} />}
      </MDXProvider>
    </BpkContentContainer>
  );
};

export default MDXContent;
