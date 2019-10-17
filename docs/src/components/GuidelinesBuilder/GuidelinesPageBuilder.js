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

import HeroSection from '../HeroSection';
import Heading from '../Heading';
import NavigationFooter from '../NavigationFooter';

import STYLES from './GuidelinesPageBuilder.scss';

const getClassName = cssModules(STYLES);

type SectionProps = {
  id: string,
  title: string,
  content: Node,
  alternate: boolean,
};

type GuidelinesPageBuilderProps = {
  hero: any,
  sections: Array<SectionType>,
  title: string,
  nextPageLink: any,
};

const Section = (props: SectionProps) => {
  const { id, title, content, alternate } = props;
  const sectionClassName = [
    getClassName('bpk-docs-guidelines-page__section'),
    alternate && getClassName('bpk-docs-guidelines-page__section--alternate'),
  ];
  const contentClassName = [
    getClassName('bpk-docs-guidelines-page__content'),
    title && getClassName('bpk-docs-guidelines-page__content--title'),
  ];

  return (
    <section className={sectionClassName.join(' ')}>
      {title && (
        <Heading
          id={`section_${id}`}
          level="h2"
          className={getClassName('bpk-docs-guidelines-page__heading')}
        >
          {title}
        </Heading>
      )}
      {content && (
        <BpkContentContainer className={contentClassName}>
          {content}
        </BpkContentContainer>
      )}
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
          className={getClassName('bpk-docs-guidelines-page__hero-image')}
          imageUrl={hero.imageUrl}
          heading={hero.heading}
        />
      )}
      {sections.map(section => {
        if (section.image) {
          return (
            <HeroSection
              imageUrl={section.image.imageUrl}
              heading={section.image.heading}
              className={getClassName(
                'bpk-docs-guidelines-page__section--image',
              )}
            />
          );
        }
        return <Section {...section} />;
      })}
      <NavigationFooter
        id="footer"
        title={nextPageLink.title}
        link={nextPageLink.link}
      />
    </BpkContentContainer>
  );
};

GuidelinesPageBuilder.propTypes = {
  hero: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
  }).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.node,
      alternate: PropTypes.bool,
      image: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        heading: PropTypes.string,
      }),
    }),
  ).isRequired,
  nextPageLink: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default GuidelinesPageBuilder;
