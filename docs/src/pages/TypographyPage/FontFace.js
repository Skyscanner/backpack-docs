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

import React from 'react';
import PropTypes from 'prop-types';
import BpkText from 'bpk-component-text';
import { cssModules } from 'bpk-react-utils';

import STYLES from './font-face.scss';

const getClassName = cssModules(STYLES);

const FontFace = props => {
  const { className, ...rest } = props;

  return (
    <div
      aria-label="Example of the Skyscanner Relative fontface"
      className={getClassName('bpk-docs-font-face', className)}
      {...rest}
    >
      <BpkText
        aria-hidden="true"
        className={getClassName('bpk-docs-font-face__text')}
        textStyle="xxl"
      >
        Book AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </BpkText>
      <BpkText
        aria-hidden="true"
        className={getClassName(
          'bpk-docs-font-face__text',
          'bpk-docs-font-face__text--medium',
        )}
        textStyle="xxl"
      >
        Medium AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </BpkText>
      <BpkText
        aria-hidden="true"
        className={getClassName('bpk-docs-font-face__text')}
        textStyle="xxl"
        bold
      >
        Bold AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </BpkText>
      <BpkText
        aria-hidden="true"
        className={getClassName(
          'bpk-docs-font-face__text',
          'bpk-docs-font-face__text--black',
        )}
        textStyle="xxl"
      >
        Black AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </BpkText>
    </div>
  );
};

FontFace.propTypes = {
  className: PropTypes.string,
};

FontFace.defaultProps = {
  className: null,
};

export default FontFace;
