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

export const GA_ID = 'UA-246109-143';

const NOOP = () => {};
const isProd = process.env.NODE_ENV === 'production';

const ga = (...args) => {
  const safeGa = (isProd && typeof window !== 'undefined' && window.ga) || NOOP;
  safeGa(...args);
};

/**
 * Start tracking the user. Usefull when analytics
 * should be started only after user consent.
 *
 * @returns {void}
 */
export const startGoogleAnalytics = () => {
  ga('create', GA_ID, 'auto');
  ga('send', 'pageview');
};

/**
 * Send a page view for the specified page.
 *
 * @param {String} page the page receiving the event.
 * @returns {void}
 */
export const sendPageView = page => {
  if (page == null || page === '') {
    throw new Error('page should not be null or empty');
  }
  ga('set', 'page', page);
  ga('send', 'pageview');
};
