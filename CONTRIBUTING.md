# Contributing to Backpack documentation

You want to help us enable Skyscanner to create beautiful, coherent products at scale? That's awesome! :heart:

## Table of contents

* [Prerequisites](#prerequisites)
* [Getting started](#getting-started)
* [Adding a new component](#adding-a-new-component)
* [How to](#how-to)

## Prerequisites

### Licence

By contributing your code, you agree to license your contribution under the terms of the [APLv2](./LICENSE).

All files are released with the Apache 2.0 licence.

If you are adding a new file it should have a header comment containing licence information:

<details>
<summary>Show/hide licence header</summary>

```
Backpack - Skyscanner's Design System

Copyright 2016 Skyscanner Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

</details>

### Installing Node

Backpack is developed using Node, using the following versions:

* `LTS/Fermium` (Node ^14.19.0)
* `^6.14.6` (npm)

This is enforced using a pre-install hook that calls out to [ensure-node-env](https://github.com/Skyscanner/ensure-node-env).

If you use [nvm](https://github.com/creationix/nvm) or [nave](https://github.com/isaacs/nave) to manage your Node environment, Backpack has built-in support for these. Just run `nvm use` or `nave auto` to install the correct Node version.

To install npm, use `npm install --global npm@^6.14.6`.

### Code style

Backpack uses a combination of [ESLint](https://eslint.org) and [Prettier](https://prettier.io) to enforce coding styles. ESLint runs as a pre-commit hook, so it isn't possible to commit code that causes ESLint to fail.

We recommend that you install [a plugin to your editor](https://eslint.org/docs/user-guide/integrations#editors) to run ESLint automatically, which will then show you any errors inline. You can even enable an option to fix ESLint errors automatically upon saving.

## Getting started

### Cloning

`backpack-docs` makes use of submodules. Run `git clone --recursive git@github.com:Skyscanner/backpack-docs.git` to clone the repo.

The `--recursive` flag will ensure that you also clone all necessary submodules to run the docs locally.

For more help using submodules, see the [more detailed Submodules section](#submodules)

### Install dependencies

Run `npm install` to install dependencies from npm.

#### Backpack documentation

When adding documentation for a new component:

 * Add the new dependency in `package.json` and run `npm i` to install it.
 * Add routes for your new component in `docs/src/constants/Routes.js` and `docs/src/constants/redirect-routes.js`.
 * Add new link in `docs/src/layouts/links.js`.

 Assets from other repositories are accessed via git submodules, which are automatically updated when the docs are deployed.

 For help writing documentation, see Skyscanner's [copywriting guide](https://backpack.github.io/guidelines/copywriting) and Backpack's [guide for writing docs](https://github.com/Skyscanner/backpack/blob/main/decisions/writing-docs.md).

## How to

<details>
<summary>Create a pull request to Backpack</summary>

For anything non-trivial, we strongly recommend speaking to somebody from Backpack squad before starting work on a PR. This lets us pass on any advice or knowledge we already have about the work you're proposing. It might even be something we're already working on. After this, follow the steps below.

1. [Fork the repository](https://github.com/Skyscanner/backpack-docs/fork).
2. Create a new branch.
3. Make your changes.
4. Commit and push your new branch.
5. Submit a [pull request](https://github.com/Skyscanner/backpack-docs/pulls).
6. Notify someone in Backpack squad or drop a note in #backpack.

Bear in mind that small, incremental pull requests are likely to be reviewed faster.

</details>

<details>
<summary>Run tests</summary>

`npm test` will pick up any files that end in `-test.js`, so you don't need to do anything to make Jest pick them up.

You can also run the tests in 'watch mode', which means the process will continually run and run tests every time files change. Use `npm run jest:watch` to do this.

</details>

<details>
<summary>Run the documentation site</summary>

The Backpack documentation is a standalone client-side app. Each package has its own page, which you can find and edit in the `bpk-docs` package under `src/pages`.

The “page” modules themselves contain introductory blurbs and examples for the respective component. They also import the component’s README, which you should have created as part of your component.

You can run the docs app locally using:

```sh
npm run docs
```

And loading [http://localhost:8080](http://localhost:8080).

The web Map component page requires an environment variable named `GOOGLE_MAPS_API_KEY`. During builds, this is set by Travis.

</details>

<details>
<summary>Run linters manually</summary>

* `npm run lint` to lint both JS and SCSS.
* `npm run lint:js` to lint JS.
* `npm run lint:js:fix` to lint and try to automatically fix any errors.
* `npm run lint:scss` to lint SCSS.

</details>

## Submodules

`backpack`, `backpack-android`, `backpack-ios` and `backpack-react-native` folders are git submodules.

When working with the documentation for new or existing components based on recent changes in a platform you will need to update the submodule for that platform in order to pull the latest code from the platform (e.g. READMEs or Web examples)

In order to pull the latest run the following command subsituting for the platform you wish to pull: `git submodule update --remote <submodule to update>`.

## And finally..

If you have any questions at all, don't hesitate to get in touch. We love to talk all things Backpack and we look forward to seeing your contribution!
