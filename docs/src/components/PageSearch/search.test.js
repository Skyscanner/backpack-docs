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

/* @flow */

import { getMatchingPages } from './search';

const haystack = [
  {
    id: 'CHECKBOX',
    route: '/components/checkbox',
    children: 'Checkbox',
    tags: ['android', 'web'],
    keywords: ['switch', 'on off', 'toggle'],
  },
];

describe('search', () => {
  describe('getMatchingPages', () => {
    it('should match "checkbox"', () => {
      const matches = getMatchingPages('checkbox', haystack);

      expect(matches).toEqual([haystack[0]]);
    });

    it('should match "check"', () => {
      const matches = getMatchingPages('check', haystack);

      expect(matches).toEqual([haystack[0]]);
    });

    it('should match "switch"', () => {
      const matches = getMatchingPages('switch', haystack);

      expect(matches).toEqual([haystack[0]]);
    });

    it('should return no matches for "calendar"', () => {
      const matches = getMatchingPages('calendar', haystack);

      expect(matches).toEqual([]);
    });
  });
});
