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

import ComponentScreenshots from '../DocsPageBuilder/ComponentScreenshots';

import ComponentPage from './ComponentPage';

type Props = {
  readme: string,
  screenshots: [
    {
      id: string,
      screenshots: {
        altText: string,
        height: number,
        src: string,
        subText: string,
        title: string,
        width: number,
      },
      title: string,
    },
  ],
};

const NativeComponentPage = (props: Props) => {
  const { screenshots, readme } = props;
  const screenshotsAsExamples = screenshots.map(screenshot => ({
    id: screenshot.id,
    title: screenshot.title,
    content: <ComponentScreenshots screenshots={screenshot.screenshots} />,
  }));
  return <ComponentPage examples={screenshotsAsExamples} readme={readme} />;
};

NativeComponentPage.propTypes = {
  readme: PropTypes.string.isRequired,
  screenshots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      screenshots: PropTypes.shape({
        altText: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        subText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
      }),
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default NativeComponentPage;
