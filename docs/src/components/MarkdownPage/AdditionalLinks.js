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
import { cssModules } from 'bpk-react-utils';
import BpkLink from 'bpk-component-link';
import BpkButton from 'bpk-component-button';

import STYLES from './MarkdownPage.scss';

const getClassName = cssModules(STYLES);

export const PLATFORMS = {
  android: 'android',
  ios: 'ios',
  native: 'native',
  web: 'web',
};

export type PlatformType = $Keys<typeof PLATFORMS>;

type Props = {
  documentationId: ?string,
  fileName: ?string,
  githubPath: ?string,
  platform: ?PlatformType,
};

const AdditionalLinks = (props: Props) => {
  const { documentationId, fileName, githubPath, platform } = props;

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
        {/* JitPack link */}
        {platform && platform === PLATFORMS.android && (
          <BpkLink
            href="https://jitpack.io/#skyscanner/backpack-android"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://jitpack.io/v/skyscanner/backpack-android.svg"
              alt="View on JitPack"
            />
          </BpkLink>
        )}

        {/* CocoaPod link */}
        {platform && platform === PLATFORMS.ios && (
          <BpkLink
            href="https://cocoapods.org/pods/Backpack"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/cocoapods/v/Backpack.svg?style=flat"
              alt="View on CocoaPods"
            />
          </BpkLink>
        )}

        {/* RN npm link */}
        {platform && platform === PLATFORMS.native && (
          <BpkLink
            href="https://www.npmjs.com/package/backpack-react-native"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://badge.fury.io/js/backpack-react-native.svg"
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
              src={`https://badge.fury.io/js/${githubPath}.svg`}
              alt={`View ${githubPath} on npm`}
            />
          </BpkLink>
        )}

        {/* Android documentation link */}
        {platform && platform === PLATFORMS.android && documentationId && (
          <BpkLink
            href={`/android/versions/latest/${documentationId}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Class%20reference-Android-blue"
              alt="View class reference"
            />
          </BpkLink>
        )}

        {/* iOS documentation link */}
        {platform && platform === PLATFORMS.ios && documentationId && (
          <BpkLink
            href={`/ios/versions/latest/Classes/${documentationId}.html`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Class%20reference-iOS-blue"
              alt="View class reference"
            />
          </BpkLink>
        )}

        {/* Android GitHub link */}
        {platform && platform === PLATFORMS.android && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-android/tree/master/Backpack/src/main/java/net/skyscanner/backpack/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Source%20code-GitHub-lightgrey"
              alt="View source code on GitHub"
            />
          </BpkLink>
        )}

        {/* iOS GitHub link */}
        {platform && platform === PLATFORMS.ios && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-ios/tree/master/Backpack/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Source%20code-GitHub-lightgrey"
              alt="View source code on GitHub"
            />
          </BpkLink>
        )}

        {/* RN GitHub link */}
        {platform && platform === PLATFORMS.native && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-react-native/tree/master/lib/${githubPath}`}
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
            href={`https://github.com/Skyscanner/backpack/tree/master/packages/${githubPath}`}
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
          href={
            platform
              ? `https://github.com/skyscanner/backpack-docs/edit/master/docs/src/pages/components/${fileName}`
              : `https://github.com/skyscanner/backpack-docs/edit/master/docs/src/static-pages/${fileName}`
          }
        >
          Edit page
        </BpkButton>
      )}
    </div>
  );
};

export default AdditionalLinks;
