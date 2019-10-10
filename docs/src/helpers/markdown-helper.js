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

const getMarkdownString = readmeString =>
  readmeString
    .replace(/^#.*$/m, '') // remove first h1
    .replace(/^>.*$/m, '') // remove first blockquote
    .replace(/^#### /gm, '##### ') // replace h4 with h5
    .replace(/^### /gm, '#### ') // replace h3 with h4
    .replace(/^## /gm, '### ') // replace h2 with h3
    .replace(/^# /gm, '## '); // replace h1 with h2

export default getMarkdownString;
