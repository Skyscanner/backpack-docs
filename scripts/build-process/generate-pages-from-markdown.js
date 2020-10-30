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

/* eslint-disable no-console */

const fs = require('fs');

const colors = require('colors');
const frontmatter = require('@github-docs/frontmatter');

const PATH_TO_MARKDOWN_FILES = './docs/src/static-pages';
const PATH_TO_ROUTES_FILE = './docs/src/constants/generated/routes.js';
const PATH_TO_LINKS_FILE = './docs/src/layouts/generated/links.js';

/*
Valid values for the 'category' front matter
*/
const ALLOWED_CATEGORIES = ['using', 'guidelines'];

console.log(
  colors.cyan(`Looking for markdown files in ${PATH_TO_MARKDOWN_FILES}…`),
);

// Get all the markdown files.
const markdownFiles = fs
  .readdirSync(PATH_TO_MARKDOWN_FILES)
  .filter(file => file.endsWith('.md'));

if (markdownFiles.length === 0) {
  console.error(
    colors.red(`No files ending in '.md' found in '${PATH_TO_MARKDOWN_FILES}'`),
  );
  process.exit(1);
}

console.log(colors.cyan(`Found ${markdownFiles.length} markdown files.`));

// Run each file through the frontmatter parser to extract metadata.
const enrichedMarkdownFiles = markdownFiles.map(fileName => {
  const fileContents = fs.readFileSync(`${PATH_TO_MARKDOWN_FILES}/${fileName}`);
  const { content, data, errors } = frontmatter(fileContents);
  if (errors && errors.length > 0) {
    console.error(colors.red(`Error parsing '${fileName}'`));
    console.error(colors.red(errors));
    return null;
  }

  if (!data.title) {
    console.error(colors.red(`Error parsing '${fileName}'`));
    console.error(colors.red(`No title found. Please add one.`));
    return null;
  }

  if (!data.category) {
    console.error(colors.red(`Error parsing '${fileName}'`));
    console.error(colors.red(`No category found. Please add one.`));
    return null;
  }

  if (!ALLOWED_CATEGORIES.includes(data.category)) {
    console.error(colors.red(`Error parsing '${fileName}'`));
    console.error(
      colors.red(`Category must be one of:\n${ALLOWED_CATEGORIES.join('\n')}`),
    );
    return null;
  }

  const urlTitle = data.title
    .toLowerCase()
    .split(' ')
    .join('-');

  const id = data.title
    .toUpperCase()
    .split(' ')
    .join('_');

  const keywords = data.keywords ? data.keywords.split(',') : null;

  return {
    category: data.category,
    path: `/${data.category}/${urlTitle}`,
    content,
    id,
    title: data.title,
    subtitle: data.subtitle,
    keywords,
  };
});

// Create the routes that'll be used in 'docs/src/routes/generated/routes.js'.
const routes = {};
enrichedMarkdownFiles.forEach(
  ({ category, path, content, title, subtitle }) => {
    if (!routes[category]) {
      routes[category] = [];
    }

    // Needs to be done as a string, because we can't use JSX here.
    routes[category].push(
      `{path: "${path}", component: () => (<MarkdownPage title="${title}" subtitle="${subtitle}" content="${content}" />)}`,
    );
  },
);

const routesString = Object.keys(routes).map(category => {
  return `export const ${category} = [${routes[category].join(',')}];`;
});

// Write the routes to a file.
const routesHeader = fs.readFileSync(
  `./scripts/build-process/routesTemplate.js`,
);
fs.writeFileSync(
  PATH_TO_ROUTES_FILE,
  `${routesHeader}\n${routesString.join('\n')}`,
);

console.log(colors.green(`Updated ${PATH_TO_ROUTES_FILE}`));

// Create the links to appear in the sidebar.
const links = {};
enrichedMarkdownFiles.forEach(({ category, path, title, id, keywords }) => {
  if (!links[category]) {
    links[category] = [];
  }

  links[category].push({
    id,
    route: path,
    children: title,
    keywords,
  });
});

// Write the links to a file.
const linksHeader = fs.readFileSync(`./scripts/build-process/linksTemplate.js`);
fs.writeFileSync(
  PATH_TO_LINKS_FILE,
  `${linksHeader}\nexport default ${JSON.stringify(links)}`,
);

console.log(colors.green(`Updated ${PATH_TO_LINKS_FILE}`));
