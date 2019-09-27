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

import PropTypes from 'prop-types';
import React from 'react';
import { cssModules } from 'bpk-react-utils';

import STYLES from './color-swatch.scss';

const getClassName = cssModules(STYLES);

const ColorSwatch = props => {
  const style = {
    backgroundColor: props.color,
    backgroundImage: props.gradient,
    color: props.textColor,
  };

  const className = getClassName(
    'bpkdocs-color-swatch',
    props.whiteColor && 'bpkdocs-color-swatch--light',
    props.border && 'bpkdocs-color-swatch--border',
    props.className,
  );

  return (
    <div style={style} className={className}>
      <strong>{props.name}</strong>
    </div>
  );
};

ColorSwatch.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  whiteColor: PropTypes.bool,
  border: PropTypes.bool,
  gradient: PropTypes.string,
};

ColorSwatch.defaultProps = {
  color: null,
  textColor: null,
  className: null,
  whiteColor: false,
  border: false,
  gradient: null,
};

export default ColorSwatch;
