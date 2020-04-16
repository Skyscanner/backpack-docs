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

/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const table = require('markdown-table');

const ROUTES_MAPPINGS = require('./pages');
const checkLighthouseScore = require('./lh-check-scores');
const config = require('./lh-config');

const toMarkdown = (results = {}) =>
  table([['Metric', 'Value']].concat(Object.entries(results)));

const generateOutput = (scores, url) => {
  console.log('URL', url);

  if (scores.successes) {
    console.log('\n===== LIGHTHOUSE PASS! =====\n');
    console.log(toMarkdown(scores.successes));
    console.log('\n============================\n');
  } else {
    console.log('\n===== LIGHTHOUSE FAILED! =====\n');
    console.log(toMarkdown(scores.errors));
    console.log('\n============================\n');
  }
};

function launchChromeAndRunLighthouse(url, opts, conf) {
  return chromeLauncher
    .launch({ chromeFlags: opts.chromeFlags })
    .then(chrome => {
      opts.port = chrome.port;
      return lighthouse(url, opts, conf).then(async results => {
        // use results.lhr for the JS-consumable output
        // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
        // use results.report for the HTML/JSON/CSV output as a string
        // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
        return chrome.kill().then(() => results.lhr);
      });
    });
}

const opts = {
  onlyCategories: ['performance'],
  chromeFlags: ['--show-paint-rects'],
};

async function launch() {
  for (const key of Object.keys(ROUTES_MAPPINGS)) {
    await launchChromeAndRunLighthouse(
      `http://0.0.0.0:8080${ROUTES_MAPPINGS[key]}`,
      opts,
      config,
    ).then(results => {
      // For now we fix the threshold, should be done dynamically per page in the future
      const thresholds = {
        score: 0.95,
      };
      generateOutput(
        checkLighthouseScore(results.audits, thresholds),
        ROUTES_MAPPINGS[key],
      );
    });
  }
}

launch();
