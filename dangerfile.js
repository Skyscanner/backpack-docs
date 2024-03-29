/*
 *
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
 *
 */

// See http://danger.systems/js if you're not sure what this is.

import fs from 'fs';

import { includes } from 'lodash';
import { danger, fail, warn, markdown, schedule } from 'danger';

const getRandomFromArray = arr => arr[Math.floor(Math.random() * arr.length)];
const currentYear = new Date().getFullYear();
// Applies to js, css, scss and sh files that are not located in dist or flow-typed folders.
const shouldContainLicensingInformation = filePath =>
  filePath.match(/\.(js|css|scss|sh)$/) &&
  !filePath.includes('dist/') &&
  !filePath.includes('flow-typed/');

const AVOID_EXACT_WORDS = [
  { word: 'react native', reason: 'Please use React Native with capitals' },
];

const author = danger.github.pr.user.login;
const isPrExternal = async () => {
  try {
    await danger.github.api.orgs.checkMembership({
      org: 'backpack',
      username: author,
    });
    return false;
  } catch (err) {
    return true;
  }
};

const createdFiles = danger.git.created_files;
const modifiedFiles = danger.git.modified_files;
const fileChanges = [...modifiedFiles, ...createdFiles];
const markdownChanges = fileChanges.filter(path => path.endsWith('md'));

const thanksGifs = [
  'https://media.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif', // T.Hanks
  'https://media.giphy.com/media/6tHy8UAbv3zgs/giphy.gif', // Spongebob
  'https://media.giphy.com/media/xULW8v7LtZrgcaGvC0/giphy.gif', // Dog
  'https://media.giphy.com/media/GghJ32T5oPR8Q/giphy.gif', // Leslie Knope
  'https://media.giphy.com/media/26AHAw0aMmWwRI4Hm/giphy.gif', // David Mitchell
  'https://media.giphy.com/media/mbhseRYedlG5W/giphy.gif', // That guy from Who's Line Is It Anyway who looks like Bill Murray
  'https://media.giphy.com/media/3o6ZsXRBB9E67nUjL2/giphy.gif', // We love you
  'https://media.giphy.com/media/l3V0sNZ0NGomeurCM/giphy.gif', // Bowie
  'https://media.giphy.com/media/3rgXBvoeXt3MXlqhO0/giphy.gif', // Amazement
  'https://media.giphy.com/media/1OnDp7RwgphjG/giphy.gif', // Kumamon
  'https://media.giphy.com/media/1lk1IcVgqPLkA/giphy.gif', // Cap salute
  'https://media.giphy.com/media/l3V0lN5bUX7AKtdW8/giphy.gif', // Moira Schitt's Creek
  'https://media.giphy.com/media/3osxYdXvsGw6wT5lIY/giphy.gif', // OMG thanks
  'https://media.giphy.com/media/nEMmyUp4hl1QOzovKh/giphy.gif', // thanks dude
  'https://media.giphy.com/media/l0G192kSMLwTpO1CE/giphy.gif', // moe simpsons
];

// Be nice to our neighbours.
schedule(async () => {
  if (await isPrExternal()) {
    markdown(`
# Hi ${author}!

Thanks for the PR 🎉! Contributions like yours help to improve the design system
for everybody and we appreciate you taking the effort to create this PR.

![Thanks](${getRandomFromArray(thanksGifs)})

- [ ] Check this if you have read and followed the [contributing guidelines](https://github.com/Skyscanner/backpack-docs/blob/main/CONTRIBUTING.md)

If you're curious about how we review, please read through the
[code review guidelines](https://github.com/Skyscanner/backpack/blob/main/CODE_REVIEW_GUIDELINES.md).
`);
  }
});

// Ensure package-lock changes are intentional.
const lockFileUpdated = includes(modifiedFiles, 'package-lock.json');
if (lockFileUpdated) {
  warn('`package-lock.json` was updated. Ensure that this was intentional.');
}

// New files should include the Backpack license heading.
const unlicensedFiles = createdFiles.filter(filePath => {
  if (shouldContainLicensingInformation(filePath)) {
    const fileContent = fs.readFileSync(filePath);
    return !fileContent.includes(
      'Licensed under the Apache License, Version 2.0 (the "License")',
    );
  }
  return false;
});
if (unlicensedFiles.length > 0) {
  fail(
    `These new files do not include the license heading: ${unlicensedFiles.join(
      ', ',
    )}`,
  );
}

// Updated files should include the latest year in licensing header.
const outdatedLicenses = fileChanges.filter(filePath => {
  if (
    shouldContainLicensingInformation(filePath) &&
    !unlicensedFiles.includes(filePath)
  ) {
    const fileContent = fs.readFileSync(filePath);
    return !fileContent.includes(`Copyright 2016 Skyscanner Ltd`);
  }
  return false;
});
if (outdatedLicenses.length > 0) {
  fail(
    `These files contain an outdated licensing header: ${outdatedLicenses.join(
      ', ',
    )}. Please update to ${currentYear}.`,
  );
}

markdownChanges.forEach(path => {
  const fileContent = fs.readFileSync(path);

  fileContent
    .toString()
    .split(/\r?\n/)
    .forEach((line, lineIndex) => {
      AVOID_EXACT_WORDS.forEach(phrase => {
        if (line.includes(phrase.word)) {
          warn(`${phrase.reason} on line ${lineIndex + 1} in ${path}`);
        }
      });
    });
});
