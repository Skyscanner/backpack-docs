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

import PropTypes from 'prop-types';
import React from 'react';

import STYLES from './IconSearchForm.scss';

import BpkInput, { INPUT_TYPES } from 'backpack/packages/bpk-component-input';
import { cssModules } from 'backpack/packages/bpk-react-utils';
import BpkFieldset from 'backpack/packages/bpk-component-fieldset';

const getClassName = cssModules(STYLES);
const FILTER_INPUT_ID = 'icon_search_form_filter';

const IconSearchForm = (props) => {
  const { filterValue, onFilterChange } = props;

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={getClassName('bpkdocs-icon-search-form')}
    >
      <BpkFieldset
        label="Filter"
        id="icon-search"
        className={getClassName('bpkdocs-icon-search-form__fieldset')}
      >
        <BpkInput
          id={FILTER_INPUT_ID}
          type={INPUT_TYPES.TEXT}
          name="filter"
          value={filterValue}
          onChange={(e) => onFilterChange(e.target.value)}
          placeholder="Filter by name"
        />
      </BpkFieldset>
    </form>
  );
};

IconSearchForm.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default IconSearchForm;
