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
import { cssModules } from 'bpk-react-utils';
import BpkAriaLive, {
  ARIA_LIVE_POLITENESS_SETTINGS,
} from 'bpk-component-aria-live';

import Paragraph from '../Paragraph';

import STYLES from './AriaLiveDemo.scss';

const getClassName = cssModules(STYLES);

const AriaLiveDemo = props => {
  const { preamble, children, className, style, visible, ...rest } = props;

  return (
    <div
      className={getClassName('bpk-docs-aria-live-demo', className)}
      style={style}
    >
      <Paragraph>
        <strong>ARIA live region:</strong>
      </Paragraph>
      <Paragraph>
        {visible
          ? 'This content is relevant to everyone, not just assistive technologies, so it is permanently visible.'
          : 'This would usually be visually hidden, and only visible to assistive technologies. It is visible here for demo purposes.'}
      </Paragraph>
      {preamble}
      <BpkAriaLive
        visible
        className={getClassName('bpk-docs-aria-live-demo__aria-content')}
        politenessSetting={ARIA_LIVE_POLITENESS_SETTINGS.assertive}
        {...rest}
      >
        {children}
      </BpkAriaLive>
    </div>
  );
};

AriaLiveDemo.propTypes = {
  preamble: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  visible: PropTypes.boolean,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

AriaLiveDemo.defaultProps = {
  preamble: null,
  children: null,
  className: null,
  visible: false,
  style: null,
};

export default AriaLiveDemo;
