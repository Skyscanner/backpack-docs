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

import React, { Component } from 'react';

import localstorage from '../../helpers/localstorage';
import { startGoogleAnalytics } from '../../helpers/google-analytics-helper';

import CookieBanner from './CookieBanner';

const isSsr = typeof window === 'undefined';

const STORAGE_KEY = 'BPK_DOCS_accept-cookies';

const isAcknowledged = () => localstorage.getItem(STORAGE_KEY) != null;

const accept = () => localstorage.setItem(STORAGE_KEY, true);

const reject = () => localstorage.setItem(STORAGE_KEY, false);

const userAcceptsCookies = () => localstorage.getItem(STORAGE_KEY) === 'true';

class AnalyticsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { showCookieBanner: !isAcknowledged() && !isSsr };
  }

  componentDidMount() {
    if (userAcceptsCookies()) {
      startGoogleAnalytics();
    }
  }

  onReject = () => {
    reject();
    this.setState({ showCookieBanner: false });
  };

  onAccept = () => {
    accept();
    this.setState({ showCookieBanner: false });
    startGoogleAnalytics();
  };

  render() {
    const { showCookieBanner } = this.state;

    return (
      <CookieBanner
        data-testid="cookie-banner"
        visible={showCookieBanner}
        onReject={this.onReject}
        onAccept={this.onAccept}
      />
    );
  }
}

export default AnalyticsContainer;
