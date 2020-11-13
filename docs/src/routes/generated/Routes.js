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
import COPYWRITING from '../../static-pages/copywriting.md';
import ICONOGRAPHY from '../../static-pages/iconography.md';
import ILLUSTRATION from '../../static-pages/illustration.md';
import IN_USE from '../../static-pages/in-use.md';
import LOGO from '../../static-pages/logo.md';
import PHOTOGRAPHY from '../../static-pages/photography.md';
import SHADOWS from '../../static-pages/shadows.md';
import STRATEGY from '../../static-pages/strategy.md';
import TONE_OF_VOICE from '../../static-pages/tone-of-voice.md';

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
export const guidelines = [{
    path: ROUTES.GENERATED_GUIDELINES_COPYWRITING,
    component: () => (
      <MarkdownPage
        fileName="copywriting.md"
        title="Copywriting"
        subtitle="Writing for Skyscanner? This basically makes you a hero."
        content={COPYWRITING}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_ICONOGRAPHY,
    component: () => (
      <MarkdownPage
        fileName="iconography.md"
        title="Iconography"
        subtitle="Icons hold a vital role within our identity, guiding travellers through the complex information on-show in our product."
        content={ICONOGRAPHY}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_ILLUSTRATION,
    component: () => (
      <MarkdownPage
        fileName="illustration.md"
        title="Illustration"
        subtitle="Illustrations are our most versatile identity element, and we use them to great effect across a wide range of applications — from informative product flows to emotive advertising."
        content={ILLUSTRATION}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_IN_USE,
    component: () => (
      <MarkdownPage
        fileName="in-use.md"
        title="In use"
        subtitle="This section contains an overview of best-practice applications. Here we've brought together all of the elements outlined to create a range of applications that span from product screens to out-of-home advertising."
        content={IN_USE}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_LOGO,
    component: () => (
      <MarkdownPage
        fileName="logo.md"
        title="Logo"
        subtitle="Our logo is Skyscanner's most important visual element. It is the visual shorthand for our company, and the single graphic that our audiences will attach their emotion to."
        content={LOGO}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_PHOTOGRAPHY,
    component: () => (
      <MarkdownPage
        fileName="photography.md"
        title="Photography"
        subtitle="Photography captures the spirit of our brand. It allows us to evoke strong emotions, and visually transport our audiences to far-away locations, as well as capturing realistic representations of people and places."
        content={PHOTOGRAPHY}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_SHADOWS,
    component: () => (
      <MarkdownPage
        fileName="shadows.md"
        title="Shadows"
        subtitle="Shadows are our richest visual identity element, enabling us to express an abstract sense of place"
        content={SHADOWS}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_STRATEGY,
    component: () => (
      <MarkdownPage
        fileName="strategy.md"
        title="Strategy"
        subtitle="Our brand strategy is the blueprint that gives our brand purpose and direction. It is the set of rules that we use to inform our decisions — from day-to-day queries to long-term challenges. This section will guide you through its components."
        content={STRATEGY}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_TONE_OF_VOICE,
    component: () => (
      <MarkdownPage
        fileName="tone-of-voice.md"
        title="Tone of voice"
        subtitle="Our tone of voice is the unique way in which we speak to travellers, partners and ourselves."
        content={TONE_OF_VOICE}
      />
    )
  }];
