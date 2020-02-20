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

/* @flow */

import Fuse from 'fuse.js';

const getMatchingPages = (
  needle: string,
  haystack: [
    {
      id: string,
      route: string,
      children: string,
      tags?: Array<string>,
      keywords?: Array<string>,
    },
  ],
) => {
  const fuseOptions = {
    keys: ['id', 'children', 'keywords'],
  };
  const fuse = new Fuse(haystack, fuseOptions);
  return fuse.search(needle);
};

export { getMatchingPages }; // eslint-disable-line import/prefer-default-export
