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

import AlternatingPageContent from '../AlternatingPageContent';
import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';
import Heading from '../Heading';
import IntroBlurb from '../IntroBlurb';

import { parseSections } from './MarkdownUtils';
import STYLES from './MarkdownPage.scss';

const getClassName = cssModules(STYLES);

type Props = {
  title: string,
  subtitle: ?string,
  content: string,
};

const MarkdownPage = (props: Props) => {
  const sections = parseSections(props.content).map(section => (
    <BpkMarkdownRenderer source={section} />
  ));

  return (
    <>
      <Helmet title={props.title} />
      <div className={getClassName('bpkdocs-markdown-page__page-head')}>
        <Heading level="h1">{props.title}</Heading>
        {props.subtitle && <IntroBlurb>{props.subtitle}</IntroBlurb>}
      </div>
      <BpkContentContainer bareHtml>
        <AlternatingPageContent sections={sections} invert={false} />
      </BpkContentContainer>
    </>
  );
};

MarkdownPage.defaultProps = {
  subtitle: null,
};

export default MarkdownPage;
