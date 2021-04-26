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

/* @flow */

// We use this specific build of fuse instead of the default one so that it works with IE and Edge
// https://fusejs.io/getting-started/different-builds.html
import Fuse from 'fuse.js/dist/fuse.common';

/*
Results are in the form:

[{
  item: haystack
  refIndex: number
}]

This function transforms them into a simpler array in the form:

[haystack]
*/
const transformResults = results => results.map(result => result.item);

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
  return transformResults(fuse.search(needle));
};

export { getMatchingPages }; // eslint-disable-line import/prefer-default-export
