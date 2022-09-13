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
import BpkText, { TEXT_STYLES } from 'backpack/packages/bpk-component-text';

const getClassName = cssModules(STYLES);

const ColorSwatch = (props) => {
  const {
    border,
    className: userClassName,
    color,
    colorValues,
    name,
    textColor,
    ...rest
  } = props;
  const style = {
    backgroundColor: color,
    color: textColor,
  };

  const className = getClassName(
    'bpkdocs-color-swatch',
    border && 'bpkdocs-color-swatch--border',
    userClassName,
  );

  return (
    <div style={style} className={className} {...rest}>
      <div>
        <BpkText tagName="h3" textStyle={TEXT_STYLES.heading3}>
          {name}
        </BpkText>
      </div>
      {colorValues && (
        <div>
          <BpkText tagName="h6">RGB {colorValues.RGB}</BpkText>
          <BpkText tagName="h6">HEX {colorValues.HEX}</BpkText>
          <BpkText tagName="h6">CMYK {colorValues.CMYK}</BpkText>
          {colorValues.PMS && (
            <BpkText tagName="h6">PMS {colorValues.PMS}</BpkText>
          )}
        </div>
      )}
    </div>
  );
};

ColorSwatch.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.bool,
  colorValues: PropTypes.shape({
    RGB: PropTypes.string,
    HEX: PropTypes.string,
    CMYK: PropTypes.string,
    PMS: PropTypes.string,
  }),
};

ColorSwatch.defaultProps = {
  color: null,
  textColor: null,
  className: null,
  border: false,
  colorValues: null,
};

export default ColorSwatch;
