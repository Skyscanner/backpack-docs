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

import getMarkdownString from '../../helpers/markdown-helper';
import BpkMarkdownRenderer from '../../components/DocsPageBuilder/BpkMarkdownRenderer';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import Paragraph from '../../components/Paragraph';
import IntroBlurb from '../../components/IntroBlurb';

import webStatus from './content/webStatus.md';
import nativeStatus from './content/nativeStatus.md';
import iosStatus from './content/iosStatus.md';
import androidStatus from './content/androidStatus.md';
import ecsStatus from './content/ecsStatus.md';
import bnsStatus from './content/bnsStatus.md';
import brsStatus from './content/brsStatus.md';
import epbStatus from './content/epbStatus.md';

const components = [
  {
    id: 'backpack-web',
    title: 'Backpack Web',
    blurb: [
      <Paragraph>The current status of web:</Paragraph>,
      <BpkMarkdownRenderer source={getMarkdownString(webStatus)} />,
    ],
  },
  {
    id: 'backpack-react',
    title: 'Backpack React Native',
    blurb: [
      <Paragraph>The current status of React Native:</Paragraph>,
      <BpkMarkdownRenderer source={getMarkdownString(nativeStatus)} />,
    ],
  },
  {
    id: 'backpack-ios',
    title: 'Backpack iOS',
    blurb: [
      <Paragraph>The current status of iOS:</Paragraph>,
      <BpkMarkdownRenderer source={getMarkdownString(iosStatus)} />,
    ],
  },
  {
    id: 'backpack-android',
    title: 'Backpack Android',
    blurb: [
      <Paragraph>The current status of Android:</Paragraph>,
      <BpkMarkdownRenderer source={getMarkdownString(androidStatus)} />,
    ],
  },
  {
    id: 'backpack-react-scripts',
    title: 'Backpack React Scripts',
    blurb: [
      <Paragraph>The current status of BRS:</Paragraph>,
      <BpkMarkdownRenderer source={getMarkdownString(brsStatus)} />,
    ],
  },
  {
    id: 'backpack-node-sass',
    title: 'Backpack Node Sass',
    blurb: [
      <Paragraph>The current status of Backpack Node Sass:</Paragraph>,
      <BpkMarkdownRenderer source={getMarkdownString(bnsStatus)} />,
    ],
  },
  {
    id: 'eslint-config-skyscanner',
    title: 'ESLint config Skyscanner',
    blurb: [
      <Paragraph>The current status of ESLint config Skyscanner:</Paragraph>,
      <BpkMarkdownRenderer source={getMarkdownString(ecsStatus)} />,
    ],
  },
  {
    id: 'eslint-plugin-backpack',
    title: 'ESLint plugin Backpack',
    blurb: [
      <Paragraph>The current status of ESLint plugin Backpack:</Paragraph>,
      <BpkMarkdownRenderer source={getMarkdownString(epbStatus)} />,
    ],
  },
];

const blurb = [
  <IntroBlurb>
    Here you will find the current Backpack CI status and release versions.
  </IntroBlurb>,
];

const StatusPage = () => (
  <DocsPageBuilder
    title="Backpack Status"
    blurb={blurb}
    components={components}
  />
);

export default StatusPage;
