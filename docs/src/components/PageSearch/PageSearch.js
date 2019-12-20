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

/* @flow */

import React, { Component } from 'react';
import { withRouter, type RouterHistory } from 'react-router-dom';
import BpkAutosuggest, {
  BpkAutosuggestSuggestion,
} from 'bpk-component-autosuggest';
import { flatMap } from 'lodash';

import LINKS from '../../layouts/links';

import { getMatchingPages } from './search';

const FlattenedLinks = flatMap(LINKS, section => section.links);

const convertTagsToPlatformsString = (
  tags: ?Array<'android' | 'ios' | 'native' | 'web'>,
): ?string => {
  if (!tags) {
    return null;
  }
  const platforms = [];
  if (tags.indexOf('android') !== -1) {
    platforms.push('Android');
  }
  if (tags.indexOf('ios') !== -1) {
    platforms.push('iOS');
  }
  if (tags.indexOf('native') !== -1) {
    platforms.push('React Native');
  }
  if (tags.indexOf('web') !== -1) {
    platforms.push('Web');
  }
  return platforms.join(' · ');
};

type Props = {
  wrapperClassName: ?string,
  inputClassName: ?string,
  history: RouterHistory,
};
type State = { value: string, suggestions: [] };

class PageSearch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: '', suggestions: [] };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  onChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const suggestions = getMatchingPages(value, FlattenedLinks);
    this.setState({
      suggestions,
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    this.props.history.push(suggestion.route);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  getSuggestionValue = ({ children }) => children;

  inputRef: ?HTMLInputElement = null;

  handleClear = () => {
    this.setState({ value: '' });
  };

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.metaKey && e.key.toLowerCase() === 's') {
      if (this.inputRef) {
        this.inputRef.focus();
        window.scrollTo(0, 0);
      }
    }
  };

  renderSuggestion = suggestion => (
    <BpkAutosuggestSuggestion
      value={suggestion.children}
      subHeading={convertTagsToPlatformsString(suggestion.tags)}
    />
  );

  render() {
    const { value, suggestions } = this.state;
    const { inputClassName, wrapperClassName } = this.props;
    const inputProps = {
      id: 'search-pages',
      name: 'search-pages',
      value,
      onChange: this.onChange,
      placeholder: 'Have a search first',
      className: inputClassName,
      inputRef: ref => {
        this.inputRef = ref;
      },
    };
    return (
      <div className={wrapperClassName}>
        <BpkAutosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default withRouter(PageSearch);
