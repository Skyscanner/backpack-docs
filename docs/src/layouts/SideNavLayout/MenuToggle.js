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

import STYLES from './MenuToggle.scss';

import { cssModules } from 'backpack/packages/bpk-react-utils';
import MenuIcon from 'backpack/packages/bpk-component-icon/lg/menu';
import BpkCloseButton from 'backpack/packages/bpk-component-close-button';
import BpkBreakpoint, {
  BREAKPOINTS,
} from 'backpack/packages/bpk-component-breakpoint';

const getClassName = cssModules(STYLES);

type Props = {
  onHamburgerClick: (event: SyntheticEvent<>) => mixed,
};

export default (props: Props) => {
  const { onHamburgerClick } = props;

  const menuToggleClassNames = getClassName('bpkdocs-menu-toggle-image');

  const hamburgerMenuClassNames = getClassName(
    'bpkdocs-menu-toggle-image__hamburger',
  );

  return (
    <BpkBreakpoint query={BREAKPOINTS.ABOVE_TABLET}>
      {aboveTablet =>
        !aboveTablet && (
          <div className={menuToggleClassNames}>
            <BpkCloseButton
              aria-expanded="false"
              label="Open menu"
              onClick={onHamburgerClick}
              customIcon={MenuIcon}
              className={hamburgerMenuClassNames}
            />
          </div>
        )
      }
    </BpkBreakpoint>
  );
};
