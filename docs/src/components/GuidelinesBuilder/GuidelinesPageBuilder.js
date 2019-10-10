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

/* @flow strict */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import BpkContentContainer from 'bpk-component-content-container';
import { cssModules } from 'bpk-react-utils';
import ChevronRightIcon from 'bpk-component-icon/lg/chevron-right';
import { withRtlSupport } from 'bpk-component-icon';

import getMarkdownString from '../../helpers/markdown-helper';
import HeroSection from '../HeroSection';
import Heading from '../Heading';
import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';

import STYLES from './GuidelinesPageBuilder.scss';

const RtlSupportedChevron = withRtlSupport(ChevronRightIcon);
const getClassName = cssModules(STYLES);

type SectionProps = {
  id: string,
  title: string,
  markdown: ?string,
};

type GuidelinesPageBuilderProps = {
  hero: any,
  sections: Array<SectionType>,
  title: string,
};

type NavigationFooterProps = {
  id: string,
  title: string,
  subtitle: string,
  link: string,
};

const Section = (props: SectionProps) => {
  const { id, markdown, title } = props;
  return (
    <section className={getClassName('bpk-docs-guidelines-page__section')}>
      {title && (
        <Heading
          id={id}
          level="h2"
          className={getClassName('bpk-docs-guidelines-page__heading')}
        >
          {title}
        </Heading>
      )}
      <div className={getClassName('bpk-docs-guidelines-page__markdown')}>
        {markdown && (
          <BpkMarkdownRenderer source={getMarkdownString(markdown)} />
        )}
      </div>
    </section>
  );
};

const NavigationFooter = (props: NavigationFooterProps) => {
  const { id, title, subtitle, link } = props;
  return (
    <section className={getClassName('bpk-docs-guidelines-page__navigation')}>
      <button id="footer" onClick={() => {alert('clicked')}}>
      <div>
        {subtitle}
        <Heading id={id} level="h2">
          {title}
        </Heading>
      </div>
      <div
        className={getClassName('bpk-docs-guidelines-page__navigation--icon')}
      >
        <RtlSupportedChevron />
      </div>
      </button>
    </section>
  );
};

const GuidelinesPageBuilder = (props: GuidelinesPageBuilderProps) => {
  const { title, hero, sections, nextPageLink } = props;
  return (
    <BpkContentContainer>
      <Helmet title={title} />
      {hero && (
        <HeroSection
          className={hero.className}
          imageUrl={hero.imageUrl}
          heading={hero.heading}
          subHeading={hero.subHeading}
        />
      )}
      {sections.map(section => {
        if (section.image) {
          return (
            <HeroSection
              imageUrl={section.image.imageUrl}
              heading={section.image.heading}
              subHeading={section.image.subHeading}
            />
          );
        }
        return <Section {...section} />;
      })}
      <NavigationFooter id="footer" title={nextPageLink.title} subtitle={nextPageLink.subtitle} nextLink={nextPageLink.nextLink} />
    </BpkContentContainer>
  );
};

GuidelinesPageBuilder.propTypes = {
  hero: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.node,
  }).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      markdown: PropTypes.string,
      image: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        heading: PropTypes.string,
      })
    }),
  ).isRequired,
  nextPageLink: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    nextLink: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired,
};

export default GuidelinesPageBuilder;
