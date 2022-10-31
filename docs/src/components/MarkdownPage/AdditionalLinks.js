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

/* @flow strict */

import React from 'react';

import sassdocLogo from '../../static/sassdoc-logo.svg';

import STYLES from './MarkdownPage.scss';

import { cssModules } from 'backpack/packages/bpk-react-utils';
import BpkLink from 'backpack/packages/bpk-component-link';
import BpkButton from 'backpack/packages/bpk-component-button';

const getClassName = cssModules(STYLES);

export const PLATFORMS = {
  android: 'android',
  ios: 'ios',
  native: 'native',
  compose: 'compose',
  swiftui: 'swiftui',
  web: 'web',
};

export type PlatformType = $Keys<typeof PLATFORMS>;

type Props = {
  documentationId: ?string,
  fileName: ?string,
  githubPath: ?string,
  platform: ?PlatformType,
  sassdocId: ?string,
};

const AdditionalLinks = (props: Props) => {
  const { documentationId, fileName, githubPath, platform, sassdocId } = props;

  if (platform && !Object.keys(PLATFORMS).includes(platform)) {
    throw new Error(
      `${platform} is not a valid platform. Must be one of ${Object.keys(
        PLATFORMS,
      ).join(' ')}.`,
    );
  }

  return (
    <div className={getClassName('bpkdocs-markdown-page__additional-links')}>
      <div>
        {/* RN npm link */}
        {platform && platform === PLATFORMS.native && (
          <BpkLink
            href="https://www.npmjs.com/package/backpack-react-native"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/npm/v/backpack-react-native"
              alt="View backpack-react-native on npm"
            />
          </BpkLink>
        )}

        {/* Web npm link */}
        {platform && platform === PLATFORMS.web && githubPath && (
          <BpkLink
            href={`https://www.npmjs.com/package/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src={`https://img.shields.io/npm/v/${githubPath}.svg`}
              alt={`View ${githubPath} on npm`}
            />
          </BpkLink>
        )}

        {/* Web sassdoc link */}
        {platform && platform === PLATFORMS.web && sassdocId && (
          <BpkLink
            href={`/sassdoc/#${sassdocId}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              width="55"
              height="20"
              src={`/${sassdocLogo}`}
              alt={`View ${sassdocId} mixins and variables on Backpack's Sassdoc`}
            />
          </BpkLink>
        )}

        {/* RN GitHub link */}
        {platform && platform === PLATFORMS.native && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-react-native/tree/main/lib/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Source%20code-GitHub-lightgrey"
              alt="View source code on GitHub"
            />
          </BpkLink>
        )}

        {/* Web GitHub link */}
        {platform && platform === PLATFORMS.web && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack/tree/main/packages/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Source%20code-GitHub-lightgrey"
              alt="View source code on GitHub"
            />
          </BpkLink>
        )}
      </div>

      {fileName && (
        <BpkButton
          secondary
          blank
          className={getClassName('bpkdocs-markdown-page__edit-button')}
          href={`https://github.com/skyscanner/backpack-docs/edit/main${fileName}`}
        >
          Edit page
        </BpkButton>
      )}
    </div>
  );
};

export default AdditionalLinks;
