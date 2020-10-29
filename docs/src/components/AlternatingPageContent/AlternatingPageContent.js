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
import { cssModules } from 'bpk-react-utils';

import STYLES from './AlternatingPageContent.scss';

const getClassName = cssModules(STYLES);

type Props = {
  // We've deprecated this prop. Eventually this entire component can go.
  // eslint-disable-next-line react/no-unused-prop-types
  invert: boolean,
  sections: Array<?Node>,
};

const AlternatingPageContent = (props: Props) => (
  <section className={getClassName('bpkdocs-alternating-content')}>
    {React.Children.toArray(
      props.sections
        .filter(x => x)
        .map(section => {
          const classNames = [
            getClassName('bpkdocs-alternating-content__section'),
          ];

          return <div className={classNames.join(' ')}>{section}</div>;
        }),
    )}
  </section>
);

export default AlternatingPageContent;
