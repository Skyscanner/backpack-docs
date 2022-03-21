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

/*
 Custom Webpack loader. Takes a string referring to a filename,
 runs it through gray-matter (https://www.npmjs.com/package/gray-matter)
 to split the front matter and content out, then returns just the content.

 It also adds an extra front matter prop – 'filename' – to add the filename
 of the current file.
 */

const matter = require('gray-matter');

const REPO_NAME = 'backpack-docs';

const getFileName = fullPath => {
  const splitPath = fullPath.split(REPO_NAME);
  if (splitPath.length > 1) {
    return splitPath[splitPath.length - 1];
  }
  return null;
};

module.exports = function loader(src) {
  return new Promise(resolve => {
    const { content, data } = matter(src);

    if (Object.keys(data).length === 0) {
      return resolve(content);
    }

    const fileName = getFileName(this.resourcePath);
    if (fileName) {
      data.fileName = fileName;
    }

    // Exports must go at the bottom, as exports before imports aren't allowed.
    const contentWithMetadataExport = `${content}

export const metadata = ${JSON.stringify(data)};
    `;

    return resolve(contentWithMetadataExport);
  });
};
