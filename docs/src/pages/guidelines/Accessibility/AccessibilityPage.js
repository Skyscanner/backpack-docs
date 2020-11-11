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

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'bpk-react-utils';
import BpkHorizontalNav, {
  BpkHorizontalNavItem,
} from 'bpk-component-horizontal-nav';

import GuidelinesPageBuilder from '../../../components/GuidelinesBuilder';
import AccessibilityHero from '../../../static/accessibility/accessibility_hero.svg';
import AccessibilityOverviewSubpage from '../AccessibilityOverview';
import AccessibilityDesignPage from '../AccessibilityDesign';
import * as ROUTES from '../../../constants/routes';

import STYLES from './accessibility-page.scss';

const getClassName = cssModules(STYLES);

const SubpageNav = ({
  selectedSubpage,
  onOverviewClick,
  onDesignClick,
  onCopyClick,
  onEngineeringClick,
  onTestingClick,
  onAssistiveTechnologyClick,
}) => (
  <BpkHorizontalNav
    autoScrollToSelected
    className={getClassName('bpkdocs-page-wrapper__platform-switcher')}
  >
    <BpkHorizontalNavItem
      name="Overview"
      selected={selectedSubpage === 'overview'}
      onClick={onOverviewClick}
    >
      Overview
    </BpkHorizontalNavItem>
    <BpkHorizontalNavItem
      name="Design"
      selected={selectedSubpage === 'design'}
      onClick={onDesignClick}
    >
      Design
    </BpkHorizontalNavItem>
    <BpkHorizontalNavItem
      name="Copy"
      selected={selectedSubpage === 'copy'}
      onClick={onCopyClick}
    >
      Copy
    </BpkHorizontalNavItem>
    <BpkHorizontalNavItem
      name="Engineering"
      selected={selectedSubpage === 'engineering'}
      onClick={onEngineeringClick}
    >
      Developer
    </BpkHorizontalNavItem>
    <BpkHorizontalNavItem
      name="Testing"
      selected={selectedSubpage === 'testing'}
      onClick={onTestingClick}
    >
      Testing
    </BpkHorizontalNavItem>
    <BpkHorizontalNavItem
      name="Assistive technology"
      selected={selectedSubpage === 'assistive-technology'}
      onClick={onAssistiveTechnologyClick}
    >
      Assistive technology
    </BpkHorizontalNavItem>
  </BpkHorizontalNav>
);

SubpageNav.propTypes = {
  selectedSubpage: PropTypes.string.isRequired,
  onOverviewClick: PropTypes.func.isRequired,
  onDesignClick: PropTypes.func.isRequired,
  onCopyClick: PropTypes.func.isRequired,
  onEngineeringClick: PropTypes.func.isRequired,
  onTestingClick: PropTypes.func.isRequired,
  onAssistiveTechnologyClick: PropTypes.func.isRequired,
};

class AccessibilityPage extends Component {
  constructor() {
    super();

    this.state = { selectedSubpage: 'overview' };
  }

  componentDidMount() {
    const location = window.location.pathname;
    location.split('/').forEach(path => {
      if (
        path === 'overview' ||
        path === 'design' ||
        path === 'copy' ||
        path === 'engineering'
      ) {
        this.setState({ selectedSubpage: path });
      }
    });
  }

  subpageSelected = subpage => {
    window.history.pushState({}, '', `/guidelines/accessibility/${subpage}`);
    this.setState({ selectedSubpage: subpage });
  };

  render() {
    const sections = [
      {
        id: 'intro',
        className: getClassName('bpk-docs-accessibility-page__nav'),
        contentClassName: getClassName('bpk-docs-accessibility-page__page'),
        content: (
          <Fragment>
            <SubpageNav
              selectedSubpage={this.state.selectedSubpage}
              onOverviewClick={() => this.subpageSelected('overview')}
              onDesignClick={() => this.subpageSelected('design')}
              onCopyClick={() => this.subpageSelected('copy')}
              onEngineeringClick={() => this.subpageSelected('engineering')}
              onTestingClick={() => this.subpageSelected('testing')}
              onAssistiveTechnologyClick={() =>
                this.subpageSelected('assistive-technology')
              }
            />
            {this.state.selectedSubpage === 'design' && (
              <AccessibilityDesignPage />
            )}
            {this.state.selectedSubpage === 'overview' && (
              <AccessibilityOverviewSubpage />
            )}
          </Fragment>
        ),
      },
    ];

    return (
      <GuidelinesPageBuilder
        title="Accessibility"
        hero={{
          heading: 'Accessibility',
          imageUrl: `/${AccessibilityHero}`,
          className: getClassName('bpk-docs-accessibility-page__hero'),
        }}
        sections={sections}
        nextPageLink={{
          title: 'Strategy',
          link: ROUTES.GENERATED_GUIDELINES_STRATEGY,
        }}
      />
    );
  }
}

export default AccessibilityPage;
