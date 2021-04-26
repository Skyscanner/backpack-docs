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

// Weightings based on https://docs.google.com/spreadsheets/d/1up5rxd4EMCoMaxH8cppcK1x76n6HLx0e7jxb0e0FXvc/edit#gid=0
module.exports = {
  'first-contentful-paint': 0.2,
  'first-meaningful-paint': 0.067,
  'speed-index': 0.267,
  interactive: 0.333,
  'first-cpu-idle': 0.133,
};
