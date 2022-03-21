/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
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

import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import BpkContentContainer from 'bpk-component-content-container';
import BpkHorizontalNav, {
  BpkHorizontalNavItem,
} from 'bpk-component-horizontal-nav';
import { cssModules } from 'bpk-react-utils';

import {
  setPlatformInLocalStorage,
  getPlatformFromLocalStorage,
} from '../../helpers/platform-helper';
import Heading from '../Heading';
import DesignPlaceholderPage from '../../pages/components/DesignPlaceholder';

import Blurb from './Blurb';
import STYLES from './DocsPageWrapper.scss';

const getClassName = cssModules(STYLES);

const contentShape = PropTypes.oneOfType([PropTypes.string, PropTypes.node]);
const platformQueryParamRegex = /platform=(design|android|ios|native|web|compose)/;

const PlatformNav = ({
  platform,
  onDesignClick,
  onNativeClick,
  onWebClick,
  onAndroidClick,
  onComposeClick,
  onIOSClick,
  disableNativeTab,
  disableWebTab,
  disableAndroidTab,
  disableComposeTab,
  disableIOSTab,
}) => (
  <BpkHorizontalNav
    autoScrollToSelected
    className={getClassName('bpkdocs-page-wrapper__platform-switcher')}
  >
    <BpkHorizontalNavItem
      name="design"
      selected={platform === 'design'}
      onClick={onDesignClick}
    >
      Design
    </BpkHorizontalNavItem>
    <BpkHorizontalNavItem
      name="android"
      disabled={disableAndroidTab}
      selected={platform === 'android'}
      onClick={onAndroidClick}
    >
      Android
    </BpkHorizontalNavItem>
    <BpkHorizontalNavItem
      name="compose"
      disabled={disableComposeTab}
      selected={platform === 'compose'}
      onClick={onComposeClick}
    >
      Compose (Preview)
    </BpkHorizontalNavItem>
    <BpkHorizontalNavItem
      name="ios"
      disabled={disableIOSTab}
      selected={platform === 'ios'}
      onClick={onIOSClick}
    >
      iOS
    </BpkHorizontalNavItem>
    <BpkHorizontalNavItem
      name="native"
      disabled={disableNativeTab}
      selected={platform === 'native'}
      onClick={onNativeClick}
    >
      React Native
    </BpkHorizontalNavItem>
    <BpkHorizontalNavItem
      name="web"
      disabled={disableWebTab}
      selected={platform === 'web'}
      onClick={onWebClick}
    >
      Web
    </BpkHorizontalNavItem>
  </BpkHorizontalNav>
);

PlatformNav.propTypes = {
  platform: PropTypes.oneOf([
    'design',
    'android',
    'ios',
    'native',
    'web',
    'compose',
  ]).isRequired,
  onDesignClick: PropTypes.func.isRequired,
  onAndroidClick: PropTypes.func.isRequired,
  onComposeClick: PropTypes.func.isRequired,
  onIOSClick: PropTypes.func.isRequired,
  onNativeClick: PropTypes.func.isRequired,
  onWebClick: PropTypes.func.isRequired,
  disableAndroidTab: PropTypes.bool.isRequired,
  disableComposeTab: PropTypes.bool.isRequired,
  disableIOSTab: PropTypes.bool.isRequired,
  disableNativeTab: PropTypes.bool.isRequired,
  disableWebTab: PropTypes.bool.isRequired,
};

const DocsPageWrapper = props => {
  const {
    blurb,
    designSubpage,
    androidSubpage,
    composeSubpage,
    iosSubpage,
    nativeSubpage,
    webSubpage,
    title,
    match,
    history,
    location,
  } = props;
  const path = match.url;

  const platforms = {
    design: designSubpage || <DesignPlaceholderPage />,
    android: androidSubpage,
    compose: composeSubpage,
    ios: iosSubpage,
    native: nativeSubpage,
    web: webSubpage,
  };

  const canUsePlatformPreference = platformPreference => {
    if (!platformPreference) {
      return false;
    }
    return !!platforms[platformPreference];
  };

  let initiallySelectedPlatform = null;
  const platformFromLocalStorage = getPlatformFromLocalStorage();
  if (canUsePlatformPreference(platformFromLocalStorage)) {
    initiallySelectedPlatform = platformFromLocalStorage;
  } else if (designSubpage) {
    initiallySelectedPlatform = 'design';
  } else if (androidSubpage) {
    initiallySelectedPlatform = 'android';
  } else if (composeSubpage) {
    initiallySelectedPlatform = 'compose';
  } else if (iosSubpage) {
    initiallySelectedPlatform = 'ios';
  } else if (nativeSubpage) {
    initiallySelectedPlatform = 'native';
  } else if (webSubpage) {
    initiallySelectedPlatform = 'web';
  }

  const platformQueryParamMatches = platformQueryParamRegex.exec(
    location.search,
  );
  if (platformQueryParamMatches && platforms[platformQueryParamMatches[1]]) {
    const platformQueryParam = platformQueryParamMatches[1];
    initiallySelectedPlatform = platformQueryParam;
  } else {
    history.replace(`${path}?platform=${initiallySelectedPlatform}`);
  }

  const initiallyRenderedSubpage = platforms[initiallySelectedPlatform];

  const onPlatformClick = platformName => {
    setPlatformInLocalStorage(platformName);
    history.push(`${path}?platform=${platformName}`);
  };

  return (
    <BpkContentContainer className={getClassName('bpkdocs-page-wrapper')}>
      <Helmet title={props.title} />
      <div className={getClassName('bpkdocs-page-wrapper__inner')}>
        <Heading level="h1">{title}</Heading>
        {blurb && <Blurb content={blurb} />}
      </div>

      <div>
        <PlatformNav
          platform={initiallySelectedPlatform}
          onDesignClick={() => onPlatformClick('design')}
          onAndroidClick={() => onPlatformClick('android')}
          onComposeClick={() => onPlatformClick('compose')}
          onIOSClick={() => onPlatformClick('ios')}
          onNativeClick={() => onPlatformClick('native')}
          onWebClick={() => onPlatformClick('web')}
          disableAndroidTab={!androidSubpage}
          disableComposeTab={!composeSubpage}
          disableIOSTab={!iosSubpage}
          disableNativeTab={!nativeSubpage}
          disableWebTab={!webSubpage}
        />
        {initiallyRenderedSubpage}
      </div>
    </BpkContentContainer>
  );
};

DocsPageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  blurb: contentShape,
  designSubpage: PropTypes.element,
  webSubpage: PropTypes.element,
  nativeSubpage: PropTypes.element,
  androidSubpage: PropTypes.element,
  composeSubpage: PropTypes.element,
  iosSubpage: PropTypes.element,
};

DocsPageWrapper.defaultProps = {
  blurb: null,
  designSubpage: null,
  webSubpage: null,
  nativeSubpage: null,
  androidSubpage: null,
  composeSubpage: null,
  iosSubpage: null,
};

export default withRouter(DocsPageWrapper);
