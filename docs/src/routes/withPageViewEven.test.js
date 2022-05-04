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

import renderer from 'react-test-renderer';

import withPageViewEvent from './withPageViewEvent';

jest.mock('../helpers/google-analytics-helper', () => ({
  ...jest.requireActual('../helpers/google-analytics-helper'),
  sendPageView: jest.fn(),
}));

const ga = jest.requireMock('../helpers/google-analytics-helper');

const RouteComponent = () => null;

describe('withPageViewEvent', () => {
  afterEach(() => {
    ga.sendPageView.mockClear();
  });

  it('triggers page views when rendering a route', () => {
    const WithPageView = withPageViewEvent(RouteComponent);
    renderer.create(
      <WithPageView location={{ pathname: '/tokens/animation', search: '' }} />,
    );

    expect(ga.sendPageView).toHaveBeenCalled();
    expect(ga.sendPageView.mock.calls[0][0]).toBe('/tokens/animation');
  });

  describe('component routes', () => {
    it('does not trigger any events if the route does not have a paltform param', () => {
      const WithPageView = withPageViewEvent(RouteComponent);
      renderer.create(
        <WithPageView
          location={{ pathname: '/components/button', search: '' }}
        />,
      );

      expect(ga.sendPageView).not.toHaveBeenCalled();
    });

    it('triggers page views with the correct platform', () => {
      const WithPageView = withPageViewEvent(RouteComponent);
      renderer.create(
        <WithPageView
          location={{ pathname: '/components/button', search: '?platform=web' }}
        />,
      );

      expect(ga.sendPageView).toHaveBeenCalled();
      expect(ga.sendPageView.mock.calls[0][0]).toBe(
        '/components/button?platform=web',
      );
    });

    it('ignores extra query params', () => {
      const WithPageView = withPageViewEvent(RouteComponent);
      renderer.create(
        <WithPageView
          location={{
            pathname: '/components/button',
            search: '?foo=bar&platform=web',
          }}
        />,
      );

      expect(ga.sendPageView).toHaveBeenCalled();
      expect(ga.sendPageView.mock.calls[0][0]).toBe(
        '/components/button?platform=web',
      );
    });
  });
});
