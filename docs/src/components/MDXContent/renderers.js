/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
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

import Paragraph from '../Paragraph';

import STYLES from './MDXContent.scss';

import { cssModules } from 'backpack/packages/bpk-react-utils';
import {
  BpkTable,
  BpkTableHead,
  BpkTableBody,
  BpkTableRow,
  BpkTableCell,
  BpkTableHeadCell,
} from 'backpack/packages/bpk-component-table';
import BpkText from 'backpack/packages/bpk-component-text';
import { BpkCodeBlock } from 'backpack/packages/bpk-component-code';
import BpkMobileScrollContainer from 'backpack/packages/bpk-component-mobile-scroll-container';
import BpkLink from 'backpack/packages/bpk-component-link';
import BpkBlockquote from 'backpack/packages/bpk-component-blockquote';

const getClassName = cssModules(STYLES);

const TAG_NAMES = ['h1', 'h2', 'h3', 'h4', 'h5'];
const TEXT_STYLES = ['xxl', 'xl', 'lg', 'base', 'sm'];

const Renderer = () => {
  const renderers = {};

  renderers.a = BpkLink;
  renderers.blockquote = BpkBlockquote;

  renderers.code = (codeBlockProps: { children: any }) => {
    const { ...rest } = codeBlockProps;
    return <BpkCodeBlock {...rest} alternate />;
  };

  TAG_NAMES.forEach(tag => {
    renderers[tag] = (headingProps: { children: string }) => {
      const { children, ...headingRest } = headingProps;

      const flatten = (text, child) =>
        typeof child === 'string'
          ? text + child
          : React.Children.toArray(child.props.children).reduce(flatten, text);

      // https://github.com/remarkjs/react-markdown/issues/69#issuecomment-289860367
      const id = React.Children.toArray(children)
        .reduce(flatten, '')
        .toLowerCase()
        .replace(/\W/g, '-');

      return (
        // $FlowFixMe[cannot-spread-inexact] - inexact rest. See 'https://github.com/Skyscanner/backpack/blob/main/decisions/flowfixme.md'.
        <BpkText
          id={id}
          textStyle={TEXT_STYLES[TAG_NAMES.indexOf(tag)]}
          tagName={tag}
          className={getClassName(`bpkdocs-mdx-page__heading-${tag}`)}
          {...headingRest}
        >
          {children}
        </BpkText>
      );
    };
  });

  renderers.img = (imageProps: { alt: string, src: string }) => {
    const { alt, src, ...imageRest } = imageProps;
    return (
      // $FlowFixMe[cannot-spread-inexact] - inexact rest. See 'https://github.com/Skyscanner/backpack/blob/main/decisions/flowfixme.md'.
      <img
        alt={alt}
        src={src}
        className={getClassName('bpkdocs-mdx-page__image')}
        {...imageRest}
      />
    );
  };

  renderers.p = Paragraph;

  renderers.table = (tableProps: { children: any }) => {
    const { children, ...tableRest } = tableProps;
    return (
      // $FlowFixMe[cannot-spread-inexact] - inexact rest. See 'https://github.com/Skyscanner/backpack/blob/main/decisions/flowfixme.md'.
      <BpkMobileScrollContainer
        className={getClassName('bpkdocs-mdx-page__mobile-scroll-container')}
        trailingIndicatorClassName={getClassName(
          `bpkdocs-mdx-page__mobile-scroll-indicator--trailing`,
        )}
        leadingIndicatorClassName={getClassName(
          `bpkdocs-mdx-page__mobile-scroll-indicator--leading$`,
        )}
        {...tableRest}
      >
        <BpkTable className={getClassName('bpkdocs-mdx-page__table')}>
          {children}
        </BpkTable>
      </BpkMobileScrollContainer>
    );
  };

  renderers.thead = BpkTableHead;
  renderers.tbody = BpkTableBody;
  renderers.tr = BpkTableRow;

  renderers.th = (tableCellProps: { children: any, isHeader: boolean }) => {
    const { isHeader, ...tableCellRest } = tableCellProps;
    // $FlowFixMe[cannot-spread-inexact] - inexact rest. See 'https://github.com/Skyscanner/backpack/blob/main/decisions/flowfixme.md'.
    return <BpkTableHeadCell alternate {...tableCellRest} />;
  };

  renderers.td = (tableCellProps: { children: any, isHeader: boolean }) => {
    const { isHeader, ...tableCellRest } = tableCellProps;
    // $FlowFixMe[cannot-spread-inexact] - inexact rest. See 'https://github.com/Skyscanner/backpack/blob/main/decisions/flowfixme.md'.
    return <BpkTableCell {...tableCellRest} />;
  };

  return renderers;
};

export default Renderer;
