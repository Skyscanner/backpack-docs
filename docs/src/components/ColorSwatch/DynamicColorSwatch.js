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

import STYLES from './color-swatch.scss';

import { cssModules } from 'backpack/packages/bpk-react-utils';
import BpkText, { WEIGHT_STYLES } from 'backpack/packages/bpk-component-text';

const getClassName = cssModules(STYLES);

const DynamicColorSwatch = props => {
  const {
    name,
    lightColorName,
    darkColorName,
    lightColor,
    darkColor,
    textColor,
    border,
    className: userClassName,
    ...rest
  } = props;
  const style = {
    backgroundColor: lightColor,
    color: textColor,
    background: `linear-gradient(0.375turn, ${lightColor} 80%, ${darkColor} 50%)`,
  };

  const className = getClassName(
    'bpkdocs-color-swatch',
    border && 'bpkdocs-color-swatch--border',
    userClassName,
  );

  return (
    <div style={style} className={className} {...rest}>
      <div>
        <BpkText tagName="h3" textStyle="xl" weight={WEIGHT_STYLES.bold}>
          {name}
        </BpkText>
      </div>
      <div>
        <BpkText tagName="h6">light: {lightColorName}</BpkText>
        <BpkText tagName="h6">dark: {darkColorName}</BpkText>
      </div>
    </div>
  );
};

DynamicColorSwatch.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  lightColorName: PropTypes.string,
  darkColorName: PropTypes.string,
  lightColor: PropTypes.string,
  darkColor: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.bool,
};

DynamicColorSwatch.defaultProps = {
  lightColorName: null,
  darkColorName: null,
  lightColor: null,
  darkColor: null,
  textColor: null,
  className: null,
  border: false,
};

export default DynamicColorSwatch;
