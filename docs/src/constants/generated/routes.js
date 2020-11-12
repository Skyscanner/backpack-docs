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

import BACKPACK_REACT_SCRIPTS from '../../static-pages/backpack-react-scripts.md';
import BASE_STYLESHEET from '../../static-pages/base-stylesheet.md';
import GETTING_STARTED from '../../static-pages/getting-started.md';
import PRINCIPLES from '../../static-pages/principles.md';
import BACKPACK_STATUS from '../../static-pages/status.md';
import UPDATING_THIS_WEBSITE from '../../static-pages/website-contribution-guide.md';

export const using = [{path: "/using/backpack-react-scripts", component: () => (<MarkdownPage title="Backpack React Scripts" subtitle="Create React + Backpack web apps with no build configuration." content={BACKPACK_REACT_SCRIPTS} />)},{path: "/using/base-stylesheet", component: () => (<MarkdownPage title="Base stylesheet" subtitle="All components are built on top of a lightweight base stylesheet. Ensure you include this on the page when consuming any Backpack components." content={BASE_STYLESHEET} />)},{path: "/using/getting-started", component: () => (<MarkdownPage title="Getting Started" subtitle="Depending on the audience, there are a few ways to get started." content={GETTING_STARTED} />)},{path: "/using/principles", component: () => (<MarkdownPage title="Principles" subtitle="Backpack components, features and configurations are created with the following principles in mind." content={PRINCIPLES} />)},{path: "/using/backpack-status", component: () => (<MarkdownPage title="Backpack Status" subtitle="Here you will find the current Backpack CI status and release versions." content={BACKPACK_STATUS} />)},{path: "/using/updating-this-website", component: () => (<MarkdownPage title="Updating this website" subtitle="Backpack belongs to everyone at Skyscanner. Changes are welcomed from anybody." content={UPDATING_THIS_WEBSITE} />)}];