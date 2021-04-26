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

/*
 Custom Webpack loader. 
 Replaces relative image references in Markdown files with React components using a
 `require` statement, so that later in the process they can be captured by `file-loader`.
 
 Turns:
 ![alt text](./image.png)
 
 into:
 <img src={'/' + require('./image.png'} alt="alt text" />
 */

const IMAGE_REG_EXP = /!\[(.*)\]\(([^https?].+)\)/g;
const PATH_PREFIX = '/';

const sanitize = input => {
  return input.replace(/"/g, '');
};

const createImg = (source, title) => {
  return `<img src={"${PATH_PREFIX}" + require("${source}")} alt="${sanitize(
    title,
  )}" />`;
};

module.exports = src => {
  return new Promise(resolve => {
    const matches = src.matchAll(IMAGE_REG_EXP);
    const results = Array.from(matches);

    let updated = src;

    results.forEach(result => {
      const [markdownImageElement, imageTitle, imageSource] = result;
      updated = updated.replace(
        markdownImageElement,
        createImg(imageSource, imageTitle),
      );
    });

    resolve(updated);
  });
};
