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

import './static/favicon.ico';
import './static/social-preview.png';

import appleTouchIcon from './static/apple-touch-icon.png';

export default ({
  head = {},
  html = '',
  assets = {},
  basePath = '',
}) => `<!doctype html>

<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">

  <meta property="description" content="Backpack is Skyscanner's open-source design system.">

  <meta property="og:description" content="Backpack is Skyscanner's open-source design system.">
  <meta property="og:image" content="https://backpack.github.io${basePath}/social-preview.png">
  <meta property="og:image:width" content="256">
  <meta property="og:image:height" content="256">
  <meta property="og:locale" content="en_GB">
  <meta property="og:site_name" content="Backpack">
  <meta property="og:site_name" content="Backpack">
  <meta property="og:title" content="Backpack">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://backpack.github.io${basePath}">

  <meta property="twitter:card" content="summary">
  <meta property="twitter:creator" content="@skyscanner">
  <meta property="twitter:image" content="https://backpack.github.io${basePath}/social-preview.png">
  <meta property="twitter:image:alt" content="Backpack — Skyscanner's design system">
  <meta property="twitter:title" content="Backpack">
  <meta property="twitter:site" content="@skyscanner">
  <meta property="twitter:title" content="Backpack">

  ${head.title.toString()}
  ${head.meta.toString()}
  <link rel="stylesheet" href="${basePath}/${assets.docs.css}">
  <link rel="apple-touch-icon" sizes="180x180" href="${appleTouchIcon}">

</head>

<body>

<div id="react-mount">
  ${html}
</div>

<!-- Google Analytics -->
<script>
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->

<script src="${basePath}/${assets.docs.js}" async></script>

</body>

</html>`;
