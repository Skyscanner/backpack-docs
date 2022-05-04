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

import React from 'react';

import Helmet from 'react-helmet';

import BackpackLogoMark from '../../static/backpack-logo-mark.svg';
import PageSearch from '../../components/PageSearch';

import STYLES from './not-found-page.scss';

import BpkText from 'backpack/packages/bpk-component-text';
import BpkLink from 'backpack/packages/bpk-component-link';
import { cssModules } from 'backpack/packages/bpk-react-utils';

const getClassName = cssModules(STYLES);

const NotFoundPage = (props) => (
  <section {...props}>
    <Helmet title="404" />
    <div className={getClassName('bpkdocs-not-found-page__wrapper')}>
      <img
        className={getClassName('bpkdocs-not-found-page__logo')}
        alt="Backpack"
        src={BackpackLogoMark}
      />
      <BpkText className={getClassName('bpkdocs-not-found-page__text')}>
        Oops! The page you&#39;re looking for doesn&#39;t exist.
        <br />
        Try searching below or jump to the <BpkLink href="/">home page</BpkLink>
        .
      </BpkText>
      <div className={getClassName('bpkdocs-not-found-page__search-container')}>
        <PageSearch
          inputProps={{ placeholder: 'Search' }}
          inputClassName={getClassName('bpkdocs-not-found-page__search-input')}
          wrapperClassName={getClassName(
            'bpkdocs-not-found-page__search-results-wrapper',
          )}
        />
      </div>
    </div>
  </section>
);

export default NotFoundPage;
