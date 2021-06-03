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

import fs from 'fs';

// In order to serve a zip-file containing all icon SVGs, the `zip-it-loader` loader
// must be provided with an empty file within the Icons directory.

// If Icons.js is not empty, then it will be served instead of the SVGs

describe('Routes', () => {
  describe('Icons.js', () => {
    it('Icons.js file should be empty', () => {
      const iconsJsFileContents = fs.readFileSync(
        'node_modules/@skyscanner/bpk-svgs/dist/svgs/icons.js',
      );

      expect(iconsJsFileContents.toString()).toEqual('');
    });
  });
});
