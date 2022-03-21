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

import { sendPageView } from '../helpers/google-analytics-helper';

const withPageViewEvent = Component => renderProps => {
  const { location } = renderProps;
  const { pathname, search } = location;
  const isComponentRoute = pathname.indexOf('/components/') === 0;
  const platform = search
    .substring(1)
    .split('&')
    .filter(a => a.indexOf('platform=') === 0)[0];

  // Component pages trigger the router twice, first without the platform in the URL
  // and then again with the platform, this makes sure we only trigger one pageview
  // with the platform
  if (isComponentRoute && platform) {
    sendPageView(`${pathname}?${platform}`);
  } else if (!isComponentRoute) {
    sendPageView(pathname);
  }

  return <Component {...renderProps} />;
};

export default withPageViewEvent;
