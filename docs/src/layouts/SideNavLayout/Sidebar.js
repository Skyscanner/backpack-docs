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

import { Link } from 'react-router-dom';

import { getBackpackLogo } from '../../helpers/logo-helper';

import NavList from './NavList';
import SectionsList from './SectionsList';
import { type Category } from './common-types';

import STYLES from './Sidebar.scss';

import BpkBreakpoint, {
  BREAKPOINTS,
} from 'backpack/packages/bpk-component-breakpoint';
import BpkCloseButton from 'backpack/packages/bpk-component-close-button';
import { cssModules } from 'backpack/packages/bpk-react-utils';

const getClassName = cssModules(STYLES);

type Props = {
  activeSection: string,
  links: Array<Category>,
  sectionListExpanded: boolean,
  onMobileModalClose: () => mixed,
  onMenuToggle: () => mixed,
  onSectionChange: (activeSection: string) => mixed,
};

export default (props: Props) => {
  const {
    activeSection,
    links,
    onMenuToggle,
    onMobileModalClose,
    onSectionChange,
    sectionListExpanded,
  } = props;

  const backpackLogo = getBackpackLogo();

  return (
    <nav className={getClassName('bpkdocs-sidebar')}>
      <div className={getClassName('bpkdocs-sidebar__header')}>
        <BpkBreakpoint query={BREAKPOINTS.TABLET}>
          {isTablet =>
            isTablet && (
              <BpkCloseButton
                aria-expanded="true"
                label="Close menu"
                onClick={onMobileModalClose}
                className={getClassName('bpkdocs-sidebar__close-button')}
              />
            )
          }
        </BpkBreakpoint>
        <Link to="/" className={getClassName('bpkdocs-sidebar__logo-link')}>
          <img
            role="heading"
            aria-level="1"
            src={`/${backpackLogo}`}
            className={getClassName('bpkdocs-sidebar__logo')}
            alt="Backpack"
          />
        </Link>
      </div>
      <div className={getClassName('bpkdocs-sidebar__content')}>
        <SectionsList
          activeSection={activeSection}
          expanded={sectionListExpanded}
          onMenuToggle={onMenuToggle}
          onSectionChange={onSectionChange}
          className={getClassName('bpkdocs-sidebar__section-list')}
        />
        <NavList
          links={links.filter(link => [activeSection].indexOf(link.id) !== -1)}
          dimmed={sectionListExpanded}
          onClick={onMobileModalClose}
          supportsFiltering={activeSection === 'COMPONENTS'}
        />
      </div>
    </nav>
  );
};
