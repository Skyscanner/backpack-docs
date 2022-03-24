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

import React from 'react';
import PropTypes from 'prop-types';

import * as ROUTES from '../../constants/routes';
import * as EXTERNAL_ROUTES from '../../constants/external-routes';
import HomePageCard from '../../components/HomePageCard';
import ComponentsImage from '../../static/components_hero.jpg';
import DesignTokensImage from '../../static/design_tokens.jpg';
import RequestImage from '../../static/request.jpg';
import SassDocImage from '../../static/sassdoc.jpg';
import IconsImage from '../../static/icons.jpg';
import UsingBackpackImage from '../../static/using_bpk.jpg';
import GuidelinesImage from '../../static/guidelines.png';
import ComponentsIcon from '../../static/components_icon.svg';
import DesignTokensIcon from '../../static/design_tokens_icon.svg';
import UsingBackpackIcon from '../../static/using_bpk_icon.svg';
import GuidelinesIcon from '../../static/guidelines_icon.svg';
import HeroImage from '../../static/hero.png';
import LondonHeroImage from '../../static/london_hero.jpg';
import HongKongHeroImage from '../../static/hongKong_hero.jpg';
import DohaHeroImage from '../../static/doha_hero.jpg';
import { getBackpackLogo } from '../../helpers/logo-helper';
import PageSearch from '../../components/PageSearch';

import UpdatedAt from './UpdatedAt';
import STYLES from './home-page.scss';

import { cssModules } from 'backpack/packages/bpk-react-utils';
import BpkText from 'backpack/packages/bpk-component-text';

const getClassName = cssModules(STYLES);

const CARD_CONTENTS = [
  {
    key: 'components',
    title: 'Components',
    href: ROUTES.COMPONENTS,
    image: ComponentsImage,
    icon: ComponentsIcon,
  },
  {
    key: 'icons',
    title: 'Icons',
    href: `${ROUTES.ICON}?platform=design`,
    image: IconsImage,
    icon: null,
  },
  {
    key: 'design-tokens',
    title: 'Design tokens',
    href: ROUTES.TOKENS,
    image: DesignTokensImage,
    icon: DesignTokensIcon,
    fullWidth: true,
  },
  {
    key: 'guidelines',
    title: 'Guidelines',
    href: ROUTES.GUIDELINES,
    image: GuidelinesImage,
    icon: GuidelinesIcon,
  },
  {
    key: 'using-backpack',
    title: 'Using Backpack',
    href: ROUTES.USING_BACKPACK,
    image: UsingBackpackImage,
    icon: UsingBackpackIcon,
  },
  {
    key: 'sassdoc',
    title: 'SassDoc',
    href: '/sassdoc',
    blank: true,
    image: SassDocImage,
    icon: null,
  },
  {
    key: 'requests',
    title: 'Make a request',
    href: EXTERNAL_ROUTES.REQUEST,
    blank: true,
    image: RequestImage,
    icon: null,
  },
];

const HERO_IMAGE_THEMES = {
  London: {
    image: LondonHeroImage,
    credit: 'Tomas Anton Escobar: London Tube',
    creditHref: 'https://unsplash.com/photos/PHyF2mCMei0',
  },
  HongKong: {
    image: HongKongHeroImage,
    credit: 'Ryan Tang: Mong Kok, Hong Kong',
    creditHref: 'https://unsplash.com/photos/ANJHXftvvJ8',
  },
  Doha: {
    image: DohaHeroImage,
    credit: null,
    creditHref: 'https://unsplash.com/photos/q99oeAG46BY',
  },
  default: {
    image: HeroImage,
    credit: null,
    creditHref: null,
  },
};
const HomePage = (props, context) => {
  const { history } = props;

  const getHeroImageForTheme = () => {
    if (
      !context.theme ||
      Object.keys(HERO_IMAGE_THEMES).indexOf(context.theme.themeName) < 0
    ) {
      return HERO_IMAGE_THEMES.default;
    }
    return HERO_IMAGE_THEMES[context.theme.themeName];
  };

  const backpackLogo = getBackpackLogo(true);
  const heroImage = getHeroImageForTheme();

  return (
    <section>
      <div
        style={{ backgroundImage: `url(/${heroImage.image})` }}
        className={getClassName('bpkdocs-home-page__hero')}
      >
        <div className={getClassName('bpkdocs-home-page__hero-logo-container')}>
          <div style={{ flex: 1 }}>
            <img
              role="heading"
              aria-level="1"
              src={`/${backpackLogo}`}
              className={getClassName('bpkdocs-home-page__hero-logo')}
              alt="Backpack"
            />
            {process.env.BPK_BUILT_AT && (
              <UpdatedAt
                date={new Date(process.env.BPK_BUILT_AT * 1000)}
                className={getClassName('bpkdocs-home-page__hero-updated')}
              />
            )}
          </div>
          {heroImage.credit && (
            <a
              href={heroImage.creditHref}
              target="_blank"
              rel="noopener noreferrer"
              className={getClassName('bpkdocs-home-page__hero-credit')}
            >
              {heroImage.credit}
            </a>
          )}
        </div>
        <div className={getClassName('bpkdocs-home-page__hero-inner')}>
          <BpkText
            textStyle="xl"
            tagName="p"
            className={getClassName('bpkdocs-home-page__hero-blurb')}
          >
            <span aria-hidden="true">&mdash;</span>
            <br />
            Backpack is a collection of design resources, reusable components
            and guidelines for creating Skyscanner products.
          </BpkText>
        </div>
      </div>
      <div className={getClassName('bpkdocs-home-page__search-container')}>
        <PageSearch
          inputClassName={getClassName('bpkdocs-home-page__search-input')}
          wrapperClassName={getClassName(
            'bpkdocs-home-page__search-results-wrapper',
          )}
        />
      </div>
      <div className={getClassName('bpkdocs-home-page__cards-container')}>
        {CARD_CONTENTS.map(({ href, fullWidth, ...rest }) => (
          <HomePageCard
            {...rest}
            href={rest.blank ? href : null}
            onClick={rest.blank ? null : () => history.push(href)}
            className={getClassName(
              'bpkdocs-home-page__card',
              fullWidth && 'bpkdocs-home-page__card--full-width',
            )}
          />
        ))}
      </div>
    </section>
  );
};

HomePage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

HomePage.contextTypes = {
  theme: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default HomePage;
