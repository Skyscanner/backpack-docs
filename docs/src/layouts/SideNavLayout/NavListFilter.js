/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2021 Skyscanner Ltd
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

import { cssModules } from '../../../../backpack/packages/bpk-react-utils';
import BpkRadio from '../../../../backpack/packages/bpk-component-radio';

import STYLES from './NavListFilter.scss';

const getClassName = cssModules(STYLES);

const OPTIONS = {
  all: 'all',
  web: 'web',
  native: 'native',
  android: 'android',
  compose: 'compose',
  ios: 'ios',
};

export type Option = $Keys<typeof OPTIONS>;

type Props = {
  selected: Option,
  onSelectedFilterChange: Option => mixed,
  className: ?string,
};

const NavListFilter = (props: Props) => (
  <form className={getClassName('bpkdocs-nav-list-filter', props.className)}>
    <BpkRadio
      className={getClassName('bpkdocs-nav-list-filter__option')}
      value={OPTIONS.all}
      name="filter"
      label="All"
      checked={props.selected === OPTIONS.all}
      onChange={e =>
        e.currentTarget.value === OPTIONS.all &&
        props.onSelectedFilterChange(OPTIONS.all)
      }
      white
    />
    <BpkRadio
      className={getClassName('bpkdocs-nav-list-filter__option')}
      value={OPTIONS.web}
      name="filter"
      label="Web"
      checked={props.selected === OPTIONS.web}
      onChange={e =>
        e.currentTarget.value === OPTIONS.web &&
        props.onSelectedFilterChange(OPTIONS.web)
      }
      white
    />
    <BpkRadio
      className={getClassName('bpkdocs-nav-list-filter__option')}
      value={OPTIONS.native}
      name="filter"
      label="React Native"
      checked={props.selected === OPTIONS.native}
      onChange={e =>
        e.currentTarget.value === OPTIONS.native &&
        props.onSelectedFilterChange(OPTIONS.native)
      }
      white
    />
    <BpkRadio
      className={getClassName('bpkdocs-nav-list-filter__option')}
      value={OPTIONS.android}
      name="filter"
      label="Android"
      checked={props.selected === OPTIONS.android}
      onChange={e =>
        e.currentTarget.value === OPTIONS.android &&
        props.onSelectedFilterChange(OPTIONS.android)
      }
      white
    />
    <BpkRadio
      className={getClassName('bpkdocs-nav-list-filter__option')}
      value={OPTIONS.compose}
      name="filter"
      label="Compose (Preview)"
      checked={props.selected === OPTIONS.compose}
      onChange={e =>
        e.currentTarget.value === OPTIONS.compose &&
        props.onSelectedFilterChange(OPTIONS.compose)
      }
      white
    />
    <BpkRadio
      className={getClassName('bpkdocs-nav-list-filter__option')}
      value={OPTIONS.ios}
      name="filter"
      label="iOS"
      checked={props.selected === OPTIONS.ios}
      onChange={e =>
        e.currentTarget.value === OPTIONS.ios &&
        props.onSelectedFilterChange(OPTIONS.ios)
      }
      white
    />
  </form>
);

NavListFilter.defaultProps = {
  selected: 'all',
  className: null,
};

export default NavListFilter;
