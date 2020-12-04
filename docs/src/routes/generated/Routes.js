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

import DEVELOPER_ACCESSIBILITY_GUIDELINES from '../../static-pages/accessibility.mdx';
import COPYWRITING from '../../static-pages/copywriting.mdx';
import ICONOGRAPHY from '../../static-pages/iconography.mdx';
import ILLUSTRATION from '../../static-pages/illustration.mdx';
import IN_USE from '../../static-pages/in-use.mdx';
import LOGO from '../../static-pages/logo.mdx';
import PHOTOGRAPHY from '../../static-pages/photography.mdx';
import STRATEGY from '../../static-pages/strategy.mdx';
import BACKPACK_REACT_SCRIPTS from '../../static-pages/backpack-react-scripts.mdx';
import BASE_STYLESHEET from '../../static-pages/base-stylesheet.mdx';
import GETTING_STARTED from '../../static-pages/getting-started.mdx';
import PRINCIPLES from '../../static-pages/principles.mdx';
import BACKPACK_STATUS from '../../static-pages/status.mdx';
import UPDATING_THIS_WEBSITE from '../../static-pages/website-contribution-guide.mdx';

export const guidelines = [{
    path: ROUTES.GENERATED_GUIDELINES_DEVELOPER_ACCESSIBILITY_GUIDELINES,
    component: () => (
      <MarkdownPage
        fileName="accessibility.mdx"
        content={DEVELOPER_ACCESSIBILITY_GUIDELINES}
        {...{"title":"Developer Accessibility Guidelines","subtitle":"To ensure that we are building the best possible products that work for everyone, we need to consider accessibility at every stage.","category":"guidelines"}}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_COPYWRITING,
    component: () => (
      <MarkdownPage
        fileName="copywriting.mdx"
        content={COPYWRITING}
        {...{"title":"Copywriting","subtitle":"Writing for Skyscanner? This basically makes you a hero.","category":"guidelines"}}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_ICONOGRAPHY,
    component: () => (
      <MarkdownPage
        fileName="iconography.mdx"
        content={ICONOGRAPHY}
        {...{"title":"Iconography","subtitle":"Icons hold a vital role within our identity, guiding travellers through the complex information on-show in our product.","category":"guidelines"}}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_ILLUSTRATION,
    component: () => (
      <MarkdownPage
        fileName="illustration.mdx"
        content={ILLUSTRATION}
        {...{"title":"Illustration","subtitle":"Illustrations are our most versatile identity element, and we use them to great effect across a wide range of applications — from informative product flows to emotive advertising.","category":"guidelines"}}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_IN_USE,
    component: () => (
      <MarkdownPage
        fileName="in-use.mdx"
        content={IN_USE}
        {...{"title":"In use","subtitle":"This section contains an overview of best-practice applications. Here we've brought together all of the elements outlined to create a range of applications that span from product screens to out-of-home advertising.","category":"guidelines"}}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_LOGO,
    component: () => (
      <MarkdownPage
        fileName="logo.mdx"
        content={LOGO}
        {...{"title":"Logo","subtitle":"Our logo is Skyscanner's most important visual element. It is the visual shorthand for our company, and the single graphic that our audiences will attach their emotion to.","category":"guidelines"}}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_PHOTOGRAPHY,
    component: () => (
      <MarkdownPage
        fileName="photography.mdx"
        content={PHOTOGRAPHY}
        {...{"title":"Photography","subtitle":"Photography captures the spirit of our brand. It allows us to evoke strong emotions, and visually transport our audiences to far-away locations, as well as capturing realistic representations of people and places.","category":"guidelines"}}
      />
    )
  },{
    path: ROUTES.GENERATED_GUIDELINES_STRATEGY,
    component: () => (
      <MarkdownPage
        fileName="strategy.mdx"
        content={STRATEGY}
        {...{"title":"Strategy","subtitle":"Our brand strategy is the blueprint that gives our brand purpose and direction. It is the set of rules that we use to inform our decisions — from day-to-day queries to long-term challenges. This section will guide you through its components.","category":"guidelines"}}
      />
    )
  }];
export const using = [{
    path: ROUTES.GENERATED_USING_BACKPACK_REACT_SCRIPTS,
    component: () => (
      <MarkdownPage
        fileName="backpack-react-scripts.mdx"
        content={BACKPACK_REACT_SCRIPTS}
        {...{"title":"Backpack React Scripts","subtitle":"Create React + Backpack web apps with no build configuration.","category":"using"}}
      />
    )
  },{
    path: ROUTES.GENERATED_USING_BASE_STYLESHEET,
    component: () => (
      <MarkdownPage
        fileName="base-stylesheet.mdx"
        content={BASE_STYLESHEET}
        {...{"title":"Base stylesheet","subtitle":"All components are built on top of a lightweight base stylesheet. Ensure you include this on the page when consuming any Backpack components.","category":"using"}}
      />
    )
  },{
    path: ROUTES.GENERATED_USING_GETTING_STARTED,
    component: () => (
      <MarkdownPage
        fileName="getting-started.mdx"
        content={GETTING_STARTED}
        {...{"title":"Getting Started","subtitle":"Depending on the audience, there are a few ways to get started.","category":"using"}}
      />
    )
  },{
    path: ROUTES.GENERATED_USING_PRINCIPLES,
    component: () => (
      <MarkdownPage
        fileName="principles.mdx"
        content={PRINCIPLES}
        {...{"title":"Principles","subtitle":"Backpack components, features and configurations are created with the following principles in mind.","category":"using"}}
      />
    )
  },{
    path: ROUTES.GENERATED_USING_BACKPACK_STATUS,
    component: () => (
      <MarkdownPage
        fileName="status.mdx"
        content={BACKPACK_STATUS}
        {...{"title":"Backpack Status","subtitle":"Here you will find the current Backpack CI status and release versions.","category":"using"}}
      />
    )
  },{
    path: ROUTES.GENERATED_USING_UPDATING_THIS_WEBSITE,
    component: () => (
      <MarkdownPage
        fileName="website-contribution-guide.mdx"
        content={UPDATING_THIS_WEBSITE}
        {...{"title":"Updating this website","subtitle":"Backpack belongs to everyone at Skyscanner. Changes are welcomed from anybody.","category":"using"}}
      />
    )
  }];