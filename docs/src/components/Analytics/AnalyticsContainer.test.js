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

import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import AnalyticsContanier from './AnalyticsContainer';

jest.mock('../../helpers/google-analytics-helper', () => ({
  ...jest.requireActual('../../helpers/google-analytics-helper'),
  startGoogleAnalytics: jest.fn(),
}));

jest.mock('../../helpers/localstorage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

const localStorage = jest.requireMock('../../helpers/localstorage');
const ga = jest.requireMock('../../helpers/google-analytics-helper');
const storageKey = 'BPK_DOCS_accept-cookies';

describe('AnalyticsContainer', () => {
  afterEach(() => {
    ga.startGoogleAnalytics.mockClear();
    localStorage.getItem.mockClear();
    localStorage.setItem.mockClear();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AnalyticsContanier />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('rejects analytics when `reject` is clicked', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    ReactDOM.render(<AnalyticsContanier />, container);
    const rejectButton = container.querySelector(
      "[data-testid='reject-button']",
    );

    rejectButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem.mock.calls[0][0]).toBe(storageKey);
    expect(localStorage.setItem.mock.calls[0][1]).toBe(false);
    expect(container.querySelector("[data-testid='cookie-banner']")).toBe(null);
  });

  it('accepts and starts analytics when `accept` is clicked', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    ReactDOM.render(<AnalyticsContanier />, container);
    const rejectButton = container.querySelector(
      "[data-testid='accept-button']",
    );

    rejectButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem.mock.calls[0][0]).toBe(storageKey);
    expect(localStorage.setItem.mock.calls[0][1]).toBe(true);

    expect(ga.startGoogleAnalytics).toHaveBeenCalled();

    expect(container.querySelector("[data-testid='cookie-banner']")).toBe(null);
  });

  describe('when consent has been denied', () => {
    beforeEach(() => {
      localStorage.getItem.mockReturnValue('false');
    });

    it('renders correctly', () => {
      const tree = renderer.create(<AnalyticsContanier />).toJSON();

      expect(tree).toMatchSnapshot();
      expect(localStorage.getItem).toHaveBeenCalledWith(storageKey);
    });

    it('does not trigger startGoogleAnalytics', () => {
      renderer.create(<AnalyticsContanier />);

      expect(ga.startGoogleAnalytics).not.toHaveBeenCalled();
    });
  });

  describe('when consent has been granted', () => {
    beforeEach(() => {
      localStorage.getItem.mockReturnValue('true');
    });

    it('renders correctly', () => {
      const tree = renderer.create(<AnalyticsContanier />).toJSON();

      expect(tree).toMatchSnapshot();
      expect(localStorage.getItem).toHaveBeenCalledWith(storageKey);
    });

    it('triggers startGoogleAnalytics', () => {
      renderer.create(<AnalyticsContanier />);

      expect(ga.startGoogleAnalytics).toHaveBeenCalled();
    });
  });
});
