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

const get = require('lodash/get');

const weighting = require('./weightings');

function checkLighthouseScore(audits = {}, thresholds = {}) {
  const errors = {};
  const keys = Object.keys(audits);
  const successes = {};
  const weightedScores = [];

  keys.forEach(key => {
    const score = get(audits, [key, 'score'], 0);
    if (score === null) {
      // lighthouse assigns null to non measurable.
      return;
    }
    // These are the metrics which we are concerned about and need to score
    if (weighting[key]) {
      weightedScores.push(score * weighting[key]);
      successes[key] = score;
      errors[key] = score;
    }
  });

  const score = weightedScores.reduce((a, b) => a + b, 0);

  if (thresholds && score < thresholds.score) {
    errors.score = score;
    return { errors };
  }
  successes.score = score;
  return { successes };
}

module.exports = checkLighthouseScore;
