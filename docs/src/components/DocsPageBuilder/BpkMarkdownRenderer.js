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

// Uses https://github.com/rexxars/react-markdown

import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'bpk-react-utils';
import {
  BpkTable,
  BpkTableHead,
  BpkTableBody,
  BpkTableRow,
  BpkTableCell,
  BpkTableHeadCell,
} from 'bpk-component-table';
import BpkText from 'bpk-component-text';
import { BpkCodeBlock } from 'bpk-component-code';
import BpkMobileScrollContainer from 'bpk-component-mobile-scroll-container';
import ReactMarkdown from 'react-markdown';
import BpkLink from 'bpk-component-link';
import BpkBlockquote from 'bpk-component-blockquote';

import Paragraph from '../Paragraph';

import STYLES from './BpkMarkdownRenderer.scss';

const getClassName = cssModules(STYLES);

const TAG_NAMES = ['h1', 'h1', 'h2', 'h3', 'h4'];
const TEXT_STYLES = ['xxl', 'xxl', 'xl', 'lg', 'base'];

export type Props = {
  darkBackground: boolean,
};

const BpkMarkdownRenderer = (props: Props) => {
  const { darkBackground, ...rest } = props;

  const renderers = {};

  renderers.paragraph = Paragraph;
  renderers.link = BpkLink;
  renderers.blockquote = BpkBlockquote;
  renderers.tableRow = BpkTableRow;
  renderers.tableHead = BpkTableHead;
  renderers.tableBody = BpkTableBody;

  renderers.tableCell = tableCellProps => {
    const { isHeader, ...tableCellRest } = tableCellProps;
    const CellComponent = isHeader ? BpkTableHeadCell : BpkTableCell;
    return <CellComponent {...tableCellRest} />;
  };

  renderers.image = imageProps => {
    const { alt, src, ...imageRest } = imageProps;
    return (
      // Can't use BpkImage here because it requires us to know width and height.
      /* eslint-disable-next-line backpack/use-components */
      <img
        alt={alt}
        src={src}
        className={getClassName('bpkdocs-markdown-renderer__image')}
        {...imageRest}
      />
    );
  };

  renderers.table = tableProps => {
    const { children, ...tableRest } = tableProps;
    return (
      <BpkMobileScrollContainer
        className={getClassName(
          'bpkdocs-markdown-renderer__mobile-scroll-container',
        )}
        trailingIndicatorClassName={getClassName(
          `bpkdocs-markdown-renderer__mobile-scroll-indicator--trailing${
            darkBackground ? '--dark' : '--light'
          }`,
        )}
        leadingIndicatorClassName={getClassName(
          `bpkdocs-markdown-renderer__mobile-scroll-indicator--leading${
            darkBackground ? '--dark' : '--light'
          }`,
        )}
        {...tableRest}
      >
        <BpkTable className={getClassName('bpkdocs-markdown-renderer__table')}>
          {children}
        </BpkTable>
      </BpkMobileScrollContainer>
    );
  };

  renderers.heading = headingProps => {
    const { level, children, ...headingRest } = headingProps;

    const flatten = (text, child) => {
      return typeof child === 'string'
        ? text + child
        : React.Children.toArray(child.props.children).reduce(flatten, text);
    };

    // https://github.com/remarkjs/react-markdown/issues/69#issuecomment-289860367
    const id = React.Children.toArray(children)
      .reduce(flatten, '')
      .toLowerCase()
      .replace(/\W/g, '-');

    return (
      <BpkText
        id={id}
        textStyle={TEXT_STYLES[level]}
        tagName={TAG_NAMES[level]}
        className={getClassName(`bpkdocs-markdown-renderer__heading-${level}`)}
        {...headingRest}
      >
        {children}
      </BpkText>
    );
  };

  renderers.code = codeBlockProps => {
    const { language, value, ...codeBlockRest } = codeBlockProps;
    return <BpkCodeBlock {...codeBlockRest}>{value}</BpkCodeBlock>;
  };
  // $FlowFixMe[cannot-spread-inexact] - inexact rest. See 'https://github.com/Skyscanner/backpack/blob/master/decisions/flowfixme.md'.
  return <ReactMarkdown renderers={renderers} {...rest} />;
};

BpkMarkdownRenderer.propTypes = {
  source: PropTypes.string.isRequired,
  darkBackground: PropTypes.bool,
};

BpkMarkdownRenderer.defaultProps = {
  darkBackground: false,
};

export default BpkMarkdownRenderer;
