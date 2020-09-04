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

import React, { Component } from 'react';
import BpkDatepicker from 'bpk-component-datepicker';
import BpkRouterLink from 'bpk-component-router-link';
import datepickerReadme from 'bpk-component-datepicker/README.md';
import format from 'date-fns/format';
import { weekDays } from 'bpk-component-calendar/test-utils';

import * as ROUTES from '../../constants/routes';
import { WebComponentPage } from '../../components/ComponentPage';
import DocsPageWrapper from '../../components/DocsPageWrapper';
import Paragraph from '../../components/Paragraph';
import IntroBlurb from '../../components/IntroBlurb';

const formatDate = date => format(date, 'dd/MM/yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
const formatDateFull = date => format(date, 'do MMMM yyyy');

class DatepickerContainer extends Component {
  constructor() {
    super();

    this.state = {
      date: null,
    };
  }

  render() {
    return (
      <BpkDatepicker
        {...this.props}
        date={this.state.date}
        onDateSelect={date => this.setState({ date })}
      />
    );
  }
}

const components = [
  {
    id: 'datepicker',
    title: 'Default',
    blurb: [
      <Paragraph>Default calendar, input and popover configuration.</Paragraph>,
      <Paragraph>
        See the{' '}
        <BpkRouterLink to={ROUTES.CALENDAR}>
          BpkCalendar documentation
        </BpkRouterLink>{' '}
        for more examples.
      </Paragraph>,
    ],
    examples: [
      <DatepickerContainer
        id="calendar-1"
        closeButtonText="Close"
        formatDate={formatDate}
        formatDateFull={formatDateFull}
        formatMonth={formatMonth}
        daysOfWeek={weekDays}
        weekStartsOn={1}
        changeMonthLabel="Change month"
        title="Select date"
        getApplicationElement={() => document.getElementById('pagewrap')}
        renderTarget={() => document.getElementById('portal-target')}
        inputProps={{ placeholder: 'Select date' }}
      />,
    ],
  },
];

const blurb = [
  <IntroBlurb>
    The date picker is an input control that allows the user to pick a single
    date. It embeds a{' '}
    <BpkRouterLink to={ROUTES.CALENDAR}>calendar component</BpkRouterLink> in a{' '}
    <BpkRouterLink to={ROUTES.POPOVER}>popover</BpkRouterLink>.
  </IntroBlurb>,
];

const DatepickerSubPage = () => (
  <WebComponentPage
    examples={components}
    readme={datepickerReadme}
    packageName="bpk-component-datepicker"
  />
);

const DatepickerPage = () => (
  <DocsPageWrapper
    title="Date picker"
    blurb={blurb}
    webSubpage={<DatepickerSubPage />}
  />
);

export default DatepickerPage;
