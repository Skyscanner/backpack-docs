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

/*
PHILOSOPHY

In the past we had DocsPageBuilder which gained more and more props as
Backpack expanded to support more page types (Android, iOS, tokens, etc), leading to
it being difficult to maintain.

To avoid the mistakes of the past, this component is designed to be very simple
and composable. We only add a new prop when it can't be done as part of `examples`
or `additionalContent`. For example `usageTable` needs to be at the top of the page
with its own table of contents section, so it can't be done in `examples` or `additionalContent`.

When new props *are* necessary, keep them generic and not tied to any specific platform.
*/

import React, { type Node } from 'react';
import { cssModules } from 'bpk-react-utils';
import { BpkList, BpkListItem } from 'bpk-component-list';
import BpkLink from 'bpk-component-link';
import BpkText, { TEXT_STYLES, WEIGHT_STYLES } from 'bpk-component-text';

import UsageTable from '../UsageTable';

import STYLES from './ComponentPage.scss';

const getClassName = cssModules(STYLES);

type ContentType = string | Node;

type Props = {
  examples: Array<{
    id: string,
    title: string,
    blurb?: ContentType,
    content?: ContentType,
  }>,
  additionalContent: ?Array<{
    id: string,
    title: string,
    content: ContentType,
  }>,
  usageTable: ?{
    dos: Array<string>,
    donts: Array<string>,
  },
};

const ComponentPage = (props: Props) => {
  const { additionalContent, examples, usageTable } = props;
  return (
    <div>
      {/* Table of contents */}
      <div className={getClassName('bpkdocs-component-page__section')}>
        <BpkText
          tagName="h2"
          weight={WEIGHT_STYLES.bold}
          className={getClassName(
            'bpkdocs-component-page__table-of-contents-heading',
          )}
        >
          Table of contents
        </BpkText>

        {usageTable && (
          <BpkList>
            <BpkListItem>
              <BpkLink href="#usage">Usage advice</BpkLink>
            </BpkListItem>
          </BpkList>
        )}

        <BpkText
          tagName="h3"
          textStyle={TEXT_STYLES.sm}
          weight={WEIGHT_STYLES.bold}
          className={getClassName(
            'bpkdocs-component-page__table-of-contents-heading',
          )}
        >
          Examples
        </BpkText>
        <BpkList>
          {examples.map(example => (
            <BpkListItem key={example.id}>
              <BpkLink href={`#${example.id}`}>{example.title}</BpkLink>
            </BpkListItem>
          ))}
        </BpkList>

        {additionalContent && (
          <>
            <BpkText
              tagName="h3"
              textStyle={TEXT_STYLES.sm}
              weight={WEIGHT_STYLES.bold}
              className={getClassName(
                'bpkdocs-component-page__table-of-contents-heading',
              )}
            >
              Additional content
            </BpkText>
            <BpkList>
              {additionalContent.map(content => (
                <BpkListItem key={content.id}>
                  <BpkLink href={`#${content.id}`}>{content.title}</BpkLink>
                </BpkListItem>
              ))}
            </BpkList>
          </>
        )}
      </div>

      {/* Usage advice */}
      {usageTable && (
        <div
          id="usage"
          className={getClassName('bpkdocs-component-page__section')}
        >
          <h2
            className={getClassName('bpkdocs-component-page__section-heading')}
          >
            Usage advice
          </h2>
          <UsageTable data={props.usageTable} />
        </div>
      )}

      {/* Examples */}
      {examples.map(example => (
        <div
          key={example.id}
          id={example.id}
          className={getClassName('bpkdocs-component-page__section')}
        >
          <h2
            className={getClassName('bpkdocs-component-page__section-heading')}
          >
            {example.title}
          </h2>
          <div>{example.blurb}</div>
          <div>{example.content}</div>
        </div>
      ))}

      {/* Additional content */}
      {additionalContent &&
        additionalContent.map(content => (
          <div
            id={content.id}
            className={getClassName('bpkdocs-component-page__section')}
          >
            <h2
              className={getClassName(
                'bpkdocs-component-page__section-heading',
              )}
            >
              {content.title}
            </h2>
            {content.content}
          </div>
        ))}
    </div>
  );
};

ComponentPage.defaultProps = {
  additionalContent: null,
  usageTable: null,
};

export default ComponentPage;
