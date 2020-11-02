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

import React from 'react';

import MarkdownPage from '../../components/MarkdownPage';

export const using = [{path: "/using/backpack-react-scripts", component: () => (<MarkdownPage title="Backpack React Scripts" subtitle="Create React + Backpack web apps with no build configuration." content={`
## TL;DR

**The currently supported version of CRA by backpack-react-scripts is up to v3.4.1. Versions above this will not work.**

\`\`\`
npx create-react-app@3.4.1 my-app --scripts-version=@skyscanner/backpack-react-scripts --template @skyscanner/backpack --use-npm
cd my-app
npm start
\`\`\`

Then open [http://localhost:3000](http://localhost:3000/) to see your app.

When you’re ready to deploy to production, create a minified bundle with \`npm run build\`.

## How does this work?

\`backpack-react-scripts\` is designed to be used in conjunction with Facebook's [Create React App](https://facebook.github.io/create-react-app/docs/getting-started). It is almost identical in terms of its feature set, apart from some custom configuration which adds support for compilation of Backpack components.

The generated project also comes with Backpack integration out the box - the base stylesheet, bpk-mixins as well as a few Backpack components are already integrated to get you up and running as quickly as possible.

For more comprehensive documentation, please refer to [the Create React App docs](https://facebook.github.io/create-react-app/docs/getting-started), as the majority of its content still applies to \`backpack-react-scripts\`.

## Rationale

Modern front-end development can be quite daunting. Getting started with React, es2015, Babel, Webpack and friends is so complex that "boilerplate" projects have sprung up all over GitHub. The main problem with these boilerplate projects is that there are literally hundreds of them making it hard to know which one to pick. Additionally, once you have downloaded a boilerplate project, you've just inadvertently inherited a whole bunch of front-end tooling technical debt. If updates are made to the boilerplate project in the future, how are you supposed to upgrade?

\`backpack-react-scripts\` is aimed at providing teams and codebases with a standardised way of building production web apps with Backpack + React at Skyscanner. When you create an app using the command at the top of this page, you'll notice that your project's \`package.json\` has a dependency on \`backpack-react-scripts\`. When we release new versions going forward (i.e. support for server-side rendering etc), all you need to do is bump the version number and run \`npm install\` to reap the rewards.

## Future updates

Please consult the [changelog](https://github.com/Skyscanner/backpack-react-scripts/blob/fork/packages/react-scripts/CHANGELOG.md) when performing updates to your \`backpack-react-scripts\` dependency.
`} />)},{path: "/using/base-stylesheet", component: () => (<MarkdownPage title="Base stylesheet" subtitle="All components are built on top of a lightweight base stylesheet. Ensure you include this on the page when consuming any Backpack components." content={`
## What's in it?

* For improved cross-browser rendering, we use [Normalize.css](http://necolas.github.io/normalize.css/) to correct small inconsistencies across browsers and devices.
* The \`box-sizing\` is globally set on every element, including \`*:before\` and \`*:after\`, to \`border-box\`. This ensures that the declared width of an element is never exceeded due to padding or border.
* The default \`color\`, \`font-family\`, \`font-size\` & \`line-height\`.
Utility classes based on the [HTML5 Boilerplate common helpers](https://github.com/h5bp/html5-boilerplate/blob/5.3.0/dist/doc/css.md#common-helpers), including: \`.hidden\`, \`.visuallyhidden\`, \`.visuallyhidden.focusable\`, \`.invisible\` and \`.clearfix\`.
* That's it!

> Note: There is also a small amount of JavaScript that does "[Modernizr](https://modernizr.com/)-like" feature detection (currently used to prevent hover effects on touch devices in downstream components) - make sure this is included in the head also.

## Usage

\`\`\`
npm install bpk-stylesheets --save-dev
\`\`\`

Include in your HTML like so:

\`\`\`
<!DOCTYPE html>
<html lang="en">
<head>
  ...
  <link rel="stylesheet" href="/node_modules/bpk-stylesheets/base.css">
  <script src="/node_modules/bpk-stylesheets/base.js"></script>
</head>
<body>...</body>
</html>
\`\`\`

Alternatively you could import the uncompiled JavaScript/Sass directly and let Webpack split them out:

\`\`\`
import 'bpk-stylesheets';
\`\`\`
`} />)},{path: "/using/getting-started", component: () => (<MarkdownPage title="Getting Started" subtitle="Depending on the audience, there are a few ways to get started." content={`
## React components (for web and React Native)

All components are available to consume as React components, exposed as modules on the npm registry. They encapsulate structure, style, and logic which means that achieving a consistent look and feel across Skyscanner products on web, iOS and Android is as straightforward as: installing a package, importing it in a view and using it in JSX. Please see the Text component for [web](https://backpack.github.io/components/text?platform=web) and [React Native](https://backpack.github.io/components/text?platform=native) as examples.

> The recommended way to get started with Backpack on web is to use Backpack React Scripts.
>
> Note: If you are looking to integrate Backpack components into an existing project, be aware that components are published uncompiled which means you'll need to accommodate for this in your webpack config.

## Backpack CocoaPod

[Backpack for iOS](https://github.com/skyscanner/backpack-ios) is distributed as a CocoaPod. The pod contains several subspecs for different token-level aspects of Backpack such as colour, typography, spacing etc.

## Backpack Gradle package

[Backpack for Android](https://github.com/skyscanner/backpack-android) is distributed as a Gradle package. It contains a module with different Backpack tokens such as colour, typography, spacing etc as a resource file.

## Sass variables and mixins

Backpack's tokens are also available as a library of Sass variables and mixins. Furthermore, most small components such as buttons are also available as mixins. Again, the library is exposed as a module on the npm registry which can be installed like so:

\`\`\`
npm install bpk-mixins --save-dev
\`\`\`

The following example demonstrates how to import the module and consume the primary button mixin:

\`\`\`
@import '~bpk-mixins/index';

.my-button {
  @include bpk-button;
}
\`\`\`

> Note: \`bpk-mixins\` only supports [node-sass](https://github.com/sass/node-sass) and makes extensive use of [sass-loader](https://github.com/jtangelder/sass-loader#imports)'s tilde importing mechanism. If you are not using sass-loader, you can use [node-sass-tilde-importer](https://github.com/matthewdavidson/node-sass-tilde-importer). The \`indentedSyntax\` option is unsupported.

To get an idea of all the variables and mixins available, head on over to the [f]ull reference documentation](https://backpack.github.io/sassdoc).
`} />)},{path: "/using/principles", component: () => (<MarkdownPage title="Principles" subtitle="Backpack components, features and configurations are created with the following principles in mind." content={`
## Authentically mobile

Whether it is for web or app, every component should be considered mobile first and degrade to desktop. Components should take advantage of the platform.

## Holistically considered

All Backpack components should work in multiple areas and situations, not just in the context of one screen.

## Reuse over reinvent

For any new component, we will look to the open source community for inspiration. If they meet our requirements, we will directly use them. For example, the [Autosuggest component](https://backpack.github.io/components/autosuggest) is powered by [React Autosuggest](https://react-autosuggest.js.org/).

## Accessible

Screen readers, keyboard navigation and other assistive technologies are important as we look to support all kinds of travellers. All Skyscanner products should be accessible by everyone no matter their disability or situation. See our guide (coming soon) for best practices.

## RTL supported

All components support RTL (also known as bidirectional languages).

## Themeable

All applicable components should be themeable and be able to use colours from Skyscanner's partners.

## Well documented

Each component should be fully documented, showing each configuration together with explanations where suitable. Additionally the component's readme and available props should be shown. See our guide on [writing style](https://github.com/Skyscanner/backpack/blob/master/decisions/writing-docs.md) for best practices for writing documentation.
`} />)},{path: "/using/backpack-status", component: () => (<MarkdownPage title="Backpack Status" subtitle="Here you will find the current Backpack CI status and release versions." content={`
## Backpack Web

[![Build Status](https://github.com/Skyscanner/backpack/workflows/CI/badge.svg)](https://github.com/Skyscanner/backpack/actions)
[![Snyk](https://snyk.io/test/github/skyscanner/backpack/badge.svg)](https://snyk.io/test/github/skyscanner/backpack)
[![Platform](https://img.shields.io/badge/platform-web-blue.svg)](https://github.com/Skyscanner/backpack)
[![License](https://img.shields.io/github/license/Skyscanner/backpack.svg)](https://github.com/Skyscanner/backpack/blob/master/LICENSE.txt)

[Changelog](https://github.com/Skyscanner/backpack/blob/master/CHANGELOG.md)

[GitHub](https://github.com/Skyscanner/backpack)

## Backpack React Native

[![Travis Build Status](https://travis-ci.org/Skyscanner/backpack-react-native.svg?branch=master)](https://travis-ci.org/Skyscanner/backpack-react-native)
[![Actions Build Status](https://github.com/Skyscanner/backpack-react-native/workflows/CI/badge.svg)](https://github.com/Skyscanner/backpack-react-native/actions)
[![Snyk](https://snyk.io/test/github/skyscanner/backpack-react-native/badge.svg)](https://snyk.io/test/github/skyscanner/backpack-react-native)
[![Platform](https://img.shields.io/badge/platform-native-blue.svg)](https://github.com/Skyscanner/backpack-react-native)
[![License](https://img.shields.io/github/license/Skyscanner/backpack-react-native.svg)](https://github.com/Skyscanner/backpack-react-native/blob/master/LICENSE.txt)

[Changelog](https://github.com/Skyscanner/backpack-react-native/blob/master/CHANGELOG.md)

[GitHub](https://github.com/Skyscanner/backpack-react-native)

## Backpack iOS

[![Build Status](https://github.com/Skyscanner/backpack-ios/workflows/CI/badge.svg)](https://github.com/Skyscanner/backpack-ios/actions)
[![Snyk](https://snyk.io/test/github/skyscanner/backpack-ios/badge.svg)](https://snyk.io/test/github/skyscanner/backpack-ios)
[![Version](https://img.shields.io/cocoapods/v/Backpack.svg?style=flat)](https://cocoapods.org/pods/Backpack)
[![Platform](https://img.shields.io/cocoapods/p/Backpack.svg?style=flat)](https://cocoapods.org/pods/Backpack)
[![License](https://img.shields.io/github/license/Skyscanner/backpack-ios.svg)](https://github.com/Skyscanner/backpack-ios/blob/master/LICENSE.txt)

[Changelog](https://github.com/Skyscanner/backpack-ios/blob/master/CHANGELOG.md)

[GitHub](https://github.com/Skyscanner/backpack-ios)

## Backpack Android

[![Build Status](https://img.shields.io/travis/Skyscanner/backpack-android.svg?style=flat)](https://travis-ci.org/Skyscanner/backpack-android)
[![Snyk](https://snyk.io/test/github/skyscanner/backpack-android/badge.svg)](https://snyk.io/test/github/skyscanner/backpack-android)
[![Release](https://jitpack.io/v/skyscanner/backpack-android.svg)](https://jitpack.io/#skyscanner/backpack-android)
[![Platform](https://img.shields.io/badge/platform-android-green.svg)](https://jitpack.io/#skyscanner/backpack-android)
[![License](https://img.shields.io/github/license/Skyscanner/backpack-android.svg)](https://github.com/Skyscanner/backpack-android/blob/master/LICENSE.txt)

[Changelog](https://github.com/Skyscanner/backpack-android/blob/master/CHANGELOG.md)

[GitHub](https://github.com/Skyscanner/backpack-android)

## Backpack React Scripts

[![Travis Build Status](https://travis-ci.org/Skyscanner/backpack-react-scripts.svg?branch=master)](https://travis-ci.org/Skyscanner/backpack-react-scripts)
[![Actions Build Status](https://github.com/Skyscanner/backpack-react-scripts/workflows/Build/badge.svg)](https://github.com/Skyscanner/backpack-react-scripts/actions)
[![Actions Lint Status](https://github.com/Skyscanner/backpack-react-scripts/workflows/Lint/badge.svg)](https://github.com/Skyscanner/backpack-react-scripts/actions)
[![License](https://img.shields.io/github/license/Skyscanner/backpack-react-scripts.svg)](https://github.com/Skyscanner/backpack-react-scripts/blob/master/LICENSE.txt)

[Changelog](https://github.com/Skyscanner/backpack-react-scripts/blob/fork/packages/react-scripts/CHANGELOG.md)

[GitHub](https://github.com/Skyscanner/backpack-react-scripts)

## Backpack Node Sass

[![Build Status](https://travis-ci.org/Skyscanner/backpack-node-sass.svg?branch=master)](https://travis-ci.org/Skyscanner/backpack-node-sass)
[![Snyk](https://snyk.io/test/github/skyscanner/backpack-node-sass/badge.svg)](https://snyk.io/test/github/skyscanner/backpack-node-sass)
[![License](https://img.shields.io/github/license/Skyscanner/backpack-node-sass.svg)](https://github.com/Skyscanner/backpack-node-sass/blob/master/LICENSE.txt)

[Changelog](https://github.com/Skyscanner/backpack-node-sass/blob/master/CHANGELOG.md)

[GitHub](https://github.com/Skyscanner/backpack-node-sass)

## ESLint Config Skyscanner

[![Build Status](https://github.com/Skyscanner/eslint-config-skyscanner/workflows/ESLint%20Plugin%20Backpack%20CI/badge.svg)](https://github.com/Skyscanner/eslint-config-skyscanner/actions)
[![Snyk](https://snyk.io/test/github/skyscanner/eslint-config-skyscanner/badge.svg)](https://snyk.io/test/github/skyscanner/eslint-config-skyscanner)
[![License](https://img.shields.io/github/license/Skyscanner/eslint-config-skyscanner.svg)](https://github.com/Skyscanner/eslint-config-skyscanner/blob/master/LICENSE.txt)

[Changelog](https://github.com/Skyscanner/eslint-config-skyscanner/blob/master/CHANGELOG.md)

[GitHub](https://github.com/Skyscanner/eslint-config-skyscanner)

## ESLint Plugin Backpack

[![Build Status](https://github.com/Skyscanner/eslint-plugin-backpack/workflows/ESLint%20Plugin%20Backpack%20CI/badge.svg)](https://github.com/Skyscanner/eslint-plugin-backpack/actions)
[![Snyk](https://snyk.io/test/github/skyscanner/eslint-plugin-backpack/badge.svg)](https://snyk.io/test/github/skyscanner/eslint-plugin-backpack)
[![License](https://img.shields.io/github/license/Skyscanner/eslint-plugin-backpack.svg)](https://github.com/Skyscanner/eslint-plugin-backpack/blob/master/LICENSE.txt)

[Changelog](https://github.com/Skyscanner/eslint-plugin-backpack/blob/master/CHANGELOG.md)

[GitHub](https://github.com/Skyscanner/eslint-plugin-backpack)
`} />)}];