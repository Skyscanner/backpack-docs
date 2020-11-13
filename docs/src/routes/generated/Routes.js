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

import * as ROUTES from '../../constants/routes';
import MarkdownPage from '../../components/MarkdownPage';

import BACKPACK_REACT_SCRIPTS from '../../static-pages/backpack-react-scripts.md';
import BASE_STYLESHEET from '../../static-pages/base-stylesheet.md';
import GETTING_STARTED from '../../static-pages/getting-started.md';
import PRINCIPLES from '../../static-pages/principles.md';
import BACKPACK_STATUS from '../../static-pages/status.md';
import UPDATING_THIS_WEBSITE from '../../static-pages/website-contribution-guide.md';

export const using = [{
    path: ROUTES.GENERATED_USING_BACKPACK_REACT_SCRIPTS,
    component: () => (
      <MarkdownPage
        fileName="backpack-react-scripts.md"
        title="Backpack React Scripts"
        subtitle="Create React + Backpack web apps with no build configuration."
        content={BACKPACK_REACT_SCRIPTS}
      />
    )
  },{
    path: ROUTES.GENERATED_USING_BASE_STYLESHEET,
    component: () => (
      <MarkdownPage
        fileName="base-stylesheet.md"
        title="Base stylesheet"
        subtitle="All components are built on top of a lightweight base stylesheet. Ensure you include this on the page when consuming any Backpack components."
        content={BASE_STYLESHEET}
      />
    )
  },{
    path: ROUTES.GENERATED_USING_GETTING_STARTED,
    component: () => (
      <MarkdownPage
        fileName="getting-started.md"
        title="Getting Started"
        subtitle="Depending on the audience, there are a few ways to get started."
        content={GETTING_STARTED}
      />
    )
  },{
    path: ROUTES.GENERATED_USING_PRINCIPLES,
    component: () => (
      <MarkdownPage
        fileName="principles.md"
        title="Principles"
        subtitle="Backpack components, features and configurations are created with the following principles in mind."
        content={PRINCIPLES}
      />
    )
  },{
    path: ROUTES.GENERATED_USING_BACKPACK_STATUS,
    component: () => (
      <MarkdownPage
        fileName="status.md"
        title="Backpack Status"
        subtitle="Here you will find the current Backpack CI status and release versions."
        content={BACKPACK_STATUS}
      />
    )
  },{
    path: ROUTES.GENERATED_USING_UPDATING_THIS_WEBSITE,
    component: () => (
      <MarkdownPage
        fileName="website-contribution-guide.md"
        title="Updating this website"
        subtitle="Backpack belongs to everyone at Skyscanner. Changes are welcomed from anybody."
        content={UPDATING_THIS_WEBSITE}
      />
    )
  }];