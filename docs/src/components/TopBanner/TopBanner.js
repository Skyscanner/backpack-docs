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

import React, { type Node } from 'react';

import STYLES from './TopBanner.scss';

import { cssModules } from 'backpack/packages/bpk-react-utils';
import BpkLink from 'backpack/packages/bpk-component-link';

const getClassName = cssModules(STYLES);

type Props = {
  children: Node,
  className: ?string,
  links: Array<{ title: string, href: string }>,
};

const TopBanner = (props: Props) => {
  const { children, className, links, ...rest } = props;
  return (
    <div {...rest} className={getClassName('bpkdocs-top-banner', className)}>
      {children}
      <div>
        {links.map(link => (
          <BpkLink
            href={link.href}
            className={getClassName('bpkdocs-top-banner__link')}
          >
            {link.title}
          </BpkLink>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
