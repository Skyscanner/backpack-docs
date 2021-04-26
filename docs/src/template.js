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

/*

Add <meta /> elements in docs/src/Meta.js, **not here**, so that Helmet is aware of them.

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
  ${head.title.toString()}
  ${head.meta.toString()}
  <link rel="stylesheet" href="${basePath}/${assets.docs.css}">
  <link rel="apple-touch-icon" sizes="180x180" href="/${appleTouchIcon}">

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
