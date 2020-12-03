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

/*
 Custom Webpack loader. Takes a string referring to a filename,
 runs it through gray-matter (https://www.npmjs.com/package/gray-matter)
 to split the front matter and content out, then returns it in
 MDX format, with the front matter replaced with a JS export named
 'metadata'.
 */

// Because it will attempt to change 'code' to 'BpkCode'.
/* eslint-disable backpack/use-components */

const matter = require('gray-matter');

module.exports = src => {
  return new Promise(resolve => {
    const { content, data } = matter(src);

    // If no frontmatter was found, don't add a metadata export.
    if (Object.keys(data).length === 0) {
      return content;
    }

    const code = `export const metadata = ${JSON.stringify(data)}

        ${content}
          `;

    return resolve(code);
  });
};
