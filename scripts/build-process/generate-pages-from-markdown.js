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

const PATH_TO_MARKDOWN_FILES = 'docs/src/static-pages';
const PATH_TO_ROUTES_CONSTANTS_FILE = 'docs/src/constants/generated/routes.js';
const PATH_TO_ROUTES_FILE = 'docs/src/routes/generated/Routes.js';
const PATH_TO_LINKS_FILE = 'docs/src/layouts/generated/links.js';

/*
Valid values for the 'category' front matter
*/
const ALLOWED_CATEGORIES = ['using', 'guidelines', 'tokens'];

console.log(
  colors.cyan(`Looking for markdown files in ${PATH_TO_MARKDOWN_FILES}…`),
);

// Get all the markdown files.
const markdownFiles = fs
  .readdirSync(PATH_TO_MARKDOWN_FILES)
  .filter(file => file.endsWith('.mdx'));

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
    fileName,
    path: `/${data.category}/${urlTitle}`,
    id,
    content,
    data,
    keywords,
  };
});

const constantName = (category, id) => {
  return `GENERATED_${category.toUpperCase()}_${id}`;
};

const constantStrings = [];

enrichedMarkdownFiles.forEach(({ data, id, path }) => {
  constantStrings.push(
    `export const ${constantName(data.category, id)} = '${path}';`,
  );
});

// Write the routes to a file.
const routesConstantsHeader = fs.readFileSync(
  `./scripts/build-process/templates/routesConstantsTemplate.js`,
);
fs.writeFileSync(
  PATH_TO_ROUTES_CONSTANTS_FILE,
  `${routesConstantsHeader}\n${constantStrings.join('\n')}`,
);

console.log(colors.green(`Updated ${PATH_TO_ROUTES_CONSTANTS_FILE}`));

// Create the components that'll be used in 'docs/src/routes/generated/Routes.js'.
const components = {};
enrichedMarkdownFiles.forEach(({ fileName, data, id }) => {
  if (!components[data.category]) {
    components[data.category] = [];
  }

  // Needs to be done as a string, because we can't use JSX here.
  components[data.category].push({
    import: `import ${id} from '../../static-pages/${fileName}';`,
    component: `{
    path: ROUTES.${constantName(data.category, id)},
    component: () => (
      <MarkdownPage
        fileName="${fileName}"
        content={${id}}
        {...${JSON.stringify(data)}}
      />
    )
  }`,
  });
});

const importsString = Object.keys(components)
  .map(category => components[category].map(route => route.import).join('\n'))
  .join('\n');

const routesString = Object.keys(components).map(category => {
  return `export const ${category} = [${components[category]
    .map(route => route.component)
    .join(',')}];`;
});

// Write the routes to a file.
const routesHeader = fs.readFileSync(
  `./scripts/build-process/templates/routesTemplate.js`,
);
fs.writeFileSync(
  PATH_TO_ROUTES_FILE,
  `${routesHeader}\n${importsString}\n\n${routesString.join('\n')}`,
);

console.log(colors.green(`Updated ${PATH_TO_ROUTES_FILE}`));

// Create the links to appear in the sidebar.
const links = {};
enrichedMarkdownFiles.forEach(({ data, path, id, keywords }) => {
  if (!links[data.category]) {
    links[data.category] = [];
  }

  links[data.category].push({
    id,
    route: path,
    children: data.title,
    keywords,
  });
});

// Write the links to a file.
const linksHeader = fs.readFileSync(
  `./scripts/build-process/templates/linksTemplate.js`,
);

fs.writeFileSync(
  PATH_TO_LINKS_FILE,
  `${linksHeader}\nexport default ${JSON.stringify(links)}`,
);

console.log(colors.green(`Updated ${PATH_TO_LINKS_FILE}`));
