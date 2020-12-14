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

// Importing like this is required to test the behaviour with NODE_ENV;
const getSubject = () => require('./google-analytics-helper'); // eslint-disable-line global-require

describe('google-analytics-helper', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // clears the cache
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('does not fail when ga is not defined', () => {
    const startGAandSendPageView = () => {
      const subject = getSubject();
      subject.startGoogleAnalytics();
      subject.sendPageView('foo');
    };

    expect(startGAandSendPageView).not.toThrow();
  });

  it('does nothing when not running in production', () => {
    window.ga = jest.fn();
    const subject = getSubject();
    subject.startGoogleAnalytics();
    subject.sendPageView('foo');

    expect(window.ga.mock.calls.length).toBe(0);
  });

  describe('when running in production', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    it('does not fail when ga is not defined', () => {
      const startGAandSendPageView = () => {
        const subject = getSubject();
        subject.startGoogleAnalytics();
        subject.sendPageView('foo');
      };

      expect(startGAandSendPageView).not.toThrow();
    });

    it('uses `ga` function defined globally', () => {
      window.ga = jest.fn();
      getSubject().startGoogleAnalytics();

      expect(window.ga).toHaveBeenCalled();
    });

    describe('startGoogleAnalytics', () => {
      it('correctly creates analytics tracker and sends page view', () => {
        window.ga = jest.fn();
        const subject = getSubject();
        subject.startGoogleAnalytics();

        expect(window.ga.mock.calls.length).toBe(2);

        const firstCall = window.ga.mock.calls[0];

        expect(firstCall[0]).toBe('create');
        expect(firstCall[1]).toBe(subject.GA_ID);
        expect(firstCall[2]).toBe('auto');

        const secondCall = window.ga.mock.calls[1];

        expect(secondCall[0]).toBe('send');
        expect(secondCall[1]).toBe('pageview');
      });
    });

    describe('sendPageView', () => {
      it('correctly sends a page view', () => {
        window.ga = jest.fn();
        const subject = getSubject();
        const page = '/components/button';
        subject.sendPageView(page);

        expect(window.ga.mock.calls.length).toBe(2);

        const firstCall = window.ga.mock.calls[0];

        expect(firstCall[0]).toBe('set');
        expect(firstCall[1]).toBe('page');
        expect(firstCall[2]).toBe(page);

        const secondCall = window.ga.mock.calls[1];

        expect(secondCall[0]).toBe('send');
        expect(secondCall[1]).toBe('pageview');
      });

      it('handles empty arguments correctly', () => {
        window.ga = jest.fn();
        const subject = getSubject();

        expect(() => subject.sendPageView()).toThrow(
          /page should not be null or empty/,
        );
        expect(() => subject.sendPageView('')).toThrow(
          /page should not be null or empty/,
        );
      });
    });
  });
});
