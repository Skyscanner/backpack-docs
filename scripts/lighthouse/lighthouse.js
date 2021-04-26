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

/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const table = require('markdown-table');
const colors = require('colors');
const async = require('async');

const checkLighthouseScore = require('./lh-check-scores');
const config = require('./lh-config');

import * as ROUTES from '../../docs/src/constants/routes';


const toMarkdown = (results = {}) =>
  table([['Metric', 'Value']].concat(Object.entries(results)));

const generateOutput = (scores, url) => {

  console.log(colors.yellow.underline(`Url - ${url}`));
  if (scores.successes) {
    console.log(colors.green('\n===== LIGHTHOUSE PASS! =====\n'));
    console.log(toMarkdown(scores.successes));
    console.log(colors.green('\n============================\n'));
  } else {
    console.log(colors.red('\n===== LIGHTHOUSE FAILED! =====\n'));
    console.log(toMarkdown(scores.errors));
    console.log(colors.red('\n============================\n'));
  }
};

function launchChromeAndRunLighthouse(url) {
  return chromeLauncher
    .launch()
    .then(chrome => {
      return lighthouse(url, { port: chrome.port }, config).then(async results => {
        // use results.lhr for the JS-consumable output
        // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
        // use results.report for the HTML/JSON/CSV output as a string
        // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
        return chrome.kill().then(() => results.lhr);
      }).catch(err => {
        throw err;
      });
    }).catch(err => {
      throw err;
    });
}


async function launch() {
  for (const key of Object.keys(ROUTES)) {
    await launchChromeAndRunLighthouse(
      `http://0.0.0.0:8080${ROUTES[key]}`,
    ).then(results => {
      // For now we fix the threshold, should be done dynamically per page in the future
      const thresholds = {
        score: 0.95,
      };
      generateOutput(
        checkLighthouseScore(results.audits, thresholds),
        ROUTES[key],
      );
    }).catch(error => {
      console.error(`The following error occurred: ${error}`)
    });
  }
}

launch();
