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

import React, { type Node } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'bpk-react-utils';
import BpkText from 'bpk-component-text';

import STYLES from './BpkDoDont.scss';

const getClassName = cssModules(STYLES);

const DO_DONT_TYPES = ['do', 'dont'];

export type Props = {
  children: Node,
  type: string,
  className: ?string,
};

const BpkDoDont = (props: Props) => {
  const { type, className, children, ...rest } = props;

  const classNames = [getClassName('bpkdocs-do-dont__outer', className)];

  const boxClassNames = [getClassName('bpkdocs-do-dont__box')];
  const textClassNames = [getClassName('bpkdocs-do-dont__text')];

  let titleText = null;

  if (type === 'dont') {
    boxClassNames.push(getClassName('bpkdocs-do-dont__box--dont'));
    textClassNames.push(getClassName('bpkdocs-do-dont__text--dont'));
    titleText = "Don't";
  } else {
    boxClassNames.push(getClassName('bpkdocs-do-dont__box--do'));
    textClassNames.push(getClassName('bpkdocs-do-dont__text--do'));
    titleText = 'Do';
  }

  return (
    // $FlowFixMe[cannot-spread-inexact] - inexact rest. See 'https://github.com/Skyscanner/backpack/blob/main/decisions/flowfixme.md'.
    <div className={classNames.join(' ')} {...rest}>
      <BpkText
        tagName="h4"
        textStyle="base"
        className={textClassNames.join(' ')}
      >
        {titleText}
      </BpkText>
      <div className={boxClassNames.join(' ')}>{children}</div>
    </div>
  );
};

BpkDoDont.propTypes = {
  type: PropTypes.oneOf(DO_DONT_TYPES),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BpkDoDont.defaultProps = {
  type: 'do',
  className: null,
};

export default BpkDoDont;
