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
import BpkText from 'bpk-component-text';

import STYLES from './color-swatch.scss';

const getClassName = cssModules(STYLES);

const ColorSwatch = props => {
  const style = {
    backgroundColor: props.color,
    color: props.textColor,
  };

  const className = getClassName(
    'bpkdocs-color-swatch',
    props.border && 'bpkdocs-color-swatch--border',
    props.className,
  );

  return (
    <div style={style} className={className}>
      <div>
        <BpkText tagName="h3" textStyle="xl" bold>
          {props.name}
        </BpkText>
      </div>
      <div>
        <BpkText tagName="h6">RGB {props.colorValues.RGB}</BpkText>
        <BpkText tagName="h6">HEX {props.colorValues.HEX}</BpkText>
        <BpkText tagName="h6">CMYK {props.colorValues.CMYK}</BpkText>
        <BpkText tagName="h6">PMS {props.colorValues.PMS}</BpkText>
      </div>
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
  }).isRequired,
};

ColorSwatch.defaultProps = {
  color: null,
  textColor: null,
  className: null,
  border: false,
};

export default ColorSwatch;
