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

/* @flow strict */

import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { cssModules } from 'bpk-react-utils';
import ChevronRightIcon from 'bpk-component-icon/lg/chevron-right';
import { withRtlSupport } from 'bpk-component-icon';

import Heading from '../Heading';

import STYLES from './NavigationFooter.scss';

const RtlSupportedChevron = withRtlSupport(ChevronRightIcon);
const getClassName = cssModules(STYLES);

type NavigationFooterProps = {
  id: string,
  title: string,
  link: string,
};

const NavigationFooter = (props: NavigationFooterProps) => {
  const { id, title, link } = props;
  return (
    <RouterNavLink
      id={`navigation_${id}`}
      className={getClassName('bpk-docs-navigation-footer')}
      to={link}
    >
      <div>
        <div className={getClassName('bpk-docs-navigation-footer__subtitle')}>
          Next up
        </div>
        <Heading level="h2">{title}</Heading>
      </div>
      <div className={getClassName('bpk-docs-navigation-footer__icon')}>
        <RtlSupportedChevron />
      </div>
    </RouterNavLink>
  );
};

NavigationFooter.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavigationFooter;
