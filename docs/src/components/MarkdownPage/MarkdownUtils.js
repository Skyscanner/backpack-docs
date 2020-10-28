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

/* @flow strict */

const parseSections = (markdown: string) => {
  // Match on ## to find sections of the content
  // We use positive lookahead (?=) so that the match is not excluded from the results
  const splitSections: Array<string> = markdown.split(/^(?=(##\s))/gms);

  // If a given section is empty or just matches the pattern above,
  // then we should skip it instead of rendering nothing!
  const cleanSections: Array<string> = splitSections.filter(
    section => section !== '' && section !== '## ',
  );

  return cleanSections;
};

export default parseSections;
export { parseSections };
