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

import Heading from '../Heading';

import STYLES from './MarkdownPage.scss';

const getClassName = cssModules(STYLES);

// TODO add web to this when we support web components in mdx
export const PLATFORMS = {
  android: 'android',
  ios: 'ios',
  native: 'native',
};

type Props = {
  documentationId: ?string,
  fileName: ?string,
  githubPath: ?string,
  platform: ?$Keys<typeof PLATFORMS>,
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
    <>
      {/* JitPack link */}
      {platform && platform === PLATFORMS.android && (
        <>
          <Heading level="h2">JitPack repository</Heading>
          <BpkLink
            href="https://jitpack.io/#skyscanner/backpack-android"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            View on JitPack&nbsp;
            <img
              src="https://jitpack.io/v/skyscanner/backpack-android.svg"
              alt="View on JitPack"
            />
          </BpkLink>
        </>
      )}

      {/* CocoaPod link */}
      {platform && platform === PLATFORMS.ios && (
        <>
          <Heading level="h2">CocoaPod</Heading>
          <BpkLink
            href="https://cocoapods.org/pods/Backpack"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            View on CocoaPods&nbsp;
            <img
              src="https://img.shields.io/cocoapods/v/Backpack.svg?style=flat"
              alt="View on CocoaPods"
            />
          </BpkLink>
        </>
      )}

      {/* RN npm link */}
      {platform && platform === PLATFORMS.native && (
        <>
          <Heading level="h2">Class reference</Heading>
          <BpkLink
            href="https://www.npmjs.com/package/backpack-react-native"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            View on npm&nbsp;
            <img
              src="https://badge.fury.io/js/backpack-react-native.svg"
              alt="View backpack-react-native on npm"
              height={18}
            />
          </BpkLink>
        </>
      )}

      {/* Android documentation link */}
      {platform && platform === PLATFORMS.android && documentationId && (
        <>
          <Heading level="h2">Class reference</Heading>
          <BpkLink
            href={`/android/versions/latest/${documentationId}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            View on Backpack&apos;s Android documentation
          </BpkLink>
        </>
      )}

      {/* iOS documentation link */}
      {platform && platform === PLATFORMS.ios && documentationId && (
        <>
          <Heading level="h2">Class reference</Heading>
          <BpkLink
            href={`/ios/versions/latest/Classes/${documentationId}.html`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            View on Backpack&apos;s iOS documentation
          </BpkLink>
        </>
      )}

      {/* Android GitHub link */}
      {platform && platform === PLATFORMS.android && githubPath && (
        <>
          <Heading level="h2">Source code</Heading>
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-android/tree/master/Backpack/src/main/java/net/skyscanner/backpack/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            View on GitHub
          </BpkLink>
        </>
      )}

      {/* iOS GitHub link */}
      {platform && platform === PLATFORMS.ios && githubPath && (
        <>
          <Heading level="h2">Source code</Heading>
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-ios/tree/master/Backpack/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            View on GitHub
          </BpkLink>
        </>
      )}

      {/* RN GitHub link */}
      {platform && platform === PLATFORMS.native && githubPath && (
        <>
          <Heading level="h2">Source code</Heading>
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-react-native/tree/master/lib/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            View on GitHub
          </BpkLink>
        </>
      )}

      {fileName && (
        <>
          <Heading id="edit-page" level="h2">
            Improve this page
          </Heading>
          <BpkLink
            href={`https://github.com/skyscanner/backpack-docs/edit/master/docs/src/static-pages/${fileName}`}
          >
            Edit this page on GitHub
          </BpkLink>
        </>
      )}
    </>
  );
};

export default AdditionalLinks;
